import os
import re
import time
import json
import argparse
import asyncio
from collections import deque
from urllib.parse import urljoin, urlparse, urldefrag

import requests
from playwright.async_api import async_playwright

IMG_EXT_RE = re.compile(r"\.(jpe?g|png|gif|webp|svg|avif)(\?.*)?$", re.IGNORECASE)

def same_site(url, base_netloc):
    try:
        return urlparse(url).netloc == base_netloc
    except Exception:
        return False

def norm_url(url):
    url, _frag = urldefrag(url)
    return url

def looks_like_image(url):
    return bool(IMG_EXT_RE.search(url))

def download_file(session, url, out_dir):
    os.makedirs(out_dir, exist_ok=True)
    parsed = urlparse(url)
    filename = os.path.basename(parsed.path) or "image"
    base, ext = os.path.splitext(filename)
    if not ext:
        ext = ".jpg"
    path = os.path.join(out_dir, filename)
    i = 1
    while os.path.exists(path):
        path = os.path.join(out_dir, f"{base}_{i}{ext}")
        i += 1

    try:
        r = session.get(url, stream=True, timeout=30)
        r.raise_for_status()
        with open(path, "wb") as f:
            for chunk in r.iter_content(chunk_size=1024 * 128):
                if chunk:
                    f.write(chunk)
        return path
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return None

async def crawl():
    ap = argparse.ArgumentParser()
    ap.add_argument(
        "--start",
        action="append",
        default=None,
        help="Start URL (can be provided multiple times)",
    )
    ap.add_argument("--max-pages", type=int, default=50, help="Safety limit")
    ap.add_argument("--out", default="images", help="Download folder")
    ap.add_argument("--download", action="store_true", help="Actually download images")
    ap.add_argument("--save-json", default="images.json", help="Save results to JSON")
    args = ap.parse_args()

    starts = args.start or ["https://www.yannova.be/"]
    starts = [norm_url(s) for s in starts]
    base_netloc = urlparse(starts[0]).netloc

    q = deque(starts)
    seen_pages = set(starts)
    image_urls = set()

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        
        pages_crawled = 0
        print(f"Starting SPA crawl of {', '.join(starts)}...")

        while q and pages_crawled < args.max_pages:
            url = q.popleft()
            pages_crawled += 1
            print(f"[{pages_crawled}] Crawling: {url}")

            try:
                await page.goto(url, wait_until="networkidle", timeout=30000)
                # Wait a bit for any extra JS rendering
                await asyncio.sleep(1)

                # Extract images and links
                data = await page.evaluate('''() => {
                    const imgs = new Set();
                    document.querySelectorAll('img').forEach(img => {
                        if (img.src) imgs.add(img.src);
                        if (img.dataset.src) imgs.add(img.dataset.src);
                    });
                    
                    // Background images
                    document.querySelectorAll('*').forEach(el => {
                        const bg = window.getComputedStyle(el).backgroundImage;
                        if (bg && bg !== 'none') {
                            const m = bg.match(/url\\(['"]?(.*?)['"]?\\)/);
                            if (m) imgs.add(new URL(m[1], window.location.href).href);
                        }
                    });

                    const links = Array.from(document.querySelectorAll('a[href]'))
                        .map(a => new URL(a.href, window.location.href).href);
                    
                    return { images: Array.from(imgs), links };
                }''')

                for im in data['images']:
                    if looks_like_image(im):
                        image_urls.add(norm_url(im))

                for link in data['links']:
                    link = norm_url(link)
                    if same_site(link, base_netloc) and link not in seen_pages:
                        seen_pages.add(link)
                        q.append(link)

            except Exception as e:
                print(f"Error crawling {url}: {e}")

        await browser.close()

    print(f"Finished. Found {len(image_urls)} unique images.")

    results = {
        "starts": starts,
        "pages_crawled": pages_crawled,
        "unique_images": len(image_urls),
        "images": sorted(list(image_urls)),
    }

    with open(args.save_json, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    if args.download:
        session = requests.Session()
        session.headers.update({"User-Agent": "Mozilla/5.0"})
        print(f"Downloading to {args.out}...")
        downloaded = []
        for im in sorted(list(image_urls)):
            p_path = download_file(session, im, args.out)
            if p_path:
                downloaded.append({"url": im, "path": p_path})
        
        with open("downloaded_manifest.json", "w", encoding="utf-8") as f:
            json.dump(downloaded, f, indent=2)

if __name__ == "__main__":
    asyncio.run(crawl())


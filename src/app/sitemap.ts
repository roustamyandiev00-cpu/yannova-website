import { MetadataRoute } from 'next'
import { getLocalSeoPageSlugs } from '@/lib/data/local-seo'
import { getBlogIndexPosts } from '@/lib/data/blog-posts'
import { productCatalog } from '@/lib/data/product-catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yannova.be'
  const lastModified = new Date()

  // Hoofdpagina's
  const mainPages = [
    '',
    '/diensten',
    '/diensten/ramen-deuren',
    '/diensten/isolatie',
    '/ramen',
    '/deuren',
    '/ramen-deuren',
    '/gevelrenovatie',
    '/crepi-gevel',
    '/crepi',
    '/gevelisolatie',
    '/gevelisolatie-crepi',
    '/renovatie',
    '/totaalrenovatie',
    '/projecten',
    '/over-ons',
    '/privacy',
    '/contact',
    '/offerte',
    '/premie-gids',
    '/veelgestelde-vragen',
    '/reviews',
    '/werkgebied',
    '/producten',
    '/blog',
  ]

  // Gemeenten
  const municipalities = [
    'antwerpen',
    'berchem',
    'brasschaat',
    'deurne',
    'merksem',
    'mortsel',
    'schilde',
    'schoten',
    'wijnegem',
    'wilrijk',
    'zoersel'
  ]

  // Genereer alle lokale pagina's in de nieuwe hiërarchie
  const localRamenPages = municipalities.map(m => `/ramen/${m}`)
  const localDeurenPages = municipalities.map(m => `/deuren/${m}`)
  const localGevelrenovatiePages = municipalities.map(m => `/gevelrenovatie/${m}`)
  const localRenovatiePages = municipalities.map(m => `/renovatie/${m}`)
  const localTotaalRenovatiePages = municipalities.map(m => `/totaalrenovatie/${m}`)
  const localCrepiPages = municipalities.map(m => `/crepi/${m}`)
  const localGevelisolatiePages = municipalities.map(m => `/gevelisolatie/${m}`)

  // Overige specifieke landingspagina&apos;s
  const specialLandingPages = [
    '/ramen-deuren-antwerpen',
    '/gevelrenovatie-antwerpen',
    '/renovatiebedrijf-antwerpen',
    '/crepi-isolatie-antwerpen',
  ]

  const flatLocalSeoPages = getLocalSeoPageSlugs().map((slug) => `/${slug}`)
  const blogPages = getBlogIndexPosts().map((post) => `/blog/${post.slug}`)
  const productPages = productCatalog.map((item) => `/producten/${item.slug}`)

  const allPages = [
    ...mainPages, 
    ...flatLocalSeoPages,
    ...blogPages,
    ...productPages,
    ...localRamenPages, 
    ...localDeurenPages, 
    ...localGevelrenovatiePages,
    ...localRenovatiePages,
    ...localTotaalRenovatiePages,
    ...localCrepiPages,
    ...localGevelisolatiePages,
    ...specialLandingPages
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: 
      page === '' 
        ? 'daily' as const
        : page.includes('/blog/') 
          ? 'monthly' as const
          : 'weekly' as const,
    priority:
      page === ''
        ? 1.0
        : page === '/diensten' || page === '/ramen' || page === '/deuren' || page === '/gevelrenovatie' || page === '/crepi' || page === '/gevelisolatie'
          ? 0.95
        : flatLocalSeoPages.includes(page)
          ? 0.9
          : blogPages.includes(page)
            ? 0.7
            : productPages.includes(page)
              ? 0.85
          : page.includes('/ramen/') || page.includes('/deuren/') || page.includes('/gevelrenovatie/') || page.includes('/crepi/') || page.includes('/gevelisolatie/')
            ? 0.85
            : page === '/vraag-ai'
              ? 0.8
              : 0.75,
  }))
}

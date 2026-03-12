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
    '/ramen',
    '/deuren',
    '/ramen-deuren',
    '/gevelrenovatie',
    '/crepi-gevel',
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

  // Overige specifieke landingspagina's
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
    ...specialLandingPages
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority:
      page === ''
        ? 1.0
        : flatLocalSeoPages.includes(page)
          ? 0.95
          : blogPages.includes(page)
            ? 0.85
            : productPages.includes(page)
              ? 0.88
          : page.includes('/ramen/') || page.includes('/deuren/')
            ? 0.8
            : 0.9,
  }))
}

import { MetadataRoute } from 'next'
import { priorityCities, localSeoServices } from '@/lib/data/local-seo'
import { getBlogIndexPosts } from '@/lib/data/blog-posts'
import { productCatalog } from '@/lib/data/product-catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yannova.be'
  // Gebruik vaste datum per type i.p.v. new Date() om onnodige crawls te vermijden
  const today = new Date()
  const lastWeek = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
  const lastMonth = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000)

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

  // Genereer alle lokale pagina's dynamically uit local-seo config
  const localSeoPages: string[] = []
  localSeoServices.forEach((service) => {
    // Only generate nested paths, not hubs or legacy hyphenated paths
    if (service.slug !== 'ramen-deuren' && service.slug !== 'crepi-gevel') {
      priorityCities.forEach((city) => {
        localSeoPages.push(`/${service.slug}/${city.slug}`)
      })
    }
  })

  // Overige specifieke landingspagina's
  const specialLandingPages = [
    '/ramen-deuren-antwerpen',
    '/gevelrenovatie-antwerpen',
    '/renovatiebedrijf-antwerpen',
    '/crepi-isolatie-antwerpen',
    // Geraardsbergen specifieke landing pages
    '/gevelrenovatie-geraardsbergen',
    '/renovatie-geraardsbergen',
    '/ramen-deuren-geraardsbergen',
    '/crepi-geraardsbergen',
  ]

  // Get all blog posts (both dynamic and static)
  const blogPages = getBlogIndexPosts().map((post) => `/blog/${post.slug}`)
  const productPages = productCatalog.map((item) => `/producten/${item.slug}`)

  const allPages = [
    ...mainPages, 
    ...blogPages,
    ...productPages,
    ...localSeoPages,
    ...specialLandingPages
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified:
      page === ''
        ? today
        : page.includes('/blog/')
          ? lastMonth
          : lastWeek,
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
          : blogPages.includes(page)
            ? 0.7
            : productPages.includes(page)
              ? 0.85
            : page.includes('/ramen/') || page.includes('/deuren/') || page.includes('/gevelrenovatie/') || page.includes('/crepi/') || page.includes('/gevelisolatie/') || page.includes('/renovatie/') || page.includes('/totaalrenovatie/')
              ? 0.85
              : page === '/vraag-ai'
                ? 0.8
                : 0.75,
  }))
}

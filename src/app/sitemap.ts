import { MetadataRoute } from 'next'
import { priorityCities, localSeoServices } from '@/lib/data/local-seo'
import { getBlogIndexPosts } from '@/lib/data/blog-posts'
import { productCatalog } from '@/lib/data/product-catalog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yannova.be'
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

  // Genereer alle lokale pagina's uit local-seo config
  const localSeoPages: string[] = []
  localSeoServices.forEach((service) => {
    if (service.slug !== 'ramen-deuren' && service.slug !== 'crepi-gevel') {
      priorityCities.forEach((city) => {
        localSeoPages.push(`/${service.slug}/${city.slug}`)
      })
    }
  })

  // Prioritaire Geraardsbergen landingspagina's (hoge SEO prioriteit)
  const geraardsbergenPages = [
    '/ramen-deuren-geraardsbergen',
    '/gevelrenovatie-geraardsbergen',
    '/renovatie-geraardsbergen',
    '/crepi-geraardsbergen',
  ]

  const blogPages = getBlogIndexPosts().map((post) => `/blog/${post.slug}`)
  const productPages = productCatalog.map((item) => `/producten/${item.slug}`)

  const allPages = [
    ...mainPages,
    ...blogPages,
    ...productPages,
    ...localSeoPages,
    ...geraardsbergenPages,
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
        : geraardsbergenPages.includes(page)
          ? 0.97
        : page === '/diensten' || page === '/ramen' || page === '/deuren' || page === '/gevelrenovatie' || page === '/crepi' || page === '/gevelisolatie' || page === '/renovatie' || page === '/totaalrenovatie'
          ? 0.95
        : page.includes('/geraardsbergen') || page.includes('/ninove') || page.includes('/ronse')
          ? 0.90
        : page.includes('/ramen/') || page.includes('/deuren/') || page.includes('/gevelrenovatie/') || page.includes('/crepi/') || page.includes('/gevelisolatie/') || page.includes('/renovatie/') || page.includes('/totaalrenovatie/')
          ? 0.85
        : blogPages.includes(page)
          ? 0.7
        : productPages.includes(page)
          ? 0.85
        : 0.75,
  }))
}

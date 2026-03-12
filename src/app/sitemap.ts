import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.yannova.be'
  const lastModified = new Date()

  // Hoofdpagina's
  const mainPages = [
    '',
    '/diensten',
    '/ramen',
    '/deuren',
    '/gevelisolatie-crepi',
    '/renovatie',
    '/projecten',
    '/over-ons',
    '/privacy',
    '/contact',
    '/offerte',
    '/premie-gids',
    '/veelgestelde-vragen',
    '/reviews',
    '/werkgebied',
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
  const localDeurenPages = [
    'antwerpen',
    'merksem',
    'wilrijk',
    'brasschaat',
    'schoten',
    'zoersel'
  ].map(m => `/deuren/${m}`)
  const localGevelrenovatiePages = municipalities.map(m => `/gevelrenovatie/${m}`)

  // Overige specifieke landingspagina's
  const specialLandingPages = [
    '/ramen-deuren-antwerpen',
    '/gevelrenovatie-antwerpen',
    '/renovatiebedrijf-antwerpen',
    '/crepi-isolatie-antwerpen',
  ]

  const allPages = [
    ...mainPages, 
    ...localRamenPages, 
    ...localDeurenPages, 
    ...localGevelrenovatiePages,
    ...specialLandingPages
  ]

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified,
    changeFrequency: page === '' ? 'daily' : 'weekly',
    priority: page === '' ? 1.0 : page.includes('/ramen/') || page.includes('/deuren/') ? 0.8 : 0.9,
  }))
}

import { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import { werkgebieden } from '@/lib/data/werkgebieden';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.yannova.be';

  // Statische paginas
  const staticRoutes = [
    '/',
    '/contact',
    '/reviews',
    '/projecten',
    '/blog',
    '/deuren',
    '/ramen',
    '/over-ons',
    '/diensten/renovatie',
    '/diensten/gevelrenovatie',
    '/diensten/ramen-deuren',
    '/diensten',
    '/diensten/isolatie',
    '/renovatie',
    '/offerte',
    '/gevelisolatie-crepi',
    '/premies',
    '/vraag-ai',
    '/premie-gids',
    '/advies',
    '/calculator',
    '/ramen/antwerpen',
    '/ramen/zoersel',
    '/deuren/antwerpen',
    '/deuren/zoersel',
    '/blog/pvc-of-aluminium-ramen',
    '/blog/premies-ramen-deuren-2026',
    '/blog/wat-kosten-nieuwe-ramen',
    '/blog/energiebesparing-nieuwe-ramen',
    '/blog/hoeveel-kost-gevelrenovatie',
    '/renovatiebedrijf-antwerpen',
    '/crepi-isolatie-antwerpen',
    '/gevelrenovatie-antwerpen',
    '/ramen-deuren-antwerpen',
    '/werkgebied',
    '/veelgestelde-vragen',
    '/ramen/berchem',
    '/ramen/deurne',
    '/ramen/merksem',
    '/ramen/wilrijk',
    '/ramen/brasschaat',
    '/ramen/schoten',
    '/deuren/berchem',
    '/deuren/deurne',
    '/deuren/merksem',
    '/deuren/wilrijk',
    '/deuren/brasschaat',
    '/deuren/schoten',
    '/ramen/merksem',
    '/ramen/wilrijk',
    '/ramen/brasschaat',
    '/ramen/schoten',
    '/ramen/wijnegem',
    '/ramen/mortsel',
    '/ramen/schilde',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  // Dynamische project paginas
  const projects = await prisma.project.findMany({
    where: { published: true },
    select: { id: true, updatedAt: true },
  });

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projecten/${project.id}`,
    lastModified: project.updatedAt,
  }));

  // Dynamische werkgebied paginas
  const werkgebiedRoutes = werkgebieden.map((werkgebied) => ({
    url: `${baseUrl}/werkgebied/${werkgebied.slug}`,
    lastModified: new Date(),
  }));

  return [
    ...staticRoutes,
    ...projectRoutes,
    ...werkgebiedRoutes,
  ];
}

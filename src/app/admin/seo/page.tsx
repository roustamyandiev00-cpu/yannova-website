import { prisma } from '@/lib/prisma';
import SeoClientPage, { SeoPageType, SeoAuditItemType } from './SeoClientPage';

export const dynamic = 'force-dynamic';

export default async function SeoPage() {
  const [pages, audits] = await Promise.all([
    prisma.seoPage.findMany({
      orderBy: { path: 'asc' },
    }),
    prisma.seoAudit.findMany({
      where: { fixed: false },
      orderBy: { createdAt: 'desc' },
    }),
  ]);

  return <SeoClientPage pages={pages as unknown as SeoPageType[]} audits={audits as unknown as SeoAuditItemType[]} />;
}

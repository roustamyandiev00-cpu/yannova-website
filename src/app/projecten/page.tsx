import { ProjectGallery } from "@/components/ProjectGallery";
import { prisma } from "@/lib/prisma";
import { getSeoMetadata } from "@/lib/seo-helper";

export async function generateMetadata() {
  return getSeoMetadata('/projecten');
}

export const dynamic = 'force-dynamic';

export default async function ProjectenPage() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <div className="py-24 sm:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:20px_20px] -z-10" />

      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Onze <span className="text-secondary">Projecten</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Bekijk hier een selectie van onze realisaties. Van ramen en deuren tot complete gevelrenovaties. Elk project is met zorg en vakmanschap afgewerkt.
          </p>
        </div>

        {projects.length > 0 ? (
          <ProjectGallery projects={projects} />
        ) : (
          <div className="text-center py-20 bg-white/5 rounded-3xl border border-dashed border-white/10">
            <p className="text-gray-500">Nog geen projecten om weer te geven.</p>
          </div>
        )}
      </div>
    </div>
  );
}

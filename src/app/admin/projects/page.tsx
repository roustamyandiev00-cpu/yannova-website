import Link from 'next/link';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import { deleteProject } from '@/lib/actions';
import { Plus, Trash2 } from 'lucide-react';

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Projecten</h1>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 rounded-md bg-secondary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-secondary/80"
        >
          <Plus className="h-4 w-4" /> Nieuw Project
        </Link>
      </div>

      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full align-middle">
          <div className="rounded-lg bg-white/5 p-2 md:pt-0">
            <div className="md:hidden">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="mb-2 w-full rounded-md bg-card p-4 border border-white/10"
                >
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center">
                      <div className="mr-2 h-10 w-10 overflow-hidden rounded-full">
                         <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{project.title}</p>
                        <p className="text-xs text-gray-400">{project.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between pt-4">
                    <form action={deleteProject.bind(null, project.id)}>
                        <button type="submit" className="flex items-center gap-1 rounded-md bg-red-500/10 px-2 py-1 text-xs font-medium text-red-400 hover:bg-red-500/20">
                            <Trash2 className="h-4 w-4"/> Verwijderen
                        </button>
                    </form>
                  </div>
                </div>
              ))}
            </div>
            
            <table className="hidden min-w-full text-foreground md:table">
              <thead className="rounded-lg text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Project
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Categorie
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Datum
                  </th>
                  <th scope="col" className="relative py-3 pl-6 pr-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-card">
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="w-full border-b border-white/10 py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 overflow-hidden rounded-md bg-white/5">
                            <Image
                            src={project.imageUrl}
                            alt={project.title}
                            width={40}
                            height={40}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <p className="text-foreground">{project.title}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3">
                      <span className="inline-flex items-center rounded-full bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary ring-1 ring-inset ring-secondary/20">
                        {project.category}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3 text-gray-400">
                      {project.createdAt.toLocaleDateString('nl-BE')}
                    </td>
                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                      <div className="flex justify-end gap-3">
                        <form action={deleteProject.bind(null, project.id)}>
                            <button className="rounded-md border border-white/10 p-2 hover:bg-white/5 text-red-400">
                                <Trash2 className="w-4" />
                            </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

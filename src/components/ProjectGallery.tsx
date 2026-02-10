'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface ProjectGalleryProps {
  projects: Project[]
}

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
               <span className="text-secondary text-xs font-bold tracking-wider uppercase mb-1">
                {project.category}
              </span>
              <h3 className="text-white text-xl font-bold">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
            onClick={() => setSelectedProject(null)}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-6 top-6 text-white hover:text-secondary transition-colors z-[60]"
            >
              <X className="h-10 w-10" />
            </button>
            <div className="relative h-full w-full max-w-6xl flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex-1">
                <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    quality={100}
                />
              </div>
              <div className="mt-4 text-center">
                 <span className="text-secondary text-sm font-bold uppercase tracking-widest">
                    {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                    {selectedProject.title}
                </h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                    {selectedProject.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

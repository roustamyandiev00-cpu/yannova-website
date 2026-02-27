'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Filter } from 'lucide-react'

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  location?: string | null;
  material?: string | null;
  year?: number | null;
}

interface ProjectGalleryProps {
  projects: Project[]
  categories?: string[]
}

export function ProjectGallery({ projects, categories = [] }: ProjectGalleryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const filteredProjects = activeCategory
    ? projects.filter(p => p.category === activeCategory)
    : projects

  return (
    <>
      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-gray-400 mr-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filter:</span>
          </div>
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              !activeCategory
                ? 'bg-secondary text-white'
                : 'bg-white/5 text-gray-300 hover:bg-white/10'
            }`}
          >
            Alle projecten
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Project count */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm">
          {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projecten'}
          {activeCategory && ` in categorie "${activeCategory}"`}
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
        {filteredProjects.map((project, index) => (
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
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
               <div className="flex items-center gap-2 mb-1">
                <span className="text-secondary text-xs font-bold tracking-wider uppercase">
                  {project.category}
                </span>
                {project.location && (
                  <span className="text-gray-400 text-xs">
                    • {project.location}
                  </span>
                )}
              </div>
              <h3 className="text-white text-xl font-bold">
                {project.title}
              </h3>
              {project.material && (
                <span className="text-gray-300 text-sm mt-1">
                  {project.material}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
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
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-secondary text-sm font-bold uppercase tracking-widest">
                    {selectedProject.category}
                  </span>
                  {selectedProject.location && (
                    <span className="text-gray-400 text-sm flex items-center gap-1">
                      📍 {selectedProject.location}
                    </span>
                  )}
                  {selectedProject.year && (
                    <span className="text-gray-400 text-sm">
                      {selectedProject.year}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h2>
                {selectedProject.material && (
                  <div className="inline-flex items-center gap-2 mt-2 px-3 py-1 bg-white/10 rounded-full">
                    <span className="text-secondary text-sm font-medium">{selectedProject.material}</span>
                  </div>
                )}
                <p className="text-gray-400 mt-4 max-w-2xl mx-auto leading-relaxed">
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

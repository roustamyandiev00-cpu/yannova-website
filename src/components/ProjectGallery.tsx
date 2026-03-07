'use client'

import Image from 'next/image'
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Filter, Search, MapPin } from 'lucide-react'

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
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.location?.toLowerCase().includes(query) ||
        p.material?.toLowerCase().includes(query)
      );
    }
    
    return filtered;
  }, [projects, activeCategory, searchQuery])

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Zoek op titel, locatie, materiaal..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary/50 transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      {categories.length > 1 && (
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 text-gray-400 mr-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filter:</span>
          </div>
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
              !activeCategory
                ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
            }`}
          >
            Alle projecten
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-secondary text-white shadow-lg shadow-secondary/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
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
          {searchQuery && ` voor "${searchQuery}"`}
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-secondary/50"
              onClick={() => setSelectedProject(project)}
            >
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-secondary text-xs font-bold tracking-wider uppercase bg-secondary/20 px-2 py-1 rounded backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.location && (
                    <span className="text-gray-300 text-xs flex items-center gap-1 bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                      <MapPin className="h-3 w-3" />
                      {project.location}
                    </span>
                  )}
                </div>
                <h3 className="text-white text-xl font-bold mb-1">
                  {project.title}
                </h3>
                {project.material && (
                  <span className="text-secondary text-sm font-medium">
                    {project.material}
                  </span>
                )}
                <p className="text-gray-300 text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10">
          <div className="max-w-md mx-auto">
            <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Geen projecten gevonden</h3>
            <p className="text-gray-400 mb-6">
              Probeer een andere zoekterm of filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory(null);
              }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors"
            >
              <X className="h-4 w-4" />
              Filters wissen
            </button>
          </div>
        </div>
      )}

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
              className="absolute right-6 top-6 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-2 backdrop-blur-sm"
              aria-label="Sluiten"
            >
              <X className="h-8 w-8" />
            </button>
            
            {/* Navigation buttons */}
            {filteredProjects.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
                    const prevIndex = currentIndex > 0 ? currentIndex - 1 : filteredProjects.length - 1;
                    setSelectedProject(filteredProjects[prevIndex]);
                  }}
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-3 backdrop-blur-sm hover:scale-110"
                  aria-label="Vorig project"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
                    const nextIndex = currentIndex < filteredProjects.length - 1 ? currentIndex + 1 : 0;
                    setSelectedProject(filteredProjects[nextIndex]);
                  }}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-[60] bg-black/50 rounded-full p-3 backdrop-blur-sm hover:scale-110"
                  aria-label="Volgend project"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            
            <div className="relative h-full w-full max-w-6xl flex flex-col" onClick={(e) => e.stopPropagation()}>
              <div className="relative flex-1 rounded-2xl overflow-hidden">
                <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-contain"
                    quality={100}
                />
              </div>
              <div className="mt-6 text-center bg-black/50 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
                  <span className="text-secondary text-sm font-bold uppercase tracking-widest bg-secondary/20 px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  {selectedProject.location && (
                    <span className="text-gray-300 text-sm flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full">
                      <MapPin className="h-4 w-4" />
                      {selectedProject.location}
                    </span>
                  )}
                  {selectedProject.year && (
                    <span className="text-gray-300 text-sm bg-white/10 px-3 py-1 rounded-full">
                      {selectedProject.year}
                    </span>
                  )}
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-white mt-2 mb-3">
                  {selectedProject.title}
                </h2>
                {selectedProject.material && (
                  <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-white/10 rounded-full mb-4">
                    <span className="text-secondary text-sm font-medium">{selectedProject.material}</span>
                  </div>
                )}
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto leading-relaxed text-base">
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

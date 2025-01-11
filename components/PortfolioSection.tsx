'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterImage from './BeforeAfterImage'

const projects = [
  {
    id: 1,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
  {
    id: 2,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
  {
    id: 3,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
  {
    id: 4,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
  {
    id: 5,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
  {
    id: 6,
    title: 'Modern Minimalist Living Room',
    category: 'Living Room',
    beforeImage: '/3.jpg',
    afterImage: '/2.jpg',
    description: 'A sleek and contemporary living space that embraces minimalism and functionality.',

  },
]

const categories = ['All', ...new Set(projects.map((project) => project.category))]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Portfolio
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <BeforeAfterImage
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    alt={project.title}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}


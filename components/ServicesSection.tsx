'use client'

import { motion } from 'framer-motion'
import { Paintbrush, Sofa, Lightbulb, Ruler } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Custom Design',
    description: 'Tailored interior designs that reflect your unique style and personality.',
  },
  {
    icon: Sofa,
    title: 'Furniture Selection',
    description: 'Expert curation of furniture pieces that complement your space perfectly.',
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    description: 'Innovative lighting designs to create the perfect ambiance in every room.',
  },
  {
    icon: Ruler,
    title: 'Space Planning',
    description: 'Optimize your living areas for both functionality and aesthetic appeal.',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-400 p-6 rounded-lg shadow-md"
            >
              <service.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


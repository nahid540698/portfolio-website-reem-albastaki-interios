'use client'

import { motion } from 'framer-motion'
// import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Parallax } from 'react-parallax'

export default function HeroSection() {
  return (
    <Parallax bgImage="/home-page.png" strength={500}>
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Reem Albastaki Interiors
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transforming spaces, inspiring lives
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </div>
  </Parallax>
  )
}


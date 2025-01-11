'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import HeroSection from './HeroSection'
import ServicesSection from './ServicesSection'
import PortfolioSection from './PortfolioSection'
import TestimonialsSection from './TestimonialsSection'
import ContactSection from './ContactSection'
import Image from 'next/image'

const navigationItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '/projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.95])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const navLinks = document.querySelectorAll('nav a')

      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id') || ''
        }
      })

      navLinks.forEach((link) => {
        link.classList.remove('text-primary')
        if (link.getAttribute('href')?.slice(1) === current) {
          link.classList.add('text-primary')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 text-gray-900 bg-opacity-90 bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            <Image src="/white-logo.png" alt='logo' width={40} height={40} />
          </Link>
          <div className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { x: 0 } : { x: '100%' }}
        transition={{ type: 'tween' }}
        className="fixed inset-y-0 right-0 w-64 bg-white z-50 shadow-lg md:hidden"
      >
        <div className="p-6 space-y-4">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-gray-800 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, scale }}>
        <HeroSection />
      </motion.div>
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ChevronDown className="transform rotate-180" />
      </motion.button>
    </div>
  )
}


import { Metadata } from 'next'
import ProjectsPage from '@/components/ProjectsPage'

export const metadata: Metadata = {
  title: 'Our Projects | Luxe Interiors',
  description: 'Explore our stunning interior design projects and get inspired for your next home transformation.',
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-400">
      <ProjectsPage />
    </main>
  )
}


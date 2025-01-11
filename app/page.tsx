import { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Reem Albastaki Interiors | Transforming Spaces into Dreams',
  description: 'Discover the art of interior design with Reem Albastaki Interiors. We create stunning, personalized spaces that reflect your unique style and elevate your living experience.',
}


export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingPage />
    </main>
  )
}


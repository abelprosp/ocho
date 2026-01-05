import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import ValueProposition from '@/components/ValueProposition'
import Process from '@/components/Process'
import CTAForm from '@/components/CTAForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark">
      <Navbar />
      <Hero />
      <Services />
      <ValueProposition />
      <Process />
      <CTAForm />
      <Footer />
    </main>
  )
}


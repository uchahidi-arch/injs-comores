import RepBar from '@/components/layout/RepBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import QuickActions from '@/components/home/QuickActions'
import Services from '@/components/home/Services'
import Federations from '@/components/home/Federations'
import Jeunesse from '@/components/home/Jeunesse'
import Partners from '@/components/home/Partners'

export default function Home() {
  return (
    <>
      <RepBar />
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <Services />
        <Federations />
        <Jeunesse />
        <Partners />
      </main>
      <Footer />
    </>
  )
}

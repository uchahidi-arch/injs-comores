import Hero from '@/components/home/Hero'
import DirectorWord from '@/components/home/DirectorWord'
import ServicesSection from '@/components/home/ServicesSection'
import JioiSection from '@/components/home/JioiSection'

export const metadata = {
  title: 'INJS — Institut National de la Jeunesse et des Sports',
  description: "Le portail officiel de l'État comorien pour organiser, structurer et valoriser le sport et la jeunesse aux Comores.",
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <DirectorWord />
      <ServicesSection />
      <JioiSection />
    </>
  )
}

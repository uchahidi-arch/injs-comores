import RepBar from '@/components/layout/RepBar'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { services } from '@/lib/data/services'
import { CalendarCheck, GraduationCap, IdCard, FileCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services · INJS Comores',
  description: 'Toutes les démarches administratives sportives centralisées sur le portail INJS.',
}

const iconMap: Record<string, React.ElementType> = {
  CalendarCheck,
  GraduationCap,
  IdCard,
  FileShield: FileCheck,
}

export default function ServicesPage() {
  return (
    <>
      <RepBar />
      <Navbar />
      <main>
        <div style={{ background: 'var(--ivoire)', borderBottom: '1px solid var(--gris-2)', padding: '60px 40px' }}>
          <div style={{ maxWidth: '1200px' }} className="mx-auto">
            <div style={{ fontSize: '10px', color: 'var(--vert)', letterSpacing: '0.18em' }} className="font-bold uppercase mb-3">
              Démarches officielles
            </div>
            <h1
              style={{ letterSpacing: '-0.02em', lineHeight: 1.1 }}
              className="font-[family-name:var(--font-syne)] font-bold text-[clamp(32px,4vw,52px)] text-[var(--encre)] mb-4"
            >
              Les services de l&apos;INJS
            </h1>
            <p style={{ fontSize: '16px', color: 'var(--fumee)', lineHeight: 1.7, maxWidth: '600px' }}>
              Toutes les démarches administratives sportives centralisées. Accessible depuis n&apos;importe quelle île des Comores.
            </p>
          </div>
        </div>

        <div style={{ maxWidth: '1200px', padding: '60px 40px' }} className="mx-auto">
          <div
            style={{ background: 'var(--gris-2)', border: '1px solid var(--gris-2)', borderRadius: '8px', gap: '2px' }}
            className="grid grid-cols-2 overflow-hidden"
          >
            {services.map((svc) => {
              const Icon = iconMap[svc.icon] ?? CalendarCheck
              return (
                <Link
                  key={svc.num}
                  href={svc.href}
                  style={{ padding: '36px', position: 'relative' }}
                  className="block bg-white no-underline transition-colors hover:bg-[var(--vert-light)] group cursor-pointer h-full"
                >
                  <div style={{ fontSize: '9.5px', color: 'var(--fumee)', letterSpacing: '0.12em', marginBottom: '20px' }} className="font-[family-name:var(--font-syne)] font-bold uppercase">
                    {svc.num} — {svc.category}
                  </div>
                  <div style={{ width: '48px', height: '48px', background: 'var(--vert-light)', borderRadius: '8px', marginBottom: '18px' }} className="flex items-center justify-center">
                    <Icon size={20} style={{ color: 'var(--vert)' }} />
                  </div>
                  <div style={{ fontSize: '17px', lineHeight: 1.3, marginBottom: '10px' }} className="font-[family-name:var(--font-syne)] font-bold text-[var(--encre)]">
                    {svc.title}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--fumee)', lineHeight: 1.65, marginBottom: '20px' }}>
                    {svc.description}
                  </p>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '10.5px', fontWeight: 600,
                    padding: '4px 10px', borderRadius: '3px',
                    background: svc.status === 'live' ? 'var(--vert-light)' : '#FEF9C3',
                    color: svc.status === 'live' ? 'var(--vert)' : '#854D0E',
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'currentColor', display: 'inline-block', flexShrink: 0 }} />
                    {svc.statusLabel}
                  </span>
                  <ArrowRight size={13} style={{ position: 'absolute', bottom: '36px', right: '36px', color: 'var(--gris-2)' }} className="transition-colors group-hover:text-[var(--vert)]" />
                </Link>
              )
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

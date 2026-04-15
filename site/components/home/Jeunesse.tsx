import Link from 'next/link'
import { ArrowRight, Users, Flag, Flame, MapPin, Clock } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const programs = [
  {
    num: '01',
    title: "Programmes d'activités jeunesse",
    desc: "Camps, activités culturelles et sportives organisées par l'INJS dans les trois îles.",
    href: '/jeunesse/programmes',
  },
  {
    num: '02',
    title: 'Formations & insertion professionnelle',
    desc: 'Stages certifiés en animation, encadrement sportif et gestion associative.',
    href: '/jeunesse/formations',
  },
  {
    num: '03',
    title: 'Associations & initiatives locales',
    desc: 'Accompagnement et reconnaissance officielle des associations de jeunesse comoriennes.',
    href: '/jeunesse/associations',
  },
  {
    num: '04',
    title: 'Bénévolat JIOI 2027',
    desc: 'Recrutement ouvert — logistique, accueil, traduction, communication. Attestation officielle INJS délivrée.',
    href: '/jioi',
  },
]

const jioiRows = [
  { icon: MapPin, label: 'Lieu', value: 'Moroni, Comores' },
  { icon: Clock, label: 'Édition', value: 'Août 2027' },
  { icon: Users, label: 'Bénévoles', value: '600+ postes', isGreen: true },
  { icon: Flag, label: 'Disciplines', value: '12 sports', isGreen: true },
]

export default function Jeunesse() {
  return (
    <div
      id="jeunesse"
      style={{
        background: 'var(--encre)',
        padding: 'clamp(48px, 7vh, 80px) 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 40px)',
          display: 'grid',
          gap: 'clamp(40px, 5vw, 80px)',
          alignItems: 'start',
        }}
        className="jeunesse-grid"
      >
        {/* Left */}
        <RevealOnScroll>
          <div
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em', marginBottom: '12px' }}
            className="font-bold uppercase"
          >
            Pôle Jeunesse — INJS
          </div>
          <h2
            style={{ lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white', marginBottom: '14px', fontSize: 'clamp(26px, 3.5vw, 44px)' }}
            className="font-[family-name:var(--font-syne)] font-bold"
          >
            La jeunesse comorienne,<br />actrice du changement
          </h2>
          <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '32px' }}>
            L&apos;INJS ne structure pas seulement le sport. Il organise l&apos;engagement, la formation et l&apos;insertion des jeunes comoriens de 16 à 30 ans.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {programs.map((p) => (
              <Link
                key={p.num}
                href={p.href}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: '16px 0', display: 'flex', alignItems: 'flex-start', gap: '14px', textDecoration: 'none' }}
                className="transition-all hover:pl-1.5 group"
              >
                <div
                  style={{ width: '26px', height: '26px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', marginTop: '2px', flexShrink: 0 }}
                  className="flex items-center justify-center"
                >
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-syne)' }}>
                    {p.num}
                  </span>
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', marginBottom: '4px', fontFamily: 'var(--font-syne)' }}>
                    {p.title}
                  </strong>
                  <span style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                    {p.desc}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <Link
            href="/jeunesse"
            style={{
              background: 'white',
              color: 'var(--encre)',
              borderRadius: '4px',
              letterSpacing: '0.04em',
              marginTop: '28px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              fontSize: '13px',
              fontWeight: 700,
              textDecoration: 'none',
            }}
            className="font-[family-name:var(--font-syne)] transition hover:-translate-y-0.5"
          >
            <ArrowRight size={11} />
            Voir tous les programmes
          </Link>
        </RevealOnScroll>

        {/* Right: JIOI Panel */}
        <RevealOnScroll delay={2}>
          <div
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', overflow: 'hidden' }}
          >
            <div style={{ background: 'var(--rouge)', padding: '18px 22px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Flame size={18} color="white" />
              <div>
                <strong style={{ display: 'block', fontSize: '14px', fontWeight: 700, color: 'white', fontFamily: 'var(--font-syne)' }}>
                  JIOI 2027 — Jeux des Îles
                </strong>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.65)' }}>
                  Les Comores accueillent les Jeux de l&apos;Océan Indien
                </span>
              </div>
            </div>
            <div style={{ padding: '20px 22px' }}>
              {jioiRows.map((row, i) => (
                <div
                  key={i}
                  style={{ borderBottom: i < jioiRows.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', padding: '12px 0', display: 'flex', alignItems: 'center', gap: '12px' }}
                >
                  <div
                    style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.06)', borderRadius: '5px', flexShrink: 0 }}
                    className="flex items-center justify-center"
                  >
                    <row.icon size={13} style={{ color: 'rgba(255,255,255,0.6)' }} />
                  </div>
                  <span style={{ flex: 1, fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{row.label}</span>
                  <span
                    style={{ fontSize: '12px', fontWeight: 700, color: row.isGreen ? '#86EFAC' : '#FCD34D', fontFamily: 'var(--font-syne)' }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{ padding: '14px 22px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)' }}>Recrutement bénévoles ouvert</span>
              <Link
                href="/jioi"
                style={{ fontSize: '11.5px', fontWeight: 600, color: '#86EFAC', display: 'flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                Candidater <ArrowRight size={10} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .jeunesse-grid { grid-template-columns: 1fr; }
        @media (min-width: 900px) {
          .jeunesse-grid { grid-template-columns: 1fr 1fr; align-items: center; }
        }
      `}</style>
    </div>
  )
}

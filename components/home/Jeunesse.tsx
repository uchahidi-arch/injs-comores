import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
]

export default function Jeunesse() {
  return (
    <div id="jeunesse" style={{ background: 'var(--encre)' }} className="py-12 sm:py-16 md:py-20">
      <div style={{ maxWidth: '1200px' }} className="mx-auto px-4 sm:px-8 md:px-10">
        <RevealOnScroll>
          {/* Overline */}
          <div
            style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.18em' }}
            className="font-bold uppercase mb-3"
          >
            Pôle Jeunesse — INJS
          </div>

          {/* Title */}
          <h2
            style={{ lineHeight: 1.1, letterSpacing: '-0.02em', color: 'white' }}
            className="font-[family-name:var(--font-syne)] font-bold text-[clamp(26px,5vw,44px)] mb-4 sm:mb-5"
          >
            La jeunesse comorienne,<br />actrice du changement
          </h2>

          {/* Description */}
          <p
            style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}
            className="text-sm sm:text-[15px] max-w-xl mb-8 sm:mb-10"
          >
            L&apos;INJS ne structure pas seulement le sport. Il organise l&apos;engagement, la formation et l&apos;insertion des jeunes comoriens de 16 à 30 ans.
          </p>

          {/* Program list */}
          <div className="flex flex-col">
            {programs.map((p) => (
              <Link
                key={p.num}
                href={p.href}
                style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                className="flex items-start gap-4 py-4 sm:py-5 no-underline transition-all hover:pl-1.5 group"
              >
                <div
                  style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '4px', minWidth: '28px', height: '28px' }}
                  className="flex items-center justify-center flex-shrink-0 mt-0.5"
                >
                  <span style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-syne)' }}>
                    {p.num}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <strong
                    style={{ display: 'block', fontWeight: 600, color: 'rgba(255,255,255,0.9)', fontFamily: 'var(--font-syne)' }}
                    className="text-[13px] sm:text-sm mb-1"
                  >
                    {p.title}
                  </strong>
                  <span style={{ color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }} className="text-xs sm:text-[12.5px]">
                    {p.desc}
                  </span>
                </div>
                <ArrowRight
                  size={13}
                  style={{ color: 'rgba(255,255,255,0.15)', marginTop: '4px', flexShrink: 0 }}
                  className="transition-colors group-hover:text-white/40"
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 sm:mt-9">
            <Link
              href="/jeunesse"
              style={{ background: 'white', color: 'var(--encre)', borderRadius: '4px', letterSpacing: '0.04em' }}
              className="flex sm:inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 text-[13px] font-bold no-underline font-[family-name:var(--font-syne)] transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <ArrowRight size={11} />
              Voir tous les programmes
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  )
}

'use client'
import { useEffect, useState } from 'react'

function calcul() {
  const cible = new Date('2027-08-23T00:00:00')
  const diff = cible.getTime() - new Date().getTime()
  if (diff <= 0) return { jours: 0, heures: 0, minutes: 0, secondes: 0 }
  return {
    jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
    heures: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    secondes: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

export default function CountdownBanner() {
  const [t, setT] = useState(calcul())
  useEffect(() => {
    const id = setInterval(() => setT(calcul()), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

      {/* J-XXX */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
        <span style={{
          fontSize: '45px',
          fontWeight: 900,
          fontFamily: 'var(--font-syne)',
          color: '#000',
          lineHeight: 1,
        }}>J-{t.jours}</span>
        <span style={{
          fontSize: '10px',
          fontWeight: 700,
          fontFamily: 'var(--font-syne)',
          color: '#bbb',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          paddingBottom: '2px',
          marginLeft: '4px',
        }}></span>
      </div>

      {/* heures : min : sec */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', flexWrap: 'wrap' }}>
        {[
          { val: pad(t.heures), label: 'h' },
          { val: pad(t.minutes), label: 'min' },
          { val: pad(t.secondes), label: 'sec' },
        ].map(({ val, label }, i) => (
          <span key={label} style={{ display: 'flex', alignItems: 'baseline', gap: '2px' }}>
            {i > 0 && (
              <span style={{
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--vert)',
                fontFamily: 'var(--font-syne)',
                marginRight: '2px',
              }}>:</span>
            )}
            <span style={{
              fontSize: '18px',
              fontWeight: 700,
              fontFamily: 'var(--font-syne)',
              color: 'var(--encre)',
            }}>{val}</span>
            <span style={{
              fontSize: '9px',
              fontWeight: 700,
              fontFamily: 'var(--font-syne)',
              color: '#bbb',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>{label}</span>
          </span>
        ))}
      </div>

    </div>
  )
}
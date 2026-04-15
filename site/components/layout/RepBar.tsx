import Image from 'next/image'

export default function RepBar() {
  return (
    <div
      style={{
        background: 'var(--vert)',
        height: '34px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(16px, 3vw, 40px)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, overflow: 'hidden' }}>
        <Image
          src="/drapeau-01.png"
          alt="Drapeau des Comores"
          width={28}
          height={19}
          className="rounded-sm flex-shrink-0"
        />
        <span
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.10em', whiteSpace: 'nowrap' }}
          className="font-[family-name:var(--font-dm-sans)] uppercase repbar-country"
        >
          République de l&apos;Union des Comores
        </span>
        <div
          style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)', flexShrink: 0 }}
          className="repbar-divider"
        />
        <span
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.10em', whiteSpace: 'nowrap' }}
          className="font-[family-name:var(--font-dm-sans)] uppercase repbar-ministry"
        >
          Ministère de la Jeunesse, des Sports et de l&apos;Emploi
        </span>
      </div>
      <span
        style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em', flexShrink: 0, marginLeft: '16px' }}
        className="repbar-label"
      >
        PORTAIL OFFICIEL
      </span>

      <style>{`
        .repbar-ministry { display: none; }
        .repbar-divider { display: none; }
        .repbar-label { display: none; }
        @media (min-width: 640px) {
          .repbar-ministry { display: block; }
          .repbar-divider { display: block; }
          .repbar-label { display: block; }
        }
        @media (max-width: 639px) {
          .repbar-country {
            font-size: 9px;
            letter-spacing: 0.06em;
          }
        }
      `}</style>
    </div>
  )
}

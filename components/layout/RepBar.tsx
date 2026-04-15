import Image from 'next/image'

export default function RepBar() {
  return (
    <div
      style={{ background: 'var(--vert)', height: '34px' }}
      className="flex items-center justify-between px-4 sm:px-10"
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <Image
          src="/drapeau-01.png"
          alt="Drapeau des Comores"
          width={28}
          height={19}
          className="rounded-sm flex-shrink-0"
        />
        <span
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em' }}
          className="uppercase font-[family-name:var(--font-dm-sans)] truncate"
        >
          République de l&apos;Union des Comores
        </span>
        <div
          style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.2)', margin: '0 8px', flexShrink: 0 }}
          className="hidden sm:block"
        />
        <span
          style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em' }}
          className="uppercase font-[family-name:var(--font-dm-sans)] hidden sm:block whitespace-nowrap"
        >
          Ministère de la Jeunesse, des Sports et de l&apos;Emploi
        </span>
      </div>
      <span style={{ fontSize: '9.5px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.1em' }} className="flex-shrink-0 hidden xs:block">
        PORTAIL OFFICIEL
      </span>
    </div>
  )
}

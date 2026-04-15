'use client'

import { useEffect, useRef } from 'react'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: 1 | 2 | 3 | 4
}

export default function RevealOnScroll({ children, className = '', delay }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in')
          obs.unobserve(el)
        }
      },
      { threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const delayClass = delay ? `rv${delay}` : ''
  return (
    <div ref={ref} className={`rv ${delayClass} ${className}`}>
      {children}
    </div>
  )
}

'use client'

import { HeartIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { useEffect, useRef, useState } from 'react'

export default function AnimatedHeart() {
  const [active, setActive] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const activate = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActive(true)
    timeoutRef.current = setTimeout(() => setActive(false), 1200)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <button
      type="button"
      className={`text-rose-500 transition-colors ${active ? 'animate-heart-beat fill-rose-500 [&>svg>path]:fill-current' : 'fill-transparent'} `}
      aria-label="Demonstrar amor"
      title="Demonstrar amor"
      onMouseEnter={activate}
      onClick={activate}
    >
      <HugeiconsIcon icon={HeartIcon} size={56} strokeWidth={1.5} />
    </button>
  )
}

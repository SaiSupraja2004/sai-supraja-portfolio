"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  items: string[]
  typingSpeed?: number
  deleteSpeed?: number
  pauseMs?: number
  className?: string
}

export default function TypewriterText({ items, typingSpeed = 50, deleteSpeed = 30, pauseMs = 900, className }: Props) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = items[index % items.length]
    if (!deleting && display === full) {
      const pause = setTimeout(() => setDeleting(true), pauseMs)
      return () => clearTimeout(pause)
    }
    if (deleting && display === "") {
      setDeleting(false)
      setIndex((i) => (i + 1) % items.length)
      return
    }
    const next = setTimeout(
      () => {
        if (deleting) {
          setDisplay((d) => d.slice(0, -1))
        } else {
          setDisplay(full.slice(0, display.length + 1))
        }
      },
      deleting ? deleteSpeed : typingSpeed,
    )

    return () => clearTimeout(next)
  }, [items, index, display, deleting, typingSpeed, deleteSpeed, pauseMs])

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span className="transition-opacity duration-300">{display}</span>
      <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-slate-800" aria-hidden="true" />
    </span>
  )
}

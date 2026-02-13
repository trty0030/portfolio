'use client'

import { useEffect, useRef, useState } from "react"
import { ArrowDown, Mail } from "lucide-react"

export function HeroSection() {
  const words = ["Creative", "Fast", "Reliable", "Modern", "Scalable", "Responsive", "Mobile", "Desktop", "Comunicative", "Social"]
  const [displayText, setDisplayText] = useState(words[0])

  const frameRef = useRef<number | null>(null)
  const animatingRef = useRef(false)
  const displayRef = useRef(displayText)
  useEffect(() => {
    displayRef.current = displayText
  }, [displayText])

  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const FRAME_STEP_MS = 32

  function randomChar() {
    return glyphs[Math.floor(Math.random() * glyphs.length)]
  }

  function scramble(from: string, to: string, durationMs = 1400) {
    return new Promise<void>((resolve) => {
      animatingRef.current = true
      const startTime = performance.now()
      let lastUpdate = startTime
      const maxLen = Math.max(from.length, to.length)
      const queue = Array.from({ length: maxLen }, (_, i) => {
        const fromChar = from[i] ?? ""
        const toChar = to[i] ?? ""
        const start = Math.random() * (durationMs * 0.5)
        const end = start + Math.random() * (durationMs - start)
        return { fromChar, toChar, start, end }
      })

      const step = (now: number) => {
        if (now - lastUpdate < FRAME_STEP_MS) {
          frameRef.current = requestAnimationFrame(step)
          return
        }
        lastUpdate = now

        const elapsed = now - startTime
        let output = ""
        let complete = 0
        for (let i = 0; i < queue.length; i++) {
          const { fromChar, toChar, start, end } = queue[i]
          if (elapsed >= end) {
            complete++
            output += toChar
          } else if (elapsed >= start) {
            output += randomChar()
          } else {
            output += fromChar
          }
        }
        setDisplayText(output)

        if (complete === queue.length || elapsed >= durationMs + 50) {
          setDisplayText(to)
          animatingRef.current = false
          resolve()
          return
        }
        frameRef.current = requestAnimationFrame(step)
      }

      frameRef.current = requestAnimationFrame(step)
    })
  }

  useEffect(() => {
    let cancelled = false
    let idx = 0

    const tick = async () => {
      idx = (idx + 1) % words.length
      await scramble(displayRef.current, words[idx])
    }

    const intervalId = setInterval(() => {
      if (!animatingRef.current) {
        void tick()
      }
    }, 2500)

    return () => {
      cancelled = true
      clearInterval(intervalId)
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Geometric background accents */}
      <div className="absolute inset-0">
        {/* Diagonal line */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent transform rotate-12 translate-x-[-30vw]" />
        {/* Corner accent */}
        <div className="absolute top-20 right-10 lg:right-20">
          <div className="w-24 h-24 border border-border/50 rotate-45 opacity-40" />
          <div className="w-16 h-16 border border-primary/20 rotate-45 absolute top-4 left-4 opacity-60" />
        </div>
        {/* Subtle radial glow */}
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full relative z-10">
        <div className="max-w-3xl">
          {/* Monospace label */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-primary" />
            <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">
              Developer & Designer
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] mb-8 text-foreground">
            <span className="inline-block will-change-auto font-mono text-primary">
              {displayText}
            </span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            Crafting digital experiences that blend innovative design with cutting-edge technology.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-ember-light transition-colors duration-300"
            >
              View My Work
              <ArrowDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-border text-foreground px-7 py-3.5 text-sm font-medium tracking-wide hover:border-primary/50 hover:text-primary transition-colors duration-300"
            >
              Get in touch
              <Mail className="h-4 w-4" />
            </a>
          </div>

          {/* Bottom line accent */}
          <div className="mt-20 flex items-center gap-4">
            <div className="w-16 h-px bg-border" />
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

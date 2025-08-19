'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const words = ["Creative", "Fast", "Reliable", "Modern", "Scalable", "Responsive", "Mobile", "Desktop", "Comunicative", "Social"]
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState(words[0])

  const frameRef = useRef<number | null>(null)
  const animatingRef = useRef(false)
  const displayRef = useRef(displayText)
  useEffect(() => {
    displayRef.current = displayText
  }, [displayText])

  const glyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const FRAME_STEP_MS = 32 // ~30 FPS

  function randomChar() {
    return glyphs[Math.floor(Math.random() * glyphs.length)]
  }

  function scramble(from: string, to: string, durationMs = 1400) {
    // came here to look how this works? :>)
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
      if (!cancelled) {
        setWordIndex(idx)
      }
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-5xl md:text-7xl lg:text-8xl mb-6 text-foreground">
            <span className="inline-block will-change-auto">
              {displayText}
            </span>
            <span className="block text-primary">Developer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend innovative design with cutting-edge technology
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href={'#work'}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={'#contact'}>
              <Button variant="outline" size="lg" className="border-border hover:bg-card px-8 py-3 bg-transparent">
                Get in touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 glass rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-10 w-16 h-16 glass rounded-full animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-1/4 w-12 h-12 glass rounded-full animate-pulse delay-500" />
      {/* Extra floating elements (desktop only) */}
      <div className="hidden md:block">
        <div className="absolute top-10 right-1/3 w-10 h-10 glass rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-10 left-1/4 w-14 h-14 glass rounded-full animate-pulse delay-300" />
        <div className="absolute bottom-20 right-1/2 w-8 h-8 glass rounded-full animate-pulse delay-1200" />
        <div className="absolute top-1/3 left-1/2 w-16 h-16 glass rounded-full animate-pulse delay-900" />
      </div>
    </section>
  )
}

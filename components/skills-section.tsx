'use client'

import { useEffect, useRef, useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const skills = [
  { name: "Laravel", level: 95, icon: "fa-brands fa-laravel" },
  { name: "Linux", level: 80, icon: "fa-brands fa-linux" },
  { name: "Next.js", level: 65, icon: "fa-brands fa-neos" },
  { name: "AWS", level: 85, icon: "fa-brands fa-aws" },

  { name: "JavaScript", level: 90, icon: "fa-brands fa-js" },
  { name: "SQL", level: 90, icon: "fa-solid fa-database" },
  { name: "PHP", level: 95, icon: "fa-brands fa-php" },
  { name: "Node.js", level: 85, icon: "fa-brands fa-node-js" },
  { name: "TypeScript", level: 80, icon: "fa-solid fa-code" },
  { name: "Wordpress", level: 80, icon: "fa-brands fa-wordpress" },
  { name: "Python", level: 80, icon: "fa-brands fa-python" },
  { name: "UI/UX Design", level: 70, icon: "fa-solid fa-pencil-ruler" },
  { name: "React", level: 65, icon: "fa-brands fa-react" },
  { name: "Azure", level: 50, icon: "fa-brands fa-microsoft" },
  { name: "Django (Learning now!)", level: 45, icon: "fa-solid fa-leaf" },
]

function SkillBar({ skill, index }: { skill: typeof skills[number]; index: number }) {
  return (
    <div className="group py-4 border-b border-border last:border-b-0 hover:bg-surface-raised/30 transition-colors duration-200 px-4 -mx-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <i className={`${skill.icon} text-base text-primary/70 w-5 text-center`} />
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full h-[3px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-ember-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  const [showAll, setShowAll] = useState(false)
  const firstFour = skills.slice(0, 4)
  const hiddenSkills = skills.slice(4)
  const hasHidden = hiddenSkills.length > 0

  const hiddenRef = useRef<HTMLDivElement | null>(null)
  const [hiddenHeight, setHiddenHeight] = useState(0)

  useEffect(() => {
    if (hiddenRef.current) {
      setHiddenHeight(hiddenRef.current.scrollHeight)
    }
  }, [showAll, hiddenSkills.length])

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-6 lg:left-10 right-6 lg:right-10 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">03</span>
          <div className="w-8 h-px bg-primary" />
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills layout */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          {/* Left column */}
          <div>
            {firstFour.slice(0, 2).map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i} />
            ))}
          </div>
          {/* Right column */}
          <div>
            {firstFour.slice(2, 4).map((skill, i) => (
              <SkillBar key={skill.name} skill={skill} index={i + 2} />
            ))}
          </div>
        </div>

        {hasHidden && (
          <>
            <div
              ref={hiddenRef}
              className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
              style={{ maxHeight: showAll ? hiddenHeight : 0, opacity: showAll ? 1 : 0 }}
            >
              <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0 mt-0">
                {/* Split hidden skills into two columns */}
                <div>
                  {hiddenSkills.filter((_, i) => i % 2 === 0).map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
                <div>
                  {hiddenSkills.filter((_, i) => i % 2 === 1).map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowAll((v) => !v)}
                className="group inline-flex items-center gap-2 text-sm text-primary hover:text-ember-light transition-colors duration-200"
              >
                {showAll ? (
                  <>
                    Show less <ChevronUp className="size-4" />
                  </>
                ) : (
                  <>
                    Show {hiddenSkills.length} more <ChevronDown className="size-4" />
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

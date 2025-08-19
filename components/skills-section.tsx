'use client'

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

const skills = [
  { name: "Laravel", level: 95, icon: "fa-brands fa-laravel" },
  { name: "Linux", level: 80, icon: "fa-brands fa-linux" },
  { name: "Next.js", level: 65, icon: "fa-brands fa-neos" }, // No official Next.js icon; using Neos "N"
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
  { name: "Django (Learning now!)", level: 45, icon: "fa-solid fa-leaf" }, // No official Django icon, using 'leaf'

]

export function SkillsSection() {
  const [showAll, setShowAll] = useState(false)
  const firstFour = skills.slice(0, 4)
  const hiddenSkills = skills.slice(4)
  const hasHidden = hiddenSkills.length > 0

  const hiddenRef = useRef<HTMLDivElement | null>(null)
  const [hiddenHeight, setHiddenHeight] = useState(0)

  useEffect(() => {
    if (hiddenRef.current) {
      // Measure full height of the hidden list to animate max-height
      setHiddenHeight(hiddenRef.current.scrollHeight)
    }
  }, [showAll, hiddenSkills.length])

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {firstFour.map((skill, index) => (
              <div key={index} className="glass rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-foreground"><i className={`${skill.icon} text-lg`}></i> {skill.name}</span>
                  <span className="text-primary font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {hasHidden && (
            <>
              <div
                ref={hiddenRef}
                className="overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out"
                style={{ maxHeight: showAll ? hiddenHeight : 0, opacity: showAll ? 1 : 0 }}
              >
                <div className="mt-8 grid md:grid-cols-2 gap-8">
                  {hiddenSkills.map((skill, index) => (
                    <div key={index} className="glass rounded-lg p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground"><i className={`${skill.icon} text-lg`}></i> {skill.name}</span>
                        <span className="text-primary font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button
                  variant="link"
                  size="sm"
                  onClick={() => setShowAll((v) => !v)}
                  className="text-primary hover:text-blue-600"
                >
                  {showAll ? (
                    <>
                      Show less <ChevronUp className="size-4" />
                    </>
                  ) : (
                    <>
                      Show {skills.length - 4} more <ChevronDown className="size-4" />
                    </>
                  )}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

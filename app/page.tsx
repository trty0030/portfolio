import { GlassmorphismHeader } from "@/components/glassmorphism-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WorkSection } from "@/components/work-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <GlassmorphismHeader />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />

      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            &copy; {new Date().getFullYear()} TRTY
          </span>
          <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </span>
        </div>
      </footer>
    </main>
  )
}

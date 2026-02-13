import { ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TRTY Portfolio website",
    description: "My own portfolio website.",
    image: "/trty-portfolio.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Shadcn"],
    liveUrl: "#",
    githubUrl: "?",
  },
  {
    title: "Lopertyd portfolio website",
    description: "A Portfolio website for luau developper Lopertyd",
    image: "/lopertyd.png",
    tags: ["Laravel", "AWS", "Lightsail", "Apache", "CSS", "Route53"],
    liveUrl: "http://lopertyd.com",
    githubUrl: "?",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-24 lg:py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-6 lg:left-10 right-6 lg:right-10 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">02</span>
          <div className="w-8 h-px bg-primary" />
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Featured Work</h2>
        </div>

        {/* Projects list */}
        <div className="space-y-px bg-border">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background group"
            >
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-[16/10] lg:aspect-auto">
                  <img
                    src={project.image === "?" ? "/offline.png" : (project.image || "/offline.png")}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-[10px] text-muted-foreground">
                        Project 0{index + 1}
                      </span>
                      <div className="w-6 h-px bg-border" />
                    </div>

                    <h3 className="font-serif font-bold text-2xl lg:text-3xl mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-mono tracking-wide border border-border text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.liveUrl !== "?" && (
                      <Link
                        href={project.liveUrl}
                        className="group/link inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span className="hover-line">Live Demo</span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

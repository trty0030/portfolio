import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "TRTY Portfolio website",
    description: "My own portfolio website.",
    image: "/trty-portfolio-website.png",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", 'Shadcn'],
    liveUrl: "#",
    githubUrl: "?",
  },
  {
    title: "Webwaves",
    description: "Website for webwaves, a web development company.",
    image: "/webwaves.png",
    tags: ["Laravel", "PHP", "Hostinger", "Mysql", "Laravel Breeze"],
    liveUrl: "http://webwaves.online",
    githubUrl: "?",
  },
  {
    title: "Liquid Hosting",
    description: "A game server hosting platform (No longer hosted)",
    image: "?",
    tags: ["AWS", "AWS S3", "AWS route-53", "AWS EC2", "Java", "Nodejs", "Nextjs"],
    liveUrl: "?",
    githubUrl: "?",
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">Featured Work</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="glass border-border group hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={project.image === "?" ? "/offline.png" : (project.image || "/placeholder.svg")}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-3 py-1 text-sm bg-primary/20 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      
                      {project.liveUrl !== "?" && (
                        <Link href={project.liveUrl}>
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                        </Link>
                      )}
                      {project.githubUrl !== "?" && (
                        <Button variant="outline" size="sm" className="border-border bg-transparent">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

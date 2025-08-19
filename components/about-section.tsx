import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate developer who loves creating beautiful, functional digital experiences. With a keen eye
                for design and a deep understanding of modern web technologies, I bring ideas to life through code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me exploring new design trends, contributing to open source projects,
                or experimenting with the latest frameworks and tools.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <Image
                src='/trty.png'
                alt="Developer portrait"
                width={400}
                height={256}
                className="w-full h-64 object-cover rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass border-border">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">Development</h3>
                <p className="text-muted-foreground">
                  Building robust applications with modern frameworks and best practices
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">Design</h3>
                <p className="text-muted-foreground">
                  Creating intuitive user interfaces with attention to detail and aesthetics
                </p>
              </CardContent>
            </Card>

            <Card className="glass border-border">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-serif font-semibold text-xl mb-2 text-foreground">Performance</h3>
                <p className="text-muted-foreground">
                  Optimizing applications for speed, accessibility, and user experience
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

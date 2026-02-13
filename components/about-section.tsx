import { Code, Palette, Zap } from "lucide-react"
import Image from "next/image"

const capabilities = [
  {
    icon: Code,
    title: "Development",
    description: "Building robust applications with modern frameworks and best practices",
  },
  {
    icon: Palette,
    title: "Design",
    description: "Creating intuitive user interfaces with attention to detail and aesthetics",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and user experience",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-6 lg:left-10 right-6 lg:right-10 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">01</span>
          <div className="w-8 h-px bg-primary" />
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">About Me</h2>
        </div>

        {/* Content grid — asymmetric */}
        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 lg:gap-20 items-start mb-20">
          {/* Text column */}
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a passionate developer who loves creating beautiful, functional digital experiences. With a keen eye
              for design and a deep understanding of modern web technologies, I bring ideas to life through code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open source projects,
              or experimenting with the latest frameworks and tools.
            </p>
          </div>

          {/* Image column */}
          <div className="relative">
            <div className="border border-border p-3">
              <Image
                src="/trty.png"
                alt="Developer portrait"
                width={500}
                height={320}
                className="w-full h-64 lg:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
            {/* Decorative offset border */}
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-primary/20 -z-10" />
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-3 gap-px bg-border">
          {capabilities.map((item, i) => (
            <div
              key={item.title}
              className="bg-background p-8 lg:p-10 group hover:bg-surface transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="font-serif font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

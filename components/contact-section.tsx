import { Mail, Github, Clock, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      {/* Section divider */}
      <div className="absolute top-0 left-6 lg:left-10 right-6 lg:right-10 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.2em] text-primary uppercase">04</span>
          <div className="w-8 h-px bg-primary" />
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground">Get In Touch</h2>
        </div>

        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            I&apos;m always interested in new opportunities and exciting projects. The best way
            to reach me is via email &mdash; I&apos;ll try my best to get back to you.
          </p>

          {/* Email — the primary CTA */}
          <a
            href="mailto:trty0030@gmail.com"
            className="group flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-12 border border-primary/40 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
              <Mail className="h-5 w-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-1">
                Email
              </span>
              <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                trty0030@gmail.com
              </span>
            </div>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300" />
          </a>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Secondary info */}
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="https://github.com/trty0030"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-3"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              <div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-0.5">
                  GitHub
                </span>
                <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                  trty0030
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4 py-3">
              <Clock className="h-5 w-5 text-muted-foreground" />
              <div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase block mb-0.5">
                  Timezone
                </span>
                <span className="text-sm text-foreground">
                  CET (UTC + 1)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

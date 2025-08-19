'use-client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Clock, Github } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-16 text-foreground">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif font-semibold text-2xl mb-6 text-foreground">Let's work together</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="glass rounded-full p-3">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">trty0030@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="glass rounded-full p-3">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">
                    <Link className="underline" href={'https://github.com/trty0030'}>trty0030</Link>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="glass rounded-full p-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-foreground">CET (UTC + 1)</span>
                </div>
              </div>
            </div>

            <Card className="glass border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <Input
                    placeholder="Subject"
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

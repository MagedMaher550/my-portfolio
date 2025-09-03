"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t, isRTL } = useLanguage()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className={`space-y-4 ${isRTL ? "text-right" : ""}`}>
            <h3 className="text-xl font-bold text-foreground">Maged Maher Hossney</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.footer.description}</p>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/maged-maher" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/magedmaher" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:magedmaher602@gmail.com">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`space-y-4 ${isRTL ? "text-right" : ""}`}>
            <h4 className="font-semibold text-foreground">
              {/* Updated to use translation */}
              {t.footer.quickLinks}
            </h4>
            <nav className="flex flex-col space-y-2">
              {[
                { key: "about", label: t.navigation.about },
                { key: "projects", label: t.navigation.projects },
                { key: "skills", label: t.navigation.skills },
                { key: "experience", label: t.navigation.experience },
                { key: "contact", label: t.navigation.contact },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => {
                    const element = document.getElementById(item.key)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className={`text-sm text-muted-foreground hover:text-accent transition-colors ${isRTL ? "text-right" : "text-left"}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={`space-y-4 ${isRTL ? "text-right" : ""}`}>
            <h4 className="font-semibold text-foreground">
              {/* Updated to use translation */}
              {t.footer.contact}
            </h4>
            <div className="space-y-2 text-sm">
              <div className={`flex items-center gap-2 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:magedmaher602@gmail.com" className="hover:text-accent transition-colors">
                  magedmaher602@gmail.com
                </a>
              </div>
              <div className={`flex items-center gap-2 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+201017459123" className="hover:text-accent transition-colors">
                  +20 1017459123
                </a>
              </div>
              <div className={`flex items-center gap-2 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <div className={`flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
              <span>© {currentYear} Maged Maher Hossney.</span>
              <span>{t.footer.rights}</span>
            </div>

            <div className={`flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""}`}>
              <span>{t.footer.builtWith}</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <button onClick={scrollToTop} className="hover:text-accent transition-colors underline">
                {t.footer.backToTop}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

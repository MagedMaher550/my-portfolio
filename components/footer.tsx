"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Phone, MapPin, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"

export function Footer() {
  const { t, isRTL } = useLanguage()
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-card/50 dark:bg-card/30 border-t border-border/50 backdrop-blur-sm">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:container-max py-12 lg:py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`space-y-4 ${isRTL ? "text-right" : ""}`}
          >
            <h3 className="text-xl font-bold text-foreground">
              Maged Maher Hossney
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <div className="flex gap-2 pt-2">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 rounded-lg hover:bg-accent/10 transition-colors duration-200"
                >
                  <a
                    href="https://linkedin.com/in/maged-maher"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 rounded-lg hover:bg-accent/10 transition-colors duration-200"
                >
                  <a
                    href="https://github.com/magedmaher"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="h-10 w-10 rounded-lg hover:bg-accent/10 transition-colors duration-200"
                >
                  <a href="mailto:magedmaher602@gmail.com">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`space-y-4 ${isRTL ? "text-right" : ""}`}
          >
            <h4 className="font-bold text-foreground text-lg">
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
                  className={`text-sm text-muted-foreground hover:text-accent transition-colors duration-200 ${isRTL ? "text-right" : "text-left"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`space-y-4 ${isRTL ? "text-right" : ""}`}
          >
            <h4 className="font-bold text-foreground text-lg">
              {t.footer.contact}
            </h4>
            <div className="space-y-3 text-sm">
              <div
                className={`flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 ${isRTL ? "flex-row-reverse" : ""
                  }`}
              >
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:magedmaher602@gmail.com"
                  className="hover:text-accent transition-colors"
                >
                  magedmaher602@gmail.com
                </a>
              </div>
              <div
                className={`flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 ${isRTL ? "flex-row-reverse" : ""
                  }`}
              >
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+201017459123"
                  className="hover:text-accent transition-colors"
                >
                  +20 1017459123
                </a>
              </div>
              <div
                className={`flex items-center gap-3 text-muted-foreground ${isRTL ? "flex-row-reverse" : ""
                  }`}
              >
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Alexandria, Egypt</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border/50"
        >
          <div
            className={`flex flex-col sm:flex-row items-center justify-between gap-4 ${isRTL ? "sm:flex-row-reverse" : ""
              }`}
          >
            <div
              className={`flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""
                }`}
            >
              <span>© {currentYear} Maged Maher Hossney.</span>
              <span>{t.footer.rights}</span>
            </div>

            <div
              className={`flex items-center gap-1 text-sm text-muted-foreground ${isRTL ? "flex-row-reverse" : ""
                }`}
            >
              <span>{t.footer.builtWith}</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <button
                onClick={scrollToTop}
                className="hover:text-accent transition-colors duration-200 underline"
              >
                {t.footer.backToTop}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

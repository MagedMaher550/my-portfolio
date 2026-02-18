"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function AboutSection() {
  const { t, isRTL } = useLanguage()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-muted/20 dark:bg-muted/5">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* About Text */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              <p
                className={`text-lg sm:text-xl text-muted-foreground leading-relaxed ${
                  isRTL ? "text-right" : ""
                }`}
              >
                {t.about.description}
              </p>
              <p
                className={`text-lg sm:text-xl text-muted-foreground leading-relaxed ${
                  isRTL ? "text-right" : ""
                }`}
              >
                {t.about.passion}
              </p>
            </div>

            {/* Languages */}
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3
                  className={`text-xl font-bold text-foreground mb-6 ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  {t.about.languages.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {t.about.languages.list.map((lang) => (
                    <div
                      key={lang.name}
                      className={`flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 ${
                        isRTL ? "flex-row-reverse" : ""
                      }`}
                    >
                      <span className="text-foreground font-medium">{lang.name}</span>
                      <Badge
                        variant="secondary"
                        className="bg-accent/10 text-accent border-accent/20"
                      >
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Education & Additional Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="card-elevated">
              <CardContent className="p-8">
                <h3
                  className={`text-xl font-bold text-foreground mb-6 ${
                    isRTL ? "text-right" : ""
                  }`}
                >
                  {t.about.education.title}
                </h3>
                <div className={`space-y-4 ${isRTL ? "text-right" : ""}`}>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {t.about.education.degree}
                    </h4>
                    <p className="text-muted-foreground">{t.about.education.institution}</p>
                  </div>
                  <div className="pt-2 space-y-1">
                    <p className="text-sm text-muted-foreground">{t.about.education.period}</p>
                    <p className="text-sm text-muted-foreground">{t.about.education.gpa}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

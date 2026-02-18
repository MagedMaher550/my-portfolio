"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    titleKey: "programming",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 75 },
      { name: "C#", level: 70 },
      { name: "Java", level: 65 },
      { name: "Dart", level: 60 },
      { name: "PHP", level: 55 },
      { name: "Python", level: 50 },
    ],
  },
  {
    titleKey: "frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "Redux", level: 85 },
      { name: "RTK", level: 85 },
      { name: "React Flow", level: 80 },
      { name: "AngularJS", level: 75 },
    ],
  },
  {
    titleKey: "backend",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "Prisma", level: 70 },
      { name: ".NET", level: 65 },
    ],
  },
  {
    titleKey: "uiStyling",
    skills: [
      { name: "TailwindCSS", level: 95 },
      { name: "Material UI", level: 90 },
      { name: "CSS", level: 90 },
      { name: "Bootstrap", level: 80 },
    ],
  },
  {
    titleKey: "testing",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Cypress", level: 70 },
    ],
  },
]

function SkillCard({ category, index }: { category: (typeof skillCategories)[0]; index: number }) {
  const { t } = useLanguage()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="card-elevated card-hover h-full">
        <CardHeader className="pb-4">
          <CardTitle className="text-xl font-bold">
            {t.skills.categories[category.titleKey as keyof typeof t.skills.categories]}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <Badge
                key={skill.name}
                variant="secondary"
                className="text-sm font-medium px-3 py-1.5 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 transition-colors duration-200"
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function SkillsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t.skills.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.titleKey} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { useLanguage } from "@/contexts/language-context"

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

function SkillCard({ category }: { category: (typeof skillCategories)[0] }) {
  const { t } = useLanguage()

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">
          {t.skills.categories[category.titleKey as keyof typeof t.skills.categories]}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {category.skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export function SkillsSection() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.skills.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.skills.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.titleKey} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t, isRTL } = useLanguage()

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.about.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="space-y-6">
            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? "text-right" : ""}`}>
              {t.about.description}
            </p>
            <p className={`text-lg text-muted-foreground leading-relaxed ${isRTL ? "text-right" : ""}`}>
              {t.about.passion}
            </p>

            {/* Languages */}
            <Card>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold text-foreground mb-4 ${isRTL ? "text-right" : ""}`}>
                  {t.about.languages.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {t.about.languages.list.map((lang) => (
                    <div
                      key={lang.name}
                      className={`flex justify-between items-center ${isRTL ? "flex-row-reverse" : ""}`}
                    >
                      <span className="text-foreground">{lang.name}</span>
                      <Badge variant="secondary">{lang.level}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Additional Info */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className={`text-xl font-semibold text-foreground mb-4 ${isRTL ? "text-right" : ""}`}>
                  {t.about.education.title}
                </h3>
                <div className={`space-y-2 ${isRTL ? "text-right" : ""}`}>
                  <h4 className="font-medium text-foreground">{t.about.education.degree}</h4>
                  <p className="text-muted-foreground">{t.about.education.institution}</p>
                  <p className="text-sm text-muted-foreground">{t.about.education.period}</p>
                  <p className="text-sm text-muted-foreground">{t.about.education.gpa}</p>
                </div>
              </CardContent>
            </Card>

            {/* Profile Image Placeholder */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-accent-foreground">MH</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t.about.profilePhoto}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

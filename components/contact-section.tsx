"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t, isRTL } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)

    // In a real app, you would send the data to your backend
    alert(t.contact.form.success)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.contact.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className={`text-xl ${isRTL ? "text-right" : ""}`}>{t.contact.form.title}</CardTitle>
              <CardDescription className={isRTL ? "text-right" : ""}>{t.contact.form.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className={isRTL ? "text-right block" : ""}>
                    {t.contact.form.name}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className={isRTL ? "text-right block" : ""}>
                    {t.contact.form.email}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className={isRTL ? "text-right block" : ""}>
                    {t.contact.form.message}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className={isRTL ? "text-right" : ""}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2" />
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      <Send className={`h-4 w-4 mr-2 ${isRTL ? "mr-0 ml-2" : ""}`} />
                      {t.contact.form.send}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle className={`text-xl ${isRTL ? "text-right" : ""}`}>{t.contact.info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0">
                    <Mail className="h-5 w-5 text-accent" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <p className="font-medium text-foreground">{t.contact.info.email}</p>
                    <a
                      href="mailto:magedmaher602@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      magedmaher602@gmail.com
                    </a>
                  </div>
                </div>

                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0">
                    <Phone className="h-5 w-5 text-accent" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <p className="font-medium text-foreground">{t.contact.info.phone}</p>
                    <a href="tel:+201017459123" className="text-muted-foreground hover:text-accent transition-colors">
                      +20 1017459123
                    </a>
                  </div>
                </div>

                <div className={`flex items-center gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="flex-shrink-0">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className={isRTL ? "text-right" : ""}>
                    <p className="font-medium text-foreground">{t.contact.info.location}</p>
                    <p className="text-muted-foreground">Alexandria, Egypt</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle className={`text-xl ${isRTL ? "text-right" : ""}`}>{t.contact.social.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://linkedin.com/in/maged-maher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a
                      href="https://github.com/magedmaher"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github className="h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className={`text-xl ${isRTL ? "text-right" : ""}`}>{t.contact.actions.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="mailto:magedmaher602@gmail.com">
                    <Mail className={`h-4 w-4 mr-2 ${isRTL ? "mr-0 ml-2" : ""}`} />
                    {t.contact.actions.email}
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <a href="tel:+201017459123">
                    <Phone className={`h-4 w-4 mr-2 ${isRTL ? "mr-0 ml-2" : ""}`} />
                    {t.contact.actions.call}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          {/* Greeting */}
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground">{t.hero.greeting}</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              {t.hero.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-accent">
              {t.hero.title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t.hero.description}
          </p>

          {/* Contact Info */}
          <div
            className={`flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex items-center gap-2 hover:text-accent transition-colors ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{t.hero.location}</span>
            </div>
            <div
              className={`flex items-center gap-2 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Mail className="h-4 w-4" />
              <a
                href="mailto:magedmaher602@gmail.com"
                className="hover:text-accent transition-colors"
              >
                magedmaher602@gmail.com
              </a>
            </div>
            <div
              className={`flex items-center gap-2 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Phone className="h-4 w-4" />
              <a
                href="tel:+201017459123"
                className="hover:text-accent transition-colors"
              >
                +20 1017459123
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground hover:scale-105 transition-all"
            >
              {t.hero.cta}
              <ArrowDown
                className={`ml-2 h-4 w-4 ${isRTL ? "ml-0 mr-2" : ""}`}
              />
            </Button>
            <a href="/cv.pdf" download="Maged-CV.pdf">
              <Button
                variant="outline"
                size="lg"
                className="hover:scale-105 transition-all bg-transparent cursor-pointer"
              >
                <Download
                  className={`mr-2 h-4 w-4 ${isRTL ? "mr-0 ml-2" : ""}`}
                />
                {t.hero.downloadCV}
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 pt-8">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:scale-110 transition-all"
            >
              <a
                href="https://linkedin.com/in/maged-maher"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hover:scale-110 transition-all"
            >
              <a
                href="https://github.com/MagedMaher550"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

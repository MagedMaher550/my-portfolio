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
import { motion } from "framer-motion";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground font-medium"
            >
              {t.hero.greeting}
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground text-balance leading-tight tracking-tight"
            >
              {t.hero.name}
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-5xl font-semibold bg-gradient-to-r from-accent to-accent/70 bg-clip-text text-transparent"
            >
              {t.hero.title}
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed font-light"
          >
            {t.hero.description}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className={`flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm sm:text-base text-muted-foreground ${
              isRTL ? "flex-row-reverse" : ""
            }`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 hover:text-accent transition-colors duration-200 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <MapPin className="h-4 w-4" />
              <span>{t.hero.location}</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Mail className="h-4 w-4" />
              <a
                href="mailto:magedmaher602@gmail.com"
                className="hover:text-accent transition-colors duration-200"
              >
                magedmaher602@gmail.com
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2 ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <Phone className="h-4 w-4" />
              <a
                href="tel:+201017459123"
                className="hover:text-accent transition-colors duration-200"
              >
                +20 1017459123
              </a>
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-200"
              >
                {t.hero.cta}
                <ArrowDown
                  className={`ml-2 h-4 w-4 ${isRTL ? "ml-0 mr-2" : ""}`}
                />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/cv.pdf" download="Maged-CV.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 text-base font-semibold rounded-xl border-2 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
                >
                  <Download
                    className={`mr-2 h-4 w-4 ${isRTL ? "mr-0 ml-2" : ""}`}
                  />
                  {t.hero.downloadCV}
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-12 w-12 rounded-xl hover:bg-accent/10 transition-all duration-200"
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
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="h-12 w-12 rounded-xl hover:bg-accent/10 transition-all duration-200"
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
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

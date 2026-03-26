"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import {
  workProjects,
  personalProjects,
  freelanceProjects, // ✅ added
} from "@/lib/projects-data";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof workProjects)[0];
  index: number;
}) {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group card-elevated card-hover h-full flex flex-col">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-3 flex-1">
              <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors duration-200">
                {project.title}
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-xs font-medium bg-accent/10 text-accent border-accent/20"
              >
                {project.category[language as keyof typeof project.category]}
              </Badge>
            </div>
          </div>
          <CardDescription className="text-muted-foreground leading-relaxed text-sm mt-4">
            {project.description[language as keyof typeof project.description]}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col flex-1 justify-between space-y-6 pt-0">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs font-medium border-border/50 bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 pt-2">
            {project.liveUrl ? (
              <Button
                size="sm"
                variant="default"
                asChild
                className="flex-1 min-w-[120px] bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-all duration-200"
              >
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.projects.viewLive}
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                disabled
                className="flex-1 min-w-[120px] rounded-lg"
              >
                {t.projects.notDeployed}
              </Button>
            )}

            {project.githubUrl && (
              <Button
                size="sm"
                variant="outline"
                asChild
                className="flex-1 min-w-[120px] rounded-lg border-2 hover:border-accent/50 hover:bg-accent/5 transition-all duration-200"
              >
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewCode}
                </a>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding bg-muted/20 dark:bg-muted/5"
    >
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {t.projects.title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Work Projects */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t.projects.workProjects.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.projects.workProjects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Freelance Projects ✅ NEW */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t.projects.freelanceProjects.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.projects.freelanceProjects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freelanceProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index + workProjects.length}
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-12"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
              {t.projects.personalProjects.title}
            </h3>
            <p className="text-muted-foreground text-lg">
              {t.projects.personalProjects.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={
                  index + workProjects.length + freelanceProjects.length
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
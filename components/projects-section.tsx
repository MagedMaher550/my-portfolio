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
import { workProjects, personalProjects } from "@/lib/projects-data";

function ProjectCard({ project }: { project: (typeof workProjects)[0] }) {
  const { t, language } = useLanguage();

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-accent transition-colors">
              {project.title}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {project.category[language as keyof typeof project.category]}
            </Badge>
          </div>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description[language as keyof typeof project.description]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.liveUrl ? (
              <Button size="sm" variant="default" asChild>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.projects.viewLive}
                </a>
              </Button>
            ) : (
              <Button size="sm" variant="outline" disabled>
                {t.projects.notDeployed}
              </Button>
            )}
            {project.githubUrl && (
              <Button size="sm" variant="outline" asChild>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewCode}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Work Projects */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {t.projects.workProjects.title}
            </h3>
            <p className="text-muted-foreground">
              {t.projects.workProjects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              {t.projects.personalProjects.title}
            </h3>
            <p className="text-muted-foreground">
              {t.projects.personalProjects.subtitle}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

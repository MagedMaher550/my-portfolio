"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const workProjects = [
  {
    title: "Ask Wafi",
    description: {
      en: "AI-powered assistant guiding project managers through key lifecycle stages. Built UI for diagnostic diagrams, recommendations, multi-session support, and account management.",
      ar: "مساعد ذكي يوجه مديري المشاريع خلال مراحل دورة الحياة الرئيسية. بناء واجهة المستخدم للمخططات التشخيصية والتوصيات ودعم الجلسات المتعددة وإدارة الحسابات.",
      fr: "Assistant IA guidant les chefs de projet à travers les étapes clés du cycle de vie. Interface utilisateur construite pour les diagrammes de diagnostic, recommandations, support multi-sessions et gestion de compte.",
      es: "Asistente impulsado por IA que guía a los gerentes de proyecto a través de las etapas clave del ciclo de vida. Interfaz construida para diagramas de diagnóstico, recomendaciones, soporte multi-sesión y gestión de cuentas.",
    },
    technologies: ["React", "Redux", "React Flow", "Material UI", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: null,
    category: {
      en: "AI Assistant",
      ar: "مساعد ذكي",
      fr: "Assistant IA",
      es: "Asistente IA",
    },
  },
  {
    title: "Evicare",
    description: {
      en: "Built interactive dashboards with CRUD operations and filters. Designed an optimized Redux store to manage global state efficiently and handled backend integration.",
      ar: "بناء لوحات تحكم تفاعلية مع عمليات CRUD والمرشحات. تصميم متجر Redux محسن لإدارة الحالة العامة بكفاءة والتعامل مع تكامل الخلفية.",
      fr: "Tableaux de bord interactifs construits avec opérations CRUD et filtres. Magasin Redux optimisé conçu pour gérer l'état global efficacement et intégration backend.",
      es: "Paneles interactivos construidos with operaciones CRUD y filtros. Tienda Redux optimizada diseñada para gestionar el estado global eficientemente e integración backend.",
    },
    technologies: ["React", "Redux Toolkit", "Material UI", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: null,
    category: {
      en: "Healthcare Dashboard",
      ar: "لوحة تحكم الرعاية الصحية",
      fr: "Tableau de Bord Santé",
      es: "Panel de Salud",
    },
  },
  {
    title: "SAL",
    description: {
      en: "Enhanced the platform by adding new features and improving UI. Fixed state management issues and delivered performance optimizations for better user experience.",
      ar: "تحسين المنصة بإضافة ميزات جديدة وتحسين واجهة المستخدم. إصلاح مشاكل إدارة الحالة وتقديم تحسينات الأداء لتجربة مستخدم أفضل.",
      fr: "Plateforme améliorée en ajoutant de nouvelles fonctionnalités et en améliorant l'interface utilisateur. Problèmes de gestion d'état corrigés et optimisations de performance livrées.",
      es: "Plataforma mejorada agregando nuevas características y mejorando la UI. Problemas de gestión de estado corregidos y optimizaciones de rendimiento entregadas.",
    },
    technologies: ["React", "Redux Toolkit", "Material UI", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: null,
    category: {
      en: "Platform Enhancement",
      ar: "تحسين المنصة",
      fr: "Amélioration de Plateforme",
      es: "Mejora de Plataforma",
    },
  },
]

const personalProjects = [
  {
    title: "Learn Spanish",
    description: {
      en: "A language learning app with interactive lessons and practice modules. Implemented clean UI, responsive layouts, and state management for an engaging learning experience.",
      ar: "تطبيق تعلم اللغة مع دروس تفاعلية ووحدات ممارسة. تنفيذ واجهة مستخدم نظيفة وتخطيطات متجاوبة وإدارة الحالة لتجربة تعلم جذابة.",
      fr: "Application d'apprentissage des langues avec leçons interactives et modules de pratique. Interface utilisateur propre implémentée, mises en page responsives et gestion d'état.",
      es: "Aplicación de aprendizaje de idiomas con lecciones interactivas y módulos de práctica. UI limpia implementada, diseños responsivos y gestión de estado.",
    },
    technologies: ["Next.js", "Redux", "Material UI", "CSS", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: {
      en: "Education",
      ar: "التعليم",
      fr: "Éducation",
      es: "Educación",
    },
  },
  {
    title: "Guttin Language",
    description: {
      en: "A complete custom-language app with its own alphabet translator and English converter. Features bi-directional translation between Guttin symbols and English.",
      ar: "تطبيق لغة مخصصة كامل مع مترجم الأبجدية الخاص به ومحول الإنجليزية. يتميز بالترجمة ثنائية الاتجاه بين رموز Guttin والإنجليزية.",
      fr: "Application de langue personnalisée complète avec son propre traducteur d'alphabet et convertisseur anglais. Traduction bidirectionnelle entre les symboles Guttin et l'anglais.",
      es: "Aplicación de idioma personalizado completa con su propio traductor de alfabeto y convertidor de inglés. Traducción bidireccional entre símbolos Guttin e inglés.",
    },
    technologies: ["Next.js", "Material UI", "CSS", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    category: {
      en: "Language Tool",
      ar: "أداة اللغة",
      fr: "Outil de Langue",
      es: "Herramienta de Idioma",
    },
  },
  {
    title: "Auction System",
    description: {
      en: "Built a secure system with user authentication, product listing, and bidding. Added dashboards for users to track bids and history with transparent bidding mechanism.",
      ar: "بناء نظام آمن مع مصادقة المستخدم وقائمة المنتجات والمزايدة. إضافة لوحات تحكم للمستخدمين لتتبع العطاءات والتاريخ مع آلية مزايدة شفافة.",
      fr: "Système sécurisé construit avec authentification utilisateur, liste de produits et enchères. Tableaux de bord ajoutés pour suivre les enchères et l'historique.",
      es: "Sistema seguro construido con autenticación de usuario, listado de productos y licitación. Paneles agregados para rastrear ofertas e historial.",
    },
    technologies: ["Angular", ".NET"],
    liveUrl: null,
    githubUrl: "#",
    category: {
      en: "E-commerce",
      ar: "التجارة الإلكترونية",
      fr: "E-commerce",
      es: "Comercio Electrónico",
    },
  },
  {
    title: "Roadn",
    description: {
      en: "Developed a mobile app for seamless customer transport across Egyptian cities and governates using Flutter for frontend and Node.js with MongoDB for backend.",
      ar: "تطوير تطبيق محمول لنقل العملاء السلس عبر المدن والمحافظات المصرية باستخدام Flutter للواجهة الأمامية و Node.js مع MongoDB للخلفية.",
      fr: "Application mobile développée pour le transport client transparent à travers les villes et gouvernorats égyptiens utilisant Flutter pour le frontend et Node.js avec MongoDB.",
      es: "Aplicación móvil desarrollada para transporte de clientes sin problemas a través de ciudades y gobernaciones egipcias usando Flutter para frontend y Node.js con MongoDB.",
    },
    technologies: ["Flutter", "Node.js", "Express.js", "MongoDB"],
    liveUrl: null,
    githubUrl: "#",
    category: {
      en: "Mobile App",
      ar: "تطبيق محمول",
      fr: "Application Mobile",
      es: "Aplicación Móvil",
    },
  },
]

function ProjectCard({ project }: { project: (typeof workProjects)[0] }) {
  const { t, language } = useLanguage()

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl group-hover:text-accent transition-colors">{project.title}</CardTitle>
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
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
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
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  {t.projects.viewCode}
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.projects.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        {/* Work Projects */}
        <div className="mb-16">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">{t.projects.workProjects.title}</h3>
            <p className="text-muted-foreground">{t.projects.workProjects.subtitle}</p>
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
            <h3 className="text-2xl font-semibold text-foreground mb-2">{t.projects.personalProjects.title}</h3>
            <p className="text-muted-foreground">{t.projects.personalProjects.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

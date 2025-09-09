"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Building } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const experiences = [
  {
    title: {
      en: "Frontend Engineer",
      ar: "مهندس واجهة أمامية",
      fr: "Ingénieur Frontend",
      es: "Ingeniero Frontend",
    },
    company: "Tech Hive",
    location: {
      en: "Alexandria, Egypt",
      ar: "الإسكندرية، مصر",
      fr: "Alexandrie, Égypte",
      es: "Alejandría, Egipto",
    },
    period: {
      en: "Nov 2023 – Sep 2025",
      ar: "نوفمبر 2023 – سبتمبر 2025",
      fr: "Nov 2023 – Sep 2025",
      es: "Nov 2023 – Sep 2025",
    },
    type: {
      en: "Full-time",
      ar: "دوام كامل",
      fr: "Temps plein",
      es: "Tiempo completo",
    },
    description: {
      en: "Developed and maintained web applications across multiple projects. Built reusable, scalable UI components and optimized performance.",
      ar: "تطوير وصيانة تطبيقات الويب عبر مشاريع متعددة. بناء مكونات واجهة المستخدم القابلة لإعادة الاستخدام والقابلة للتوسع وتحسين الأداء.",
      fr: "Développé et maintenu des applications web sur plusieurs projets. Construit des composants UI réutilisables et évolutifs et optimisé les performances.",
      es: "Desarrollé y mantuve aplicaciones web en múltiples proyectos. Construí componentes UI reutilizables y escalables y optimicé el rendimiento.",
    },
    achievements: {
      en: [
        "Managed full application lifecycle, overseeing design to support phases",
        "Developed clean, functional code while optimizing performance and enhancing user interfaces",
        "Stayed updated on tech trends, ensuring improvement in development approaches",
        "Built multiple successful projects including Ask Wafi, Evicare, and SAL platforms",
      ],
      ar: [
        "إدارة دورة حياة التطبيق الكاملة، والإشراف على مراحل التصميم إلى الدعم",
        "تطوير كود نظيف وعملي مع تحسين الأداء وتعزيز واجهات المستخدم",
        "البقاء محدثًا بأحدث اتجاهات التكنولوجيا، وضمان التحسين في أساليب التطوير",
        "بناء مشاريع ناجحة متعددة بما في ذلك منصات Ask Wafi و Evicare و SAL",
      ],
      fr: [
        "Géré le cycle de vie complet de l'application, supervisant les phases de conception au support",
        "Développé du code propre et fonctionnel tout en optimisant les performances et améliorant les interfaces utilisateur",
        "Resté à jour sur les tendances technologiques, assurant l'amélioration des approches de développement",
        "Construit plusieurs projets réussis incluant les plateformes Ask Wafi, Evicare et SAL",
      ],
      es: [
        "Gestioné el ciclo de vida completo de la aplicación, supervisando las fases de diseño al soporte",
        "Desarrollé código limpio y funcional mientras optimizaba el rendimiento y mejoraba las interfaces de usuario",
        "Me mantuve actualizado en tendencias tecnológicas, asegurando mejoras en los enfoques de desarrollo",
        "Construí múltiples proyectos exitosos incluyendo las plataformas Ask Wafi, Evicare y SAL",
      ],
    },
    technologies: ["React", "Redux", "Next.js", "Material UI", "TailwindCSS", "TypeScript"],
  },
  {
    title: {
      en: "Fullstack Intern (.NET Track)",
      ar: "متدرب تطوير شامل (مسار .NET)",
      fr: "Stagiaire Fullstack (Parcours .NET)",
      es: "Interno Fullstack (Pista .NET)",
    },
    company: "ITI (Information Technology Institute)",
    location: {
      en: "Alexandria, Egypt",
      ar: "الإسكندرية، مصر",
      fr: "Alexandrie, Égypte",
      es: "Alejandría, Egipto",
    },
    period: {
      en: "Jul 2023 – Nov 2023",
      ar: "يوليو 2023 – نوفمبر 2023",
      fr: "Juil 2023 – Nov 2023",
      es: "Jul 2023 – Nov 2023",
    },
    type: {
      en: "Internship",
      ar: "تدريب",
      fr: "Stage",
      es: "Prácticas",
    },
    description: {
      en: "3-month intensive program focusing on fullstack development using .NET framework and AngularJS.",
      ar: "برنامج مكثف لمدة 3 أشهر يركز على التطوير الشامل باستخدام إطار عمل .NET و AngularJS.",
      fr: "Programme intensif de 3 mois axé sur le développement fullstack utilisant le framework .NET et AngularJS.",
      es: "Programa intensivo de 3 meses enfocado en desarrollo fullstack usando framework .NET y AngularJS.",
    },
    achievements: {
      en: [
        "Proficiently used AngularJS for frontend development and enhanced user experiences",
        "Gained solid understanding of networking and .NET framework for backend functionality",
        "Led end-to-end web application creation, seamlessly integrating AngularJS and .NET",
        "Built comprehensive auction system with authentication and bidding features",
      ],
      ar: [
        "استخدام AngularJS بكفاءة لتطوير الواجهة الأمامية وتحسين تجارب المستخدم",
        "اكتساب فهم قوي للشبكات وإطار عمل .NET لوظائف الخلفية",
        "قيادة إنشاء تطبيق ويب شامل، ودمج AngularJS و .NET بسلاسة",
        "بناء نظام مزاد شامل مع ميزات المصادقة والمزايدة",
      ],
      fr: [
        "Utilisé AngularJS avec compétence pour le développement frontend et amélioré les expériences utilisateur",
        "Acquis une compréhension solide du réseau et du framework .NET pour les fonctionnalités backend",
        "Dirigé la création d'applications web de bout en bout, intégrant parfaitement AngularJS et .NET",
        "Construit un système d'enchères complet avec authentification et fonctionnalités d'enchères",
      ],
      es: [
        "Usé AngularJS competentemente para desarrollo frontend y mejoré experiencias de usuario",
        "Obtuve comprensión sólida de redes y framework .NET para funcionalidad backend",
        "Lideré creación de aplicaciones web de extremo a extremo, integrando perfectamente AngularJS y .NET",
        "Construí sistema de subastas integral con autenticación y características de licitación",
      ],
    },
    technologies: ["AngularJS", ".NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
  },
  {
    title: {
      en: "Frontend Intern",
      ar: "متدرب واجهة أمامية",
      fr: "Stagiaire Frontend",
      es: "Interno Frontend",
    },
    company: "ITI (Information Technology Institute)",
    location: {
      en: "Alexandria, Egypt",
      ar: "الإسكندرية، مصر",
      fr: "Alexandrie, Égypte",
      es: "Alejandría, Egipto",
    },
    period: {
      en: "Jul 2019 – Aug 2019",
      ar: "يوليو 2019 – أغسطس 2019",
      fr: "Juil 2019 – Août 2019",
      es: "Jul 2019 – Ago 2019",
    },
    type: {
      en: "Summer Internship",
      ar: "تدريب صيفي",
      fr: "Stage d'été",
      es: "Prácticas de Verano",
    },
    description: {
      en: "Summer internship program focusing on frontend web development fundamentals.",
      ar: "برنامج تدريب صيفي يركز على أساسيات تطوير الويب للواجهة الأمامية.",
      fr: "Programme de stage d'été axé sur les fondamentaux du développement web frontend.",
      es: "Programa de prácticas de verano enfocado en fundamentos de desarrollo web frontend.",
    },
    achievements: {
      en: [
        "Gained proficiency in HTML, CSS, JavaScript, jQuery, and React JS for front-end development",
        "Crafted a seamless user-friendly Ecommerce app with 100% success rate",
        "Implemented CRUD operations via seamless FakeJson backend integration",
        "Learned responsive design principles and modern web development practices",
      ],
      ar: [
        "اكتساب الكفاءة في HTML و CSS و JavaScript و jQuery و React JS لتطوير الواجهة الأمامية",
        "صياغة تطبيق تجارة إلكترونية سهل الاستخدام وسلس بمعدل نجاح 100%",
        "تنفيذ عمليات CRUD عبر تكامل خلفية FakeJson السلس",
        "تعلم مبادئ التصميم المتجاوب وممارسات تطوير الويب الحديثة",
      ],
      fr: [
        "Acquis la maîtrise de HTML, CSS, JavaScript, jQuery et React JS pour le développement frontend",
        "Créé une application e-commerce conviviale et fluide avec un taux de réussite de 100%",
        "Implémenté des opérations CRUD via une intégration backend FakeJson transparente",
        "Appris les principes de design responsive et les pratiques modernes de développement web",
      ],
      es: [
        "Obtuve competencia en HTML, CSS, JavaScript, jQuery y React JS para desarrollo frontend",
        "Creé una aplicación de comercio electrónico amigable y fluida con 100% de tasa de éxito",
        "Implementé operaciones CRUD a través de integración backend FakeJson perfecta",
        "Aprendí principios de diseño responsivo y prácticas modernas de desarrollo web",
      ],
    },
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "React", "Bootstrap"],
  },
]

function ExperienceCard({ experience }: { experience: (typeof experiences)[0] }) {
  const { t, language } = useLanguage()

  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="space-y-2">
            <CardTitle className="text-xl text-foreground">
              {experience.title[language as keyof typeof experience.title]}
            </CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                <span>{experience.period[language as keyof typeof experience.period]}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{experience.location[language as keyof typeof experience.location]}</span>
              </div>
            </div>
          </div>
          <Badge variant="secondary" className="self-start">
            {experience.type[language as keyof typeof experience.type]}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {experience.description[language as keyof typeof experience.description]}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Key Achievements */}
          <div>
            <h4 className="font-medium text-foreground mb-3">{t.experience.keyAchievements}:</h4>
            <ul className="space-y-2">
              {experience.achievements[language as keyof typeof experience.achievements].map((achievement, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-medium text-foreground mb-3">{t.experience.technologiesUsed}:</h4>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{t.experience.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.experience.subtitle}</p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={experience.title.en + experience.period.en} className="relative">
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-full w-0.5 h-8 bg-border -translate-x-1/2 z-0" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-4 top-6 w-3 h-3 bg-accent rounded-full -translate-x-1/2 z-10 border-2 border-background" />

              {/* Content */}
              <div className="ml-12">
                <ExperienceCard experience={experience} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

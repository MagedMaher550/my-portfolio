export type Language = "en" | "ar" | "fr" | "es"

export interface Translations {
  navigation: {
    about: string
    projects: string
    skills: string
    experience: string
    contact: string
  }
  hero: {
    greeting: string
    name: string
    title: string
    description: string
    location: string
    cta: string
    downloadCV: string
  }
  about: {
    title: string
    description: string
    passion: string
    profilePhoto: string
    education: {
      title: string
      degree: string
      institution: string
      period: string
      gpa: string
    }
    languages: {
      title: string
      list: Array<{ name: string; level: string }>
    }
  }
  projects: {
    title: string
    subtitle: string
    workProjects: {
      title: string
      subtitle: string
    }
    personalProjects: {
      title: string
      subtitle: string
    }
    viewLive: string
    viewCode: string
    notDeployed: string
  }
  skills: {
    title: string
    subtitle: string
    categories: {
      programming: string
      frontend: string
      backend: string
      uiStyling: string
      testing: string
    }
  }
  experience: {
    title: string
    subtitle: string
    present: string
    keyAchievements: string
    technologiesUsed: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      title: string
      description: string
      name: string
      email: string
      message: string
      send: string
      sending: string
      success: string
    }
    info: {
      title: string
      email: string
      phone: string
      location: string
    }
    social: {
      title: string
    }
    actions: {
      title: string
      email: string
      call: string
    }
  }
  footer: {
    rights: string
    builtWith: string
    description: string
    quickLinks: string
    contact: string
    backToTop: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Maged Maher Hossney",
      title: "Frontend Developer",
      description:
        "A dedicated Frontend Developer with extensive experience in building scalable, user-centric web applications. I specialize in React.js, Next.js, Redux, and modern UI frameworks.",
      location: "Alexandria, Egypt",
      cta: "View My Work",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      description:
        "I'm a dedicated Frontend Developer with extensive experience in building scalable, user-centric web applications. My strength lies in translating business needs into clean, responsive, and performant interfaces that deliver seamless user experiences.",
      passion:
        "I am passionate about problem-solving, performance optimization, and crafting impactful digital products.",
      profilePhoto: "Profile Photo",
      education: {
        title: "Education",
        degree: "B.Sc. in Computer Science",
        institution: "Faculty of Science, Alexandria University",
        period: "2017 – 2021",
        gpa: "CGPA: 3.1 / 4",
      },
      languages: {
        title: "Languages",
        list: [
          { name: "Arabic", level: "Native" },
          { name: "English", level: "B2" },
          { name: "French", level: "A2" },
          { name: "Spanish", level: "A1" },
        ],
      },
    },
    projects: {
      title: "Projects",
      subtitle: "A showcase of my recent work and contributions",
      workProjects: {
        title: "Work Projects",
        subtitle: "Professional projects developed at Tech Hive",
      },
      personalProjects: {
        title: "Personal Projects",
        subtitle: "Side projects and learning experiments",
      },
      viewLive: "View Live",
      viewCode: "View Code",
      notDeployed: "Not Deployed",
    },
    skills: {
      title: "Skills & Technologies",
      subtitle: "Technologies and tools I work with",
      categories: {
        programming: "Programming Languages",
        frontend: "Frontend Frameworks & Libraries",
        backend: "Backend & Tools",
        uiStyling: "UI & Styling",
        testing: "Testing & Version Control",
      },
    },
    experience: {
      title: "Work Experience",
      subtitle: "My professional journey and key contributions",
      present: "Present",
      keyAchievements: "Key Achievements",
      technologiesUsed: "Technologies Used",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's discuss your next project or opportunity",
      form: {
        title: "Send Message",
        description: "Fill out the form below and I'll get back to you soon",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully!",
      },
      info: {
        title: "Contact Information",
        email: "Email",
        phone: "Phone",
        location: "Location",
      },
      social: {
        title: "Connect With Me",
      },
      actions: {
        title: "Quick Actions",
        email: "Send Email",
        call: "Call Now",
      },
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Next.js and TailwindCSS",
      description:
        "Frontend Developer passionate about creating exceptional user experiences with modern web technologies.",
      quickLinks: "Quick Links",
      contact: "Contact",
      backToTop: "Back to top",
    },
  },
  ar: {
    navigation: {
      about: "نبذة",
      projects: "المشاريع",
      skills: "المهارات",
      experience: "الخبرة",
      contact: "التواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "ماجد ماهر حسني",
      title: "مطور واجهات أمامية",
      description:
        "مطور واجهات أمامية متخصص مع خبرة واسعة في بناء تطبيقات ويب قابلة للتطوير ومتمحورة حول المستخدم. أتخصص في React.js و Next.js و Redux وأطر العمل الحديثة للواجهات.",
      location: "الإسكندرية، مصر",
      cta: "عرض أعمالي",
      downloadCV: "تحميل السيرة الذاتية",
    },
    about: {
      title: "نبذة عني",
      description:
        "أنا مطور واجهات أمامية متخصص مع خبرة واسعة في بناء تطبيقات ويب قابلة للتطوير ومتمحورة حول المستخدم. تكمن قوتي في ترجمة احتياجات العمل إلى واجهات نظيفة ومتجاوبة وعالية الأداء.",
      passion: "أنا شغوف بحل المشكلات وتحسين الأداء وصناعة المنتجات الرقمية المؤثرة.",
      profilePhoto: "الصورة الشخصية",
      education: {
        title: "التعليم",
        degree: "بكالوريوس علوم الحاسوب",
        institution: "كلية العلوم، جامعة الإسكندرية",
        period: "2017 – 2021",
        gpa: "المعدل التراكمي: 3.1 / 4",
      },
      languages: {
        title: "اللغات",
        list: [
          { name: "العربية", level: "اللغة الأم" },
          { name: "الإنجليزية", level: "B2" },
          { name: "الفرنسية", level: "A2" },
          { name: "الإسبانية", level: "A1" },
        ],
      },
    },
    projects: {
      title: "المشاريع",
      subtitle: "عرض لأحدث أعمالي ومساهماتي",
      workProjects: {
        title: "مشاريع العمل",
        subtitle: "المشاريع المهنية المطورة في Tech Hive",
      },
      personalProjects: {
        title: "المشاريع الشخصية",
        subtitle: "المشاريع الجانبية وتجارب التعلم",
      },
      viewLive: "عرض مباشر",
      viewCode: "عرض الكود",
      notDeployed: "غير منشور",
    },
    skills: {
      title: "المهارات والتقنيات",
      subtitle: "التقنيات والأدوات التي أعمل بها",
      categories: {
        programming: "لغات البرمجة",
        frontend: "أطر العمل ومكتبات الواجهة الأمامية",
        backend: "الخلفية والأدوات",
        uiStyling: "واجهة المستخدم والتصميم",
        testing: "الاختبار وإدارة الإصدارات",
      },
    },
    experience: {
      title: "الخبرة المهنية",
      subtitle: "رحلتي المهنية ومساهماتي الرئيسية",
      present: "الحاضر",
      keyAchievements: "الإنجازات الرئيسية",
      technologiesUsed: "التقنيات المستخدمة",
    },
    contact: {
      title: "تواصل معي",
      subtitle: "لنناقش مشروعك القادم أو الفرصة المتاحة",
      form: {
        title: "إرسال رسالة",
        description: "املأ النموذج أدناه وسأعود إليك قريباً",
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        send: "إرسال الرسالة",
        sending: "جاري الإرسال...",
        success: "تم إرسال الرسالة بنجاح!",
      },
      info: {
        title: "معلومات التواصل",
        email: "البريد الإلكتروني",
        phone: "الهاتف",
        location: "الموقع",
      },
      social: {
        title: "تواصل معي",
      },
      actions: {
        title: "إجراءات سريعة",
        email: "إرسال بريد إلكتروني",
        call: "اتصل الآن",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      builtWith: "مبني باستخدام Next.js و TailwindCSS",
      description: "مطور واجهات أمامية شغوف بإنشاء تجارب مستخدم استثنائية باستخدام تقنيات الويب الحديثة.",
      quickLinks: "روابط سريعة",
      contact: "التواصل",
      backToTop: "العودة للأعلى",
    },
  },
  fr: {
    navigation: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Maged Maher Hossney",
      title: "Développeur Frontend",
      description:
        "Un développeur Frontend dévoué avec une vaste expérience dans la création d'applications web évolutives et centrées sur l'utilisateur. Je me spécialise dans React.js, Next.js, Redux et les frameworks UI modernes.",
      location: "Alexandrie, Égypte",
      cta: "Voir Mon Travail",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À Propos de Moi",
      description:
        "Je suis un développeur Frontend dévoué avec une vaste expérience dans la création d'applications web évolutives et centrées sur l'utilisateur. Ma force réside dans la traduction des besoins métier en interfaces propres, réactives et performantes.",
      passion:
        "Je suis passionné par la résolution de problèmes, l'optimisation des performances et la création de produits numériques impactants.",
      profilePhoto: "Photo de Profil",
      education: {
        title: "Éducation",
        degree: "Licence en Informatique",
        institution: "Faculté des Sciences, Université d'Alexandrie",
        period: "2017 – 2021",
        gpa: "Moyenne: 3.1 / 4",
      },
      languages: {
        title: "Langues",
        list: [
          { name: "Arabe", level: "Natif" },
          { name: "Anglais", level: "B2" },
          { name: "Français", level: "A2" },
          { name: "Espagnol", level: "A1" },
        ],
      },
    },
    projects: {
      title: "Projets",
      subtitle: "Une vitrine de mon travail récent et de mes contributions",
      workProjects: {
        title: "Projets Professionnels",
        subtitle: "Projets professionnels développés chez Tech Hive",
      },
      personalProjects: {
        title: "Projets Personnels",
        subtitle: "Projets parallèles et expériences d'apprentissage",
      },
      viewLive: "Voir en Direct",
      viewCode: "Voir le Code",
      notDeployed: "Non Déployé",
    },
    skills: {
      title: "Compétences et Technologies",
      subtitle: "Technologies et outils avec lesquels je travaille",
      categories: {
        programming: "Langages de Programmation",
        frontend: "Frameworks et Bibliothèques Frontend",
        backend: "Backend et Outils",
        uiStyling: "UI et Stylisation",
        testing: "Tests et Contrôle de Version",
      },
    },
    experience: {
      title: "Expérience Professionnelle",
      subtitle: "Mon parcours professionnel et contributions clés",
      present: "Présent",
      keyAchievements: "Réalisations Clés",
      technologiesUsed: "Technologies Utilisées",
    },
    contact: {
      title: "Entrer en Contact",
      subtitle: "Discutons de votre prochain projet ou opportunité",
      form: {
        title: "Envoyer un Message",
        description: "Remplissez le formulaire ci-dessous et je vous répondrai bientôt",
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        send: "Envoyer le Message",
        sending: "Envoi en cours...",
        success: "Message envoyé avec succès!",
      },
      info: {
        title: "Informations de Contact",
        email: "Email",
        phone: "Téléphone",
        location: "Localisation",
      },
      social: {
        title: "Connectez-vous avec Moi",
      },
      actions: {
        title: "Actions Rapides",
        email: "Envoyer un Email",
        call: "Appeler Maintenant",
      },
    },
    footer: {
      rights: "Tous droits réservés.",
      builtWith: "Construit avec Next.js et TailwindCSS",
      description:
        "Développeur Frontend passionné par la création d'expériences utilisateur exceptionnelles avec les technologies web modernes.",
      quickLinks: "Liens Rapides",
      contact: "Contact",
      backToTop: "Retour en haut",
    },
  },
  es: {
    navigation: {
      about: "Acerca de",
      projects: "Proyectos",
      skills: "Habilidades",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Maged Maher Hossney",
      title: "Desarrollador Frontend",
      description:
        "Un desarrollador Frontend dedicado con amplia experiencia en la construcción de aplicaciones web escalables y centradas en el usuario. Me especializo en React.js, Next.js, Redux y frameworks UI modernos.",
      location: "Alejandría, Egipto",
      cta: "Ver Mi Trabajo",
      downloadCV: "Descargar CV",
    },
    about: {
      title: "Acerca de Mí",
      description:
        "Soy un desarrollador Frontend dedicado con amplia experiencia en la construcción de aplicaciones web escalables y centradas en el usuario. Mi fortaleza radica en traducir las necesidades del negocio en interfaces limpias, responsivas y de alto rendimiento.",
      passion:
        "Soy apasionado por la resolución de problemas, la optimización del rendimiento y la creación de productos digitales impactantes.",
      profilePhoto: "Foto de Perfil",
      education: {
        title: "Educación",
        degree: "Licenciatura en Ciencias de la Computación",
        institution: "Facultad de Ciencias, Universidad de Alejandría",
        period: "2017 – 2021",
        gpa: "Promedio: 3.1 / 4",
      },
      languages: {
        title: "Idiomas",
        list: [
          { name: "Árabe", level: "Nativo" },
          { name: "Inglés", level: "B2" },
          { name: "Francés", level: "A2" },
          { name: "Español", level: "A1" },
        ],
      },
    },
    projects: {
      title: "Proyectos",
      subtitle: "Una muestra de mi trabajo reciente y contribuciones",
      workProjects: {
        title: "Proyectos Laborales",
        subtitle: "Proyectos profesionales desarrollados en Tech Hive",
      },
      personalProjects: {
        title: "Proyectos Personales",
        subtitle: "Proyectos paralelos y experimentos de aprendizaje",
      },
      viewLive: "Ver en Vivo",
      viewCode: "Ver Código",
      notDeployed: "No Desplegado",
    },
    skills: {
      title: "Habilidades y Tecnologías",
      subtitle: "Tecnologías y herramientas con las que trabajo",
      categories: {
        programming: "Lenguajes de Programación",
        frontend: "Frameworks y Librerías Frontend",
        backend: "Backend y Herramientas",
        uiStyling: "UI y Estilización",
        testing: "Testing y Control de Versiones",
      },
    },
    experience: {
      title: "Experiencia Laboral",
      subtitle: "Mi trayectoria profesional y contribuciones clave",
      present: "Presente",
      keyAchievements: "Logros Clave",
      technologiesUsed: "Tecnologías Utilizadas",
    },
    contact: {
      title: "Ponerse en Contacto",
      subtitle: "Hablemos de tu próximo proyecto u oportunidad",
      form: {
        title: "Enviar Mensaje",
        description: "Completa el formulario a continuación y te responderé pronto",
        name: "Tu Nombre",
        email: "Tu Email",
        message: "Tu Mensaje",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado exitosamente!",
      },
      info: {
        title: "Información de Contacto",
        email: "Email",
        phone: "Teléfono",
        location: "Ubicación",
      },
      social: {
        title: "Conéctate Conmigo",
      },
      actions: {
        title: "Acciones Rápidas",
        email: "Enviar Email",
        call: "Llamar Ahora",
      },
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Next.js y TailwindCSS",
      description:
        "Desarrollador Frontend apasionado por crear experiencias de usuario excepcionales con tecnologías web modernas.",
      quickLinks: "Enlaces Rápidos",
      contact: "Contacto",
      backToTop: "Volver arriba",
    },
  },
}

export const languages = [
  { code: "en" as Language, name: "English", flag: "🇺🇸" },
  { code: "ar" as Language, name: "العربية", flag: "🇪🇬" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
  { code: "es" as Language, name: "Español", flag: "🇪🇸" },
]

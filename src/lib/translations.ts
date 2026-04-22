export type Lang = "es" | "en";

export const translations = {
  es: {
    hero: {
      name: "Marco Lee",
      title: "Full Stack Developer & Ingeniero Industrial",
      bio: "Me especializo en crear aplicaciones web limpias, escalables y bien pensadas. Con 12+ años de experiencia, combino lo técnico con la visión de negocio para construir productos que generan resultados.",
      contact: "Puedes contactarme aquí:",
    },
    github: {
      title: "Contribuciones en GitHub",
    },
    experience: {
      title: "Experiencia",
      present: "Presente",
      viewMore: "Ver más",
      viewLess: "Ver menos",
      jobs: [
        {
          title: "Coordinador de Tecnología y Desarrollo",
          company: "Empresa Actual",
          period: "2023 — Presente",
          description: "Lidero el desarrollo de soluciones tecnológicas, gestionando equipos y arquitectura de software. Stack principal: React, Node.js, PostgreSQL. Trabajo 100% remoto.",
        },
        {
          title: "Full Stack Developer & Freelance",
          company: "Independiente",
          period: "2020 — Presente",
          description: "Desarrollo de proyectos propios y para clientes. Más de 8 propiedades web generando ingresos pasivos mediante AdSense, cursos online y servicios freelance.",
        },
        {
          title: "Propietario",
          company: "Single's Bar",
          period: "2019 — Presente",
          description: "50% propietario de bar en Puerto Barrios, Guatemala. Gestión operativa, marketing digital y desarrollo de la web singlesbar.net con Astro y Tailwind.",
        },
      ],
    },
    projects: {
      title: "Proyectos",
      viewDetails: "Ver detalles",
      hideDetails: "Ocultar detalles",
      github: "Github",
      demo: "Demo",
      items: [
        {
          name: "agente-ia.dev",
          description: "Plataforma de cursos sobre agentes de IA. Construida con Next.js, Turso DB y Lemon Squeezy para pagos.",
          tags: ["Next.js", "Turso", "Lemon Squeezy"],
          github: null,
          demo: "https://agente-ia.dev",
        },
        {
          name: "gaminglab.dev",
          description: "Portal de juegos browser con soporte para 6 idiomas. Monetizado con AdSense y validado para anuncios.",
          tags: ["Next.js", "AdSense", "i18n"],
          github: null,
          demo: "https://gaminglab.dev",
        },
        {
          name: "slogan.website",
          description: "Marketing hub enfocado en contenido de alto CPC. Estrategia de contenido para maximizar ingresos por publicidad.",
          tags: ["Next.js", "SEO", "Content"],
          github: null,
          demo: "https://slogan.website",
        },
        {
          name: "guate365.org",
          description: "Portal informativo sobre trámites en Guatemala. WordPress con categoría de trámites y múltiples autores.",
          tags: ["WordPress", "PHP", "AdSense"],
          github: null,
          demo: "https://guate365.org",
        },
        {
          name: "calcufast.com",
          description: "Suite de calculadoras online. Construido con Next.js para rendimiento y SEO.",
          tags: ["Next.js", "Calculadoras", "SEO"],
          github: null,
          demo: "https://calcufast.com",
        },
        {
          name: "hotelescentroamerica.com",
          description: "Directorio de 70+ hoteles en 7 países de Centroamérica. Sistema de búsqueda y filtros.",
          tags: ["Next.js", "Directorio", "SEO"],
          github: null,
          demo: "https://hotelescentroamerica.com",
        },
        {
          name: "sababaresort.com",
          description: "Web oficial del resort. WordPress con diseño personalizado y sistema de reservas.",
          tags: ["WordPress", "PHP", "Hotel"],
          github: null,
          demo: "https://sababaresort.com",
        },
        {
          name: "singlesbar.net",
          description: "Web del Single's Bar. Construida con Astro y Tailwind CSS para máxima velocidad.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
        },
      ],
    },
    skills: {
      title: "Habilidades y Herramientas",
    },
    footer: {
      builtWith: "Construido con Next.js + Tailwind",
      copyright: "© 2026 Marco Lee",
    },
  },
  en: {
    hero: {
      name: "Marco Lee",
      title: "Full Stack Developer & Industrial Engineer",
      bio: "I specialize in creating clean, scalable, and well-thought-out web applications. With 12+ years of experience, I combine technical expertise with business vision to build products that deliver results.",
      contact: "You can reach me here:",
    },
    github: {
      title: "GitHub Contributions",
    },
    experience: {
      title: "Experience",
      present: "Present",
      viewMore: "View more",
      viewLess: "View less",
      jobs: [
        {
          title: "Technology & Development Coordinator",
          company: "Current Company",
          period: "2023 — Present",
          description: "Leading technology solution development, managing teams and software architecture. Main stack: React, Node.js, PostgreSQL. 100% remote work.",
        },
        {
          title: "Full Stack Developer & Freelance",
          company: "Independent",
          period: "2020 — Present",
          description: "Development of personal projects and client work. 8+ web properties generating passive income through AdSense, online courses, and freelance services.",
        },
        {
          title: "Owner",
          company: "Single's Bar",
          period: "2019 — Present",
          description: "50% owner of a bar in Puerto Barrios, Guatemala. Operational management, digital marketing, and development of singlesbar.net with Astro and Tailwind.",
        },
      ],
    },
    projects: {
      title: "Projects",
      viewDetails: "View details",
      hideDetails: "Hide details",
      github: "Github",
      demo: "Demo",
      items: [
        {
          name: "agente-ia.dev",
          description: "AI agents courses platform. Built with Next.js, Turso DB, and Lemon Squeezy for payments.",
          tags: ["Next.js", "Turso", "Lemon Squeezy"],
          github: null,
          demo: "https://agente-ia.dev",
        },
        {
          name: "gaminglab.dev",
          description: "Browser games portal with 6 language support. Monetized with AdSense and validated for ads.",
          tags: ["Next.js", "AdSense", "i18n"],
          github: null,
          demo: "https://gaminglab.dev",
        },
        {
          name: "slogan.website",
          description: "Marketing hub focused on high CPC content. Content strategy to maximize ad revenue.",
          tags: ["Next.js", "SEO", "Content"],
          github: null,
          demo: "https://slogan.website",
        },
        {
          name: "guate365.org",
          description: "Informational portal about procedures in Guatemala. WordPress with procedures category and multiple authors.",
          tags: ["WordPress", "PHP", "AdSense"],
          github: null,
          demo: "https://guate365.org",
        },
        {
          name: "calcufast.com",
          description: "Online calculators suite. Built with Next.js for performance and SEO.",
          tags: ["Next.js", "Calculators", "SEO"],
          github: null,
          demo: "https://calcufast.com",
        },
        {
          name: "hotelescentroamerica.com",
          description: "Directory of 70+ hotels in 7 Central American countries. Search and filter system.",
          tags: ["Next.js", "Directory", "SEO"],
          github: null,
          demo: "https://hotelescentroamerica.com",
        },
        {
          name: "sababaresort.com",
          description: "Official resort website. WordPress with custom design and booking system.",
          tags: ["WordPress", "PHP", "Hotel"],
          github: null,
          demo: "https://sababaresort.com",
        },
        {
          name: "singlesbar.net",
          description: "Single's Bar website. Built with Astro and Tailwind CSS for maximum speed.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
        },
      ],
    },
    skills: {
      title: "Skills & Tools",
    },
    footer: {
      builtWith: "Built with Next.js + Tailwind",
      copyright: "© 2026 Marco Lee",
    },
  },
};

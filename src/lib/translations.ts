export type Lang = "en" | "es";

export const translations = {
  en: {
    hero: {
      name: "Marco Lee",
      title: "Senior Full-Stack Engineer",
      stack: "Laravel · React/Next.js · WordPress · Applied AI",
      bio: "Senior full-stack engineer with 12+ years shipping production web platforms — from high-traffic WordPress portals serving millions of users across Latin America to modern Laravel and React/Next.js products. I lead teams, own architecture end to end, and build applied AI features (agents, RAG) that solve real business problems.",
      location: "Guatemala (UTC-6) · English C1 · Remote",
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
          title: "Technology & Development Coordinator / Tech Lead",
          company: "Guatemala.com",
          period: "Jun 2020 — Mar 2026",
          description:
            "Led architecture and delivery for high-traffic content platforms (5M+ monthly users) on auto-scalable AWS. Migration toward headless WordPress + NestJS + Next.js, ad systems, performance, and mentoring. Applied AI-assisted engineering workflows across the team. Fully remote.",
        },
        {
          title: "Full-Stack Developer",
          company: "Guatemala.com",
          period: "Sep 2015 — Jun 2020",
          description:
            "Built and maintained React/JavaScript frontends and Laravel REST APIs for multi-brand media properties. Web + hybrid mobile delivery, high-traffic LAMP/WordPress systems, and continuous product shipping under agency/media scale.",
        },
        {
          title: "Founder & Product Engineer",
          company: "Independent Products",
          period: "2018 — Present",
          description:
            "Design, build, and operate my own portfolio of web products — calcufast.com, gaminglab.dev, singlesbar.net, agente-ia.dev — covering SEO tools, browser games (6-language i18n), and applied AI systems. Full lifecycle: Next.js/Laravel, AdSense monetization, AWS/Vercel.",
        },
        {
          title: "Web Developer",
          company: "XYZ Network Inc",
          period: "Jan 2014 — Sep 2015",
          description:
            "High-traffic LAMP/WordPress delivery for brands including Star Media and related media properties. Frontend and backend feature work under production load.",
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      viewDetails: "View details",
      hideDetails: "Hide details",
      github: "Github",
      demo: "Live site",
      items: [
        {
          name: "calcufast.com",
          description:
            "Suite of fast, SEO-optimized online calculators. Built with Next.js for performance and organic search growth.",
          tags: ["Next.js", "TypeScript", "SEO"],
          github: null,
          demo: "https://calcufast.com",
          logo: null,
        },
        {
          name: "gaminglab.dev",
          description:
            "Browser games portal with 6-language internationalization. Monetized with AdSense and validated for ads.",
          tags: ["Next.js", "i18n", "AdSense"],
          github: null,
          demo: "https://gaminglab.dev",
          logo: null,
        },
        {
          name: "singlesbar.net",
          description:
            "Website for Single's Bar, Puerto Barrios. Built with Astro and Tailwind CSS for maximum speed.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
          logo: null,
        },
        {
          name: "agente-ia.dev",
          description:
            "AI agents course platform. Built with Next.js, Turso DB, and Lemon Squeezy for payments.",
          tags: ["Next.js", "Turso", "AI"],
          github: null,
          demo: "https://agente-ia.dev",
          logo: null,
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
  es: {
    hero: {
      name: "Marco Lee",
      title: "Ingeniero Full-Stack Senior",
      stack: "Laravel · React/Next.js · WordPress · IA Aplicada",
      bio: "Ingeniero full-stack senior con más de 12 años construyendo plataformas web en producción — desde portales WordPress de alto tráfico con millones de usuarios en Latinoamérica hasta productos modernos con Laravel y React/Next.js. Lidero equipos, soy dueño de la arquitectura de punta a punta y construyo funciones de IA aplicada (agentes, RAG) que resuelven problemas reales de negocio.",
      location: "Guatemala (UTC-6) · Inglés C1 · Remoto",
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
          title: "Coordinador de Tecnología y Desarrollo / Tech Lead",
          company: "Guatemala.com",
          period: "Jun 2020 — Mar 2026",
          description:
            "Lideré arquitectura y entrega de plataformas de contenido de alto tráfico (5M+ usuarios/mes) en AWS auto-escalable. Migración hacia WordPress headless + NestJS + Next.js, sistemas de ads, rendimiento y mentoring. Flujos de ingeniería asistidos por IA. 100% remoto.",
        },
        {
          title: "Desarrollador Full-Stack",
          company: "Guatemala.com",
          period: "Sep 2015 — Jun 2020",
          description:
            "Frontends React/JavaScript y APIs REST con Laravel para propiedades multi-marca. Entrega web + móvil híbrido, sistemas LAMP/WordPress de alto tráfico y shipping continuo a escala media.",
        },
        {
          title: "Fundador e Ingeniero de Producto",
          company: "Productos Independientes",
          period: "2018 — Presente",
          description:
            "Diseño, construyo y opero mi portafolio de productos web — calcufast.com, gaminglab.dev, singlesbar.net, agente-ia.dev — con SEO, juegos browser (i18n 6 idiomas) y sistemas de IA aplicada. Ciclo completo: Next.js/Laravel, AdSense, AWS/Vercel.",
        },
        {
          title: "Desarrollador Web",
          company: "XYZ Network Inc",
          period: "Jan 2014 — Sep 2015",
          description:
            "Entrega LAMP/WordPress de alto tráfico para marcas como Star Media y propiedades relacionadas. Frontend y backend en producción.",
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      viewDetails: "Ver detalles",
      hideDetails: "Ocultar detalles",
      github: "Github",
      demo: "Sitio en vivo",
      items: [
        {
          name: "calcufast.com",
          description:
            "Suite de calculadoras online rápidas y optimizadas para SEO. Construida con Next.js para rendimiento y crecimiento orgánico.",
          tags: ["Next.js", "TypeScript", "SEO"],
          github: null,
          demo: "https://calcufast.com",
          logo: null,
        },
        {
          name: "gaminglab.dev",
          description:
            "Portal de juegos de navegador con internacionalización en 6 idiomas. Monetizado con AdSense y validado para anuncios.",
          tags: ["Next.js", "i18n", "AdSense"],
          github: null,
          demo: "https://gaminglab.dev",
          logo: null,
        },
        {
          name: "singlesbar.net",
          description:
            "Sitio web del Single's Bar, Puerto Barrios. Construido con Astro y Tailwind CSS para máxima velocidad.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
          logo: null,
        },
        {
          name: "agente-ia.dev",
          description:
            "Plataforma de cursos sobre agentes de IA. Construida con Next.js, Turso DB y Lemon Squeezy para pagos.",
          tags: ["Next.js", "Turso", "IA"],
          github: null,
          demo: "https://agente-ia.dev",
          logo: null,
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
};

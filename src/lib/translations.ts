export type Lang = "en" | "es";

export const translations = {
  en: {
    nav: {
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      name: "Marco Lee",
      title: "Senior Full-Stack Engineer",
      stack: "Laravel · React/Next.js · WordPress · Applied AI",
      availability: "Available for senior remote roles",
      bio: "Senior full-stack engineer with 12+ years shipping production web platforms — from high-traffic WordPress portals serving millions of users across Latin America to modern Laravel and React/Next.js products. I lead teams, own architecture end to end, and build applied AI features (agents, RAG) that solve real business problems.",
      location: "Guatemala (UTC-6) · English C1 · Remote",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View LinkedIn",
      contact: "You can reach me here:",
      copied: "Copied",
      stats: [
        { value: 12, suffix: "+", label: "Years of experience" },
        { value: 5, suffix: "M+", label: "Monthly users served" },
        { value: 4, suffix: "", label: "Products built & operated" },
        { value: 6, suffix: "", label: "Languages shipped (i18n)" },
      ],
    },
    github: {
      title: "GitHub Contributions",
      subtitle: "Consistency compounds — a snapshot of my open activity.",
    },
    experience: {
      title: "Experience",
      subtitle: "12+ years of shipping, leading, and owning production systems.",
      present: "Present",
      jobs: [
        {
          title: "Technology & Development Coordinator / Tech Lead",
          company: "Guatemala.com",
          period: "Jun 2020 — Mar 2026",
          description:
            "Led architecture and delivery for high-traffic content platforms (5M+ monthly users) on auto-scalable AWS. Migration toward headless WordPress + NestJS + Next.js, ad systems, performance, and mentoring. Applied AI-assisted engineering workflows across the team. Fully remote.",
          tags: ["AWS", "Headless WordPress", "NestJS", "Next.js", "Team Leadership"],
        },
        {
          title: "Full-Stack Developer",
          company: "Guatemala.com",
          period: "Sep 2015 — Jun 2020",
          description:
            "Built and maintained React/JavaScript frontends and Laravel REST APIs for multi-brand media properties. Web + hybrid mobile delivery, high-traffic LAMP/WordPress systems, and continuous product shipping under agency/media scale.",
          tags: ["Laravel", "React", "REST APIs", "Hybrid Mobile"],
        },
        {
          title: "Founder & Product Engineer",
          company: "Independent Products",
          period: "2018 — Present",
          description:
            "Design, build, and operate my own portfolio of web products — calcufast.com, gaminglab.dev, singlesbar.net, agente-ia.dev — covering SEO tools, browser games (6-language i18n), and applied AI systems. Full lifecycle: Next.js/Laravel, AdSense monetization, AWS/Vercel.",
          tags: ["Next.js", "SEO", "AdSense", "Applied AI"],
        },
        {
          title: "Web Developer",
          company: "XYZ Network Inc",
          period: "Jan 2014 — Sep 2015",
          description:
            "High-traffic LAMP/WordPress delivery for brands including Star Media and related media properties. Frontend and backend feature work under production load.",
          tags: ["LAMP", "WordPress", "High Traffic"],
        },
      ],
    },
    projects: {
      title: "Featured Projects",
      subtitle: "Products I design, build, ship, and operate end to end.",
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
      subtitle: "The stack I use to take products from idea to production.",
      categories: {
        frontend: "Frontend",
        backend: "Backend & APIs",
        mobile: "Mobile",
        ai: "Applied AI",
        infra: "Cloud, CMS & Tooling",
      },
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let's build something that ships.",
      subtitle:
        "I'm open to senior full-stack and tech lead roles — remote, English or Spanish. If you need someone who owns architecture end to end and delivers under real traffic, let's talk.",
      emailButton: "marco@solutionslee.com",
      copied: "Copied to clipboard",
      linkedin: "Or connect on LinkedIn",
      note: "Based in Guatemala (UTC-6) — full overlap with US time zones.",
    },
    footer: {
      builtWith: "Built with Next.js + Tailwind",
      copyright: "© 2026 Marco Lee",
      backToTop: "Back to top",
    },
  },
  es: {
    nav: {
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      name: "Marco Lee",
      title: "Ingeniero Full-Stack Senior",
      stack: "Laravel · React/Next.js · WordPress · IA Aplicada",
      availability: "Disponible para roles senior remotos",
      bio: "Ingeniero full-stack senior con más de 12 años construyendo plataformas web en producción — desde portales WordPress de alto tráfico con millones de usuarios en Latinoamérica hasta productos modernos con Laravel y React/Next.js. Lidero equipos, soy dueño de la arquitectura de punta a punta y construyo funciones de IA aplicada (agentes, RAG) que resuelven problemas reales de negocio.",
      location: "Guatemala (UTC-6) · Inglés C1 · Remoto",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver LinkedIn",
      contact: "Puedes contactarme aquí:",
      copied: "Copiado",
      stats: [
        { value: 12, suffix: "+", label: "Años de experiencia" },
        { value: 5, suffix: "M+", label: "Usuarios mensuales servidos" },
        { value: 4, suffix: "", label: "Productos propios en producción" },
        { value: 6, suffix: "", label: "Idiomas publicados (i18n)" },
      ],
    },
    github: {
      title: "Contribuciones en GitHub",
      subtitle: "La consistencia se acumula — un vistazo a mi actividad pública.",
    },
    experience: {
      title: "Experiencia",
      subtitle: "Más de 12 años entregando, liderando y operando sistemas en producción.",
      present: "Presente",
      jobs: [
        {
          title: "Coordinador de Tecnología y Desarrollo / Tech Lead",
          company: "Guatemala.com",
          period: "Jun 2020 — Mar 2026",
          description:
            "Lideré arquitectura y entrega de plataformas de contenido de alto tráfico (5M+ usuarios/mes) en AWS auto-escalable. Migración hacia WordPress headless + NestJS + Next.js, sistemas de ads, rendimiento y mentoring. Flujos de ingeniería asistidos por IA. 100% remoto.",
          tags: ["AWS", "WordPress Headless", "NestJS", "Next.js", "Liderazgo"],
        },
        {
          title: "Desarrollador Full-Stack",
          company: "Guatemala.com",
          period: "Sep 2015 — Jun 2020",
          description:
            "Frontends React/JavaScript y APIs REST con Laravel para propiedades multi-marca. Entrega web + móvil híbrido, sistemas LAMP/WordPress de alto tráfico y shipping continuo a escala media.",
          tags: ["Laravel", "React", "APIs REST", "Móvil híbrido"],
        },
        {
          title: "Fundador e Ingeniero de Producto",
          company: "Productos Independientes",
          period: "2018 — Presente",
          description:
            "Diseño, construyo y opero mi portafolio de productos web — calcufast.com, gaminglab.dev, singlesbar.net, agente-ia.dev — con SEO, juegos browser (i18n 6 idiomas) y sistemas de IA aplicada. Ciclo completo: Next.js/Laravel, AdSense, AWS/Vercel.",
          tags: ["Next.js", "SEO", "AdSense", "IA Aplicada"],
        },
        {
          title: "Desarrollador Web",
          company: "XYZ Network Inc",
          period: "Ene 2014 — Sep 2015",
          description:
            "Entrega LAMP/WordPress de alto tráfico para marcas como Star Media y propiedades relacionadas. Frontend y backend en producción.",
          tags: ["LAMP", "WordPress", "Alto tráfico"],
        },
      ],
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Productos que diseño, construyo, publico y opero de punta a punta.",
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
      subtitle: "El stack con el que llevo productos de la idea a producción.",
      categories: {
        frontend: "Frontend",
        backend: "Backend y APIs",
        mobile: "Móvil",
        ai: "IA Aplicada",
        infra: "Cloud, CMS y Herramientas",
      },
    },
    contactSection: {
      eyebrow: "Contacto",
      title: "Construyamos algo que llegue a producción.",
      subtitle:
        "Estoy abierto a roles senior full-stack y tech lead — remotos, en inglés o español. Si necesitas a alguien que sea dueño de la arquitectura de punta a punta y entregue bajo tráfico real, hablemos.",
      emailButton: "marco@solutionslee.com",
      copied: "Copiado al portapapeles",
      linkedin: "O conecta en LinkedIn",
      note: "Desde Guatemala (UTC-6) — solapamiento completo con zonas horarias de EE. UU.",
    },
    footer: {
      builtWith: "Construido con Next.js + Tailwind",
      copyright: "© 2026 Marco Lee",
      backToTop: "Volver arriba",
    },
  },
};

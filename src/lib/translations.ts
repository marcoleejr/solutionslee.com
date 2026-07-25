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
      tagline:
        "I build and run web platforms serving 5M+ users a month — and lead the teams behind them.",
      bio: "12+ years shipping production systems across Latin America — from high-traffic media portals to modern Laravel and React/Next.js products. I own architecture end to end, mentor engineers, and build applied AI features (agents, RAG) that solve real business problems.",
      location: "Guatemala (UTC-6) · English C1 · Remote",
      ctaPrimary: "Get in touch",
      ctaSecondary: "View LinkedIn",
      contact: "You can reach me here:",
      copied: "Copied",
      emailLabel: "Copy email",
      stats: [
        { value: 12, suffix: "+", label: "Years of experience" },
        { value: 5, suffix: "M+", label: "Monthly users served" },
        { value: 4, suffix: "", label: "Products built & operated" },
        { value: 100, suffix: "%", label: "Remote since 2020" },
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
          companyUrl: "https://www.guatemala.com",
          period: "Jun 2020 — Mar 2026",
          achievements: [
            "Scaled multi-brand content platforms to 5M+ monthly users on auto-scaling AWS.",
            "Drove the migration from monolithic WordPress to headless WordPress + NestJS + Next.js.",
            "Owned ad systems, performance, and architecture across the network.",
            "Mentored the engineering team and introduced AI-assisted development workflows — fully remote.",
          ],
          tags: ["AWS", "Headless WordPress", "NestJS", "Next.js", "Team Leadership"],
        },
        {
          title: "Full-Stack Developer",
          company: "Guatemala.com",
          companyUrl: "https://www.guatemala.com",
          period: "Sep 2015 — Jun 2020",
          achievements: [
            "Built React/JavaScript frontends and Laravel REST APIs for multi-brand media properties.",
            "Shipped web + hybrid mobile products on high-traffic LAMP/WordPress systems.",
            "Delivered continuously at media scale for five years.",
          ],
          tags: ["Laravel", "React", "REST APIs", "Hybrid Mobile"],
        },
        {
          title: "Founder & Product Engineer",
          company: "Independent Products",
          companyUrl: null,
          period: "2018 — Present",
          achievements: [
            "Design, build, and operate 4 products end to end — SEO tools, browser games, and applied AI systems.",
            "Full lifecycle ownership: Next.js/Laravel, SEO, AdSense monetization, AWS/Vercel.",
            "Shipped a games portal in 6 languages and a paid AI agents course platform.",
          ],
          tags: ["Next.js", "SEO", "AdSense", "Applied AI"],
        },
        {
          title: "Web Developer",
          company: "XYZ Network Inc",
          companyUrl: null,
          period: "Jan 2014 — Sep 2015",
          achievements: [
            "High-traffic LAMP/WordPress delivery for brands including Star Media.",
            "Frontend and backend feature work under production load.",
          ],
          tags: ["LAMP", "WordPress", "High Traffic"],
        },
      ],
    },
    caseStudy: {
      title: "Case Study",
      subtitle: "How I approach scale — one real example.",
      heading: "Scaling Guatemala.com to 5M+ monthly users",
      blocks: [
        {
          label: "The challenge",
          text: "A multi-brand media network running on legacy monolithic WordPress, under heavy and spiky Latin American traffic — with ad revenue directly tied to speed and uptime.",
        },
        {
          label: "What I did",
          text: "Led the re-architecture to headless WordPress + NestJS APIs + Next.js frontends on auto-scaling AWS. Owned ad systems and performance, planned the migration path, and mentored the team while introducing AI-assisted engineering workflows.",
        },
        {
          label: "The outcome",
          text: "A modern platform serving 5M+ monthly users, faster pages that protect ad revenue, and a stack a fully remote team ships on with confidence.",
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
          name: "agente-ia.dev",
          description:
            "AI agents course platform. Built with Next.js, Turso DB, and Lemon Squeezy for payments.",
          impact: "0→1 paid course platform, built and operated solo.",
          tags: ["Next.js", "Turso", "AI"],
          github: null,
          demo: "https://agente-ia.dev",
          logo: null,
          image: "/projects/agente-ia.jpg",
        },
        {
          name: "calcufast.com",
          description:
            "Suite of fast, SEO-optimized online calculators. Built with Next.js for performance and organic search growth.",
          impact: "SEO-first finance tools for Guatemala & Central America.",
          tags: ["Next.js", "TypeScript", "SEO"],
          github: null,
          demo: "https://calcufast.com",
          logo: null,
          image: "/projects/calcufast.jpg",
        },
        {
          name: "gaminglab.dev",
          description:
            "Browser games portal with 6-language internationalization. Monetized with AdSense and validated for ads.",
          impact: "80+ games in 6 languages, AdSense-approved.",
          tags: ["Next.js", "i18n", "AdSense"],
          github: null,
          demo: "https://gaminglab.dev",
          logo: null,
          image: "/projects/gaminglab.jpg",
        },
        {
          name: "singlesbar.net",
          description:
            "Website for Single's Bar, Puerto Barrios. Built with Astro and Tailwind CSS for maximum speed.",
          impact: "Real client work — WhatsApp bookings for a live venue.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
          logo: null,
          image: "/projects/singlesbar.jpg",
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
    hire: {
      title: "What you get when you hire me",
      subtitle: "Beyond the stack — how I actually add value.",
      items: [
        {
          title: "End-to-end ownership",
          description:
            "From architecture to production: I design it, build it, ship it, and operate it. You get outcomes, not tickets.",
        },
        {
          title: "Team leadership",
          description:
            "Years leading and mentoring remote engineering teams — clear async communication in English (C1) or Spanish.",
        },
        {
          title: "Applied AI, for real",
          description:
            "Agents and RAG shipped in production products and daily team workflows — not just demos.",
        },
      ],
    },
    contactSection: {
      eyebrow: "Contact",
      title: "Let's build something that ships.",
      subtitle:
        "I'm open to senior full-stack and tech lead roles — remote, English or Spanish. If you need someone who owns architecture end to end and delivers under real traffic, let's talk.",
      emailButton: "Copy my email",
      copied: "Copied to clipboard",
      linkedin: "Or connect on LinkedIn",
      reply: "I reply within 24 hours.",
      note: "Based in Guatemala (UTC-6) — full overlap with US time zones.",
    },
    notFound: {
      title: "Page not found",
      message: "The page you're looking for doesn't exist or was moved.",
      back: "Back to home",
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
      tagline:
        "Construyo y opero plataformas web que sirven a 5M+ de usuarios al mes — y lidero los equipos detrás de ellas.",
      bio: "Más de 12 años entregando sistemas en producción en Latinoamérica — desde portales de medios de alto tráfico hasta productos modernos con Laravel y React/Next.js. Soy dueño de la arquitectura de punta a punta, hago mentoring a ingenieros y construyo funciones de IA aplicada (agentes, RAG) que resuelven problemas reales de negocio.",
      location: "Guatemala (UTC-6) · Inglés C1 · Remoto",
      ctaPrimary: "Contáctame",
      ctaSecondary: "Ver LinkedIn",
      contact: "Puedes contactarme aquí:",
      copied: "Copiado",
      emailLabel: "Copiar correo",
      stats: [
        { value: 12, suffix: "+", label: "Años de experiencia" },
        { value: 5, suffix: "M+", label: "Usuarios mensuales servidos" },
        { value: 4, suffix: "", label: "Productos propios en producción" },
        { value: 100, suffix: "%", label: "Remoto desde 2020" },
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
          companyUrl: "https://www.guatemala.com",
          period: "Jun 2020 — Mar 2026",
          achievements: [
            "Escalé plataformas de contenido multi-marca a 5M+ usuarios mensuales en AWS auto-escalable.",
            "Lideré la migración de WordPress monolítico a WordPress headless + NestJS + Next.js.",
            "Fui dueño de los sistemas de ads, el rendimiento y la arquitectura de toda la red.",
            "Hice mentoring al equipo e introduje flujos de desarrollo asistidos por IA — 100% remoto.",
          ],
          tags: ["AWS", "WordPress Headless", "NestJS", "Next.js", "Liderazgo"],
        },
        {
          title: "Desarrollador Full-Stack",
          company: "Guatemala.com",
          companyUrl: "https://www.guatemala.com",
          period: "Sep 2015 — Jun 2020",
          achievements: [
            "Construí frontends React/JavaScript y APIs REST con Laravel para propiedades multi-marca.",
            "Entregué productos web + móvil híbrido sobre sistemas LAMP/WordPress de alto tráfico.",
            "Shipping continuo a escala de medios durante cinco años.",
          ],
          tags: ["Laravel", "React", "APIs REST", "Móvil híbrido"],
        },
        {
          title: "Fundador e Ingeniero de Producto",
          company: "Productos Independientes",
          companyUrl: null,
          period: "2018 — Presente",
          achievements: [
            "Diseño, construyo y opero 4 productos de punta a punta — herramientas SEO, juegos de navegador y sistemas de IA aplicada.",
            "Ownership del ciclo completo: Next.js/Laravel, SEO, monetización AdSense, AWS/Vercel.",
            "Publiqué un portal de juegos en 6 idiomas y una plataforma de cursos de agentes de IA de pago.",
          ],
          tags: ["Next.js", "SEO", "AdSense", "IA Aplicada"],
        },
        {
          title: "Desarrollador Web",
          company: "XYZ Network Inc",
          companyUrl: null,
          period: "Ene 2014 — Sep 2015",
          achievements: [
            "Entrega LAMP/WordPress de alto tráfico para marcas como Star Media.",
            "Frontend y backend en producción bajo carga real.",
          ],
          tags: ["LAMP", "WordPress", "Alto tráfico"],
        },
      ],
    },
    caseStudy: {
      title: "Caso de Estudio",
      subtitle: "Cómo abordo la escala — un ejemplo real.",
      heading: "Escalando Guatemala.com a 5M+ usuarios mensuales",
      blocks: [
        {
          label: "El reto",
          text: "Una red de medios multi-marca sobre WordPress monolítico legacy, con tráfico latinoamericano alto y con picos — y los ingresos por publicidad atados directamente a la velocidad y el uptime.",
        },
        {
          label: "Qué hice",
          text: "Lideré la re-arquitectura hacia WordPress headless + APIs NestJS + frontends Next.js en AWS auto-escalable. Fui dueño de los sistemas de ads y el rendimiento, planifiqué la ruta de migración e hice mentoring al equipo mientras introducía flujos de ingeniería asistidos por IA.",
        },
        {
          label: "El resultado",
          text: "Una plataforma moderna que sirve a 5M+ usuarios mensuales, páginas más rápidas que protegen los ingresos por ads y un stack sobre el que un equipo 100% remoto entrega con confianza.",
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
          name: "agente-ia.dev",
          description:
            "Plataforma de cursos sobre agentes de IA. Construida con Next.js, Turso DB y Lemon Squeezy para pagos.",
          impact: "Plataforma de cursos de pago, de 0→1 en solitario.",
          tags: ["Next.js", "Turso", "IA"],
          github: null,
          demo: "https://agente-ia.dev",
          logo: null,
          image: "/projects/agente-ia.jpg",
        },
        {
          name: "calcufast.com",
          description:
            "Suite de calculadoras online rápidas y optimizadas para SEO. Construida con Next.js para rendimiento y crecimiento orgánico.",
          impact: "Herramientas financieras SEO-first para Guatemala y Centroamérica.",
          tags: ["Next.js", "TypeScript", "SEO"],
          github: null,
          demo: "https://calcufast.com",
          logo: null,
          image: "/projects/calcufast.jpg",
        },
        {
          name: "gaminglab.dev",
          description:
            "Portal de juegos de navegador con internacionalización en 6 idiomas. Monetizado con AdSense y validado para anuncios.",
          impact: "80+ juegos en 6 idiomas, aprobado por AdSense.",
          tags: ["Next.js", "i18n", "AdSense"],
          github: null,
          demo: "https://gaminglab.dev",
          logo: null,
          image: "/projects/gaminglab.jpg",
        },
        {
          name: "singlesbar.net",
          description:
            "Sitio web del Single's Bar, Puerto Barrios. Construido con Astro y Tailwind CSS para máxima velocidad.",
          impact: "Trabajo para cliente real — reservas por WhatsApp para un local en operación.",
          tags: ["Astro", "Tailwind"],
          github: null,
          demo: "https://singlesbar.net",
          logo: null,
          image: "/projects/singlesbar.jpg",
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
    hire: {
      title: "Qué obtienes al contratarme",
      subtitle: "Más allá del stack — cómo agrego valor realmente.",
      items: [
        {
          title: "Ownership de punta a punta",
          description:
            "De la arquitectura a producción: lo diseño, lo construyo, lo publico y lo opero. Obtienes resultados, no tickets.",
        },
        {
          title: "Liderazgo de equipos",
          description:
            "Años liderando y haciendo mentoring a equipos remotos — comunicación asíncrona clara en inglés (C1) o español.",
        },
        {
          title: "IA aplicada, de verdad",
          description:
            "Agentes y RAG en productos en producción y en el flujo diario del equipo — no solo demos.",
        },
      ],
    },
    contactSection: {
      eyebrow: "Contacto",
      title: "Construyamos algo que llegue a producción.",
      subtitle:
        "Estoy abierto a roles senior full-stack y tech lead — remotos, en inglés o español. Si necesitas a alguien que sea dueño de la arquitectura de punta a punta y entregue bajo tráfico real, hablemos.",
      emailButton: "Copiar mi correo",
      copied: "Copiado al portapapeles",
      linkedin: "O conecta en LinkedIn",
      reply: "Respondo en menos de 24 horas.",
      note: "Desde Guatemala (UTC-6) — solapamiento completo con zonas horarias de EE. UU.",
    },
    notFound: {
      title: "Página no encontrada",
      message: "La página que buscas no existe o fue movida.",
      back: "Volver al inicio",
    },
    footer: {
      builtWith: "Construido con Next.js + Tailwind",
      copyright: "© 2026 Marco Lee",
      backToTop: "Volver arriba",
    },
  },
};

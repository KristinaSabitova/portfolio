const config = {
  title: "Kristina Solomatova Sabitova | Analista junior de ciberseguridad",
  description: {
    long: "Portfolio de Kristina Solomatova Sabitova, analista junior de ciberseguridad: OSINT, seguridad web y Python. Herramientas propias de reconocimiento pasivo, seguridad de IA y auditoría de código, con práctica continua en Hack The Box y PortSwigger.",
    short:
      "Portfolio de Kris: analista junior de ciberseguridad · OSINT, seguridad web y Python.",
  },
  keywords: [
    "Kristina Solomatova Sabitova",
    "Kris",
    "analista de ciberseguridad",
    "OSINT",
    "seguridad web",
    "seguridad ofensiva",
    "pentesting",
    "ciberseguridad",
    "auditoría de código",
    "LLM security",
    "Hack The Box",
    "PortSwigger",
  ],
  author: "Kristina Solomatova Sabitova",
  // nombre con el que se presenta en la portada
  displayName: "Kristina Solomatova Sabitova",
  email: "kris.yvna@gmail.com",
  site: process.env.NEXT_PUBLIC_SITE_URL || "https://kristinasabitova.github.io/portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  /**
   * Cuentas de demo públicas (rol limitado). Vacías = no se muestran.
   * Se rellenan al crear las cuentas en cada servicio.
   */
  demoAccounts: {
    spectra: { user: "", password: "" },
    domini: { user: "", password: "" },
  },
  social: {
    github: "https://github.com/KristinaSabitova",
    linkedin: "https://www.linkedin.com/in/kristina-solomatova-sabitova-8207a4163/",
  },
};
export { config };

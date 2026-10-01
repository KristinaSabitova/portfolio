const config = {
  title: "Kristina Solomatova Sabitova | Seguridad ofensiva · Red Team",
  description: {
    long: "Portfolio de Kristina Solomatova Sabitova: seguridad ofensiva y Red Team. Herramientas propias de auditoría de código, análisis de pipelines LLM y reconocimiento pasivo, con práctica continua en Hack The Box y PortSwigger.",
    short:
      "Portfolio de Kris: seguridad ofensiva, Red Team y herramientas propias de auditoría.",
  },
  keywords: [
    "Kristina Solomatova Sabitova",
    "Kris",
    "seguridad ofensiva",
    "red team",
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
  email: "kris.yvna"@"gmail,.com",
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
  },
};
export { config };

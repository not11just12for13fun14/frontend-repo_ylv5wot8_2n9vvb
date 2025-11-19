export type SiteConfig = {
  siteName: string
  industry: string
  keywords: string[]
  seo: {
    title: string
    description: string
  }
  palette: {
    bg: string
    fg: string
    gold: string
    accent: string
  }
}

export const siteConfig: SiteConfig = {
  siteName: "SPIRIT WAVE",
  industry: "[ HIER BRANCHE EINFÜGEN ]",
  keywords: ["luxus", "premium", "minimalistisch"],
  seo: {
    title: "Wir inszenieren Marktführer. Nicht nur Webseiten.",
    description:
      "Cinematic Digital Experiences mit Glas-Ästhetik, Premium-Typografie und präziser Interaktion. Für Marken, die führen.",
  },
  palette: {
    bg: "#0b0f14",
    fg: "#e6e7ea",
    gold: "#C9A227",
    accent: "#4FC3F7",
  },
}

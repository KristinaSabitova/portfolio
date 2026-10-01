import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { config } from "@/data/config";

import SiteFrame from "@/components/site-frame";
import { Providers } from "@/components/providers";

/* Fuentes autoalojadas (paquetes @fontsource-variable): no se pide nada a
 * Google ni al compilar ni en tiempo de ejecución. */
const spaceGroteskSans = localFont({
  src: "./fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-sans",
  weight: "300 700",
  display: "swap",
});

const unbounded = localFont({
  src: "./fonts/unbounded-latin-wght-normal.woff2",
  variable: "--font-display",
  weight: "200 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(config.site.replace(/\/?$/, "/")),
  alternates: { canonical: "./" },
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: config.site,
    images: [
      {
        url: config.ogImg,
        width: 1200,
        height: 630,
        alt: "Portfolio de Kris",
      },
    ],
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={[
        spaceGroteskSans.variable,
        unbounded.variable,
        "font-sans",
      ].join(" ")}
      suppressHydrationWarning
    >
      <head>
        {/* El runtime de Spline descarga su wasm desde unpkg: se calienta la
            conexión para que la escena 3D arranque antes. */}
        <link rel="preconnect" href="https://unpkg.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <SiteFrame>{children}</SiteFrame>
        </Providers>
      </body>
    </html>
  );
}

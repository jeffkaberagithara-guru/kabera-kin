import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const title = "Kabera Kin — A kinder way home";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s — Kabera Kin",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.legalName,
  publisher: site.legalName,
  category: "Animal welfare",
  keywords: [
    "animal sanctuary Kenya",
    "dog adoption Nairobi",
    "cat adoption Nairobi",
    "animal rescue Kenya",
    "foster a dog Nairobi",
    "Kabera Kin",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/brand/icon-180.png",
  },
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: "A rescue dog in the grounds of the Kabera Kin sanctuary",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: [site.socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

const organisation = {
  "@context": "https://schema.org",
  "@type": "AnimalShelter",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  logo: `${site.url}/favicon.svg`,
  image: site.socialImage,
  description: site.description,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressCountry: site.address.country,
  },
  areaServed: ["Nairobi", "Kiambu", "Nakuru", "Kajiado"],
  knowsAbout: ["Animal rescue", "Adoption", "Fostering", "Animal welfare"],
};

export const viewport: Viewport = {
  themeColor: "#14352C",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-KE" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="https://cdn.coverr.co" />
      </head>
      <body
        className={`${fraunces.variable} ${manrope.variable} bg-linen font-manrope text-ink antialiased`}
      >
        <a
          href="#main"
          className="sr-only z-[100] bg-forest px-5 py-3 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisation) }}
        />
        <Header />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

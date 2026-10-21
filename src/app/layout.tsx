import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { FloatingCall, Header, Footer } from "@/components/ui";
import { getSiteUrl } from "@/lib/site";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Auto Pro 66",
  description: "Mécanicien à domicile (garage mobile) à Saint-Cyprien et Perpignan",
  telephone: "+33661584142",
  founder: { "@type": "Person", name: "Julien" },
  address: { "@type": "PostalAddress", addressLocality: "Saint-Cyprien", postalCode: "66750", addressRegion: "Pyrénées-Orientales", addressCountry: "FR" },
  areaServed: ["Saint-Cyprien", "Perpignan", "Canet-en-Roussillon", "Argelès-sur-Mer", "Elne"],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", reviewCount: "15" },
};

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "Mécanicien à domicile Saint-Cyprien & Perpignan | Auto Pro 66, garage mobile",
  description:
    "Auto Pro 66, mécanicien à domicile sans garage dans les Pyrénées-Orientales (66). Julien se déplace chez vous et sur les aires de camping-cars à Saint-Cyprien, Perpignan et alentours. Lun–Ven 8h–18h. 06 61 58 41 42.",
  keywords: [
    "mécanicien à domicile",
    "garage mobile",
    "mécanicien Saint-Cyprien",
    "mécanicien Perpignan",
    "mécanicien camping-car",
    "réparation voiture à domicile 66",
    "Pyrénées-Orientales",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${inter.variable} ${oswald.variable} antialiased`}>
      <body className="min-h-full font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}

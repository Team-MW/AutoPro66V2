import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { FloatingCall, Header, Footer } from "@/components/ui";

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
  title: "Auto Pro 66 | Mécanicien à domicile – Saint-Cyprien & Perpignan",
  description:
    "Auto Pro 66, mécanicien mobile dans les Pyrénées-Orientales. Julien se déplace à votre domicile et sur les aires de camping-cars. Lun–Ven 8h–18h. 06 61 58 41 42.",
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

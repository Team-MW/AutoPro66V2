import type { Metadata } from "next";
import { villes, faqs } from "@/lib/data";
import { CallBanner, PageHero, Faq } from "@/components/ui";

export const metadata: Metadata = {
  title: "Zone d'intervention : Saint-Cyprien, Perpignan et alentours | Auto Pro 66",
  description: "Mécanicien à domicile à Saint-Cyprien, Perpignan, Canet, Argelès, Elne et dans les Pyrénées-Orientales.",
};

export default function ZonePage() {
  return (
    <>
      <PageHero
        kicker="Zone d'intervention"
        title="Saint-Cyprien, Perpignan"
        accent="et alentours"
        text="Basé sur la côte, Julien intervient dans un rayon autour de Saint-Cyprien et Perpignan : à domicile, sur votre lieu de travail, sur un parking ou une aire de camping-car."
      />
      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase">Communes <span className="text-brand">desservies</span></h2>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {villes.map((v) => (
                <li key={v} className="flex items-center gap-2 rounded-md border border-white/10 bg-neutral-950 px-4 py-3 text-neutral-300">
                  <span className="h-2 w-2 rounded-full bg-brand" />{v}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500">Votre commune n&apos;est pas dans la liste ? Appelez, Julien vous dira s&apos;il peut se déplacer.</p>
          </div>
          <div className="overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Carte Saint-Cyprien / Perpignan"
              src="https://www.google.com/maps?q=Saint-Cyprien+66750&z=10&output=embed"
              className="h-full min-h-96 w-full grayscale invert"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <Faq items={faqs.zone} />
      <CallBanner />
    </>
  );
}

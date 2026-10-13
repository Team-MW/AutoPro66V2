import type { Metadata } from "next";
import Link from "next/link";
import { services, faqs } from "@/lib/data";
import { CallBanner, PageHero, Faq, images } from "@/components/ui";

export const metadata: Metadata = {
  title: "Services de mécanique à domicile | Auto Pro 66",
  description: "Entretien, vidange, freinage, diagnostic, batterie, embrayage, suspension : toutes les réparations faites chez vous dans le 66.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        image={images.amg}
        kicker="Services"
        title="La mécanique"
        accent="à votre porte"
        text="Voitures, utilitaires et camping-cars : Julien réalise sur place la grande majorité des interventions qu'on fait habituellement en garage."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-6xl space-y-5 px-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="block rounded-lg border border-white/10 bg-neutral-950 p-8 transition hover:border-brand md:flex md:gap-10"
            >
              <div className="md:w-1/3">
                <div className="mb-4 h-1 w-10 bg-brand" />
                <h2 className="font-display text-2xl font-semibold uppercase">{s.title}</h2>
                <p className="mt-2 text-sm text-neutral-400">{s.short}</p>
              </div>
              <ul className="mt-5 grid flex-1 gap-2 text-sm text-neutral-300 sm:grid-cols-2 md:mt-0">
                {s.includes.slice(0, 4).map((i) => (
                  <li key={i} className="flex gap-2"><span className="text-brand">✓</span>{i}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
      <Faq items={faqs.services} />
      <CallBanner />
    </>
  );
}

import type { Metadata } from "next";
import { faqs } from "@/lib/data";
import { CallBanner, PageHero, Stars, Faq, images } from "@/components/ui";

export const metadata: Metadata = {
  title: "À propos de Julien | Auto Pro 66",
  description: "Auto Pro 66, c'est Julien, mécanicien mobile dans les Pyrénées-Orientales.",
};

const valeurs = [
  { title: "Honnêteté", text: "On ne remplace que ce qui doit l'être. Le diagnostic et le prix sont expliqués avant toute intervention." },
  { title: "Proximité", text: "Un seul interlocuteur du premier appel jusqu'à la fin de la réparation." },
  { title: "Travail propre", text: "Bâche de protection, récupération des déchets et des pièces usagées : on laisse l'endroit comme on l'a trouvé." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image={images.golf}
        kicker="À propos"
        title="Auto Pro 66,"
        accent="c'est Julien"
        text="Mécanicien passionné, Julien a fait le choix de ne pas ouvrir de garage pour aller directement au contact de ses clients. Son atelier, c'est son véhicule équipé : outillage, valise de diagnostic et pièces courantes."
      />
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-5 md:grid-cols-3">
            {valeurs.map((v) => (
              <div key={v.title} className="rounded-lg border border-white/10 bg-neutral-950 p-6">
                <div className="mb-4 h-1 w-10 bg-brand" />
                <h2 className="font-display text-xl font-semibold uppercase">{v.title}</h2>
                <p className="mt-2 text-neutral-400">{v.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center rounded-lg border border-brand/40 bg-neutral-950 p-10 text-center">
            <p className="text-3xl"><Stars /></p>
            <p className="mt-3 font-display text-5xl font-bold">4,8<span className="text-neutral-500">/5</span></p>
            <p className="mt-2 text-neutral-400">Note moyenne sur Google · 15 avis clients</p>
          </div>
        </div>
      </section>
      <Faq items={faqs.apropos} />
      <CallBanner />
    </>
  );
}

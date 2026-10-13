import type { Metadata } from "next";
import { faqs } from "@/lib/data";
import { CallBanner, PageHero, Faq } from "@/components/ui";

export const metadata: Metadata = {
  title: "Mécanicien camping-car sur aire et camping | Auto Pro 66",
  description: "Panne ou entretien de camping-car pendant vos vacances dans les Pyrénées-Orientales ? Julien intervient directement sur votre aire ou camping.",
};

const interventions = [
  "Vidange et entretien du porteur (Fiat Ducato, Ford Transit, Renault Master, Mercedes Sprinter…)",
  "Remplacement des plaquettes et disques de frein",
  "Batterie moteur qui ne tient plus la charge",
  "Diagnostic d'un voyant allumé en cours de route",
  "Remplacement de courroie d'accessoires",
  "Contrôle avant de reprendre la route du retour",
];

const conseils = [
  { title: "Avant d'appeler", text: "Notez le modèle du porteur, l'année et le kilométrage. Une photo du voyant ou du bruit en vidéo aide beaucoup." },
  { title: "Votre emplacement", text: "Indiquez le nom de l'aire ou du camping et votre numéro d'emplacement. Prévenez l'accueil si nécessaire." },
  { title: "Pièces", text: "Pour les pièces spécifiques, Julien les commande et revient les poser, souvent sous 24 à 48h." },
];

export default function CampingCarsPage() {
  return (
    <>
      <PageHero
        kicker="Camping-cars"
        title="En panne en vacances ?"
        accent="Julien vient sur votre aire."
        text="Saint-Cyprien, Argelès, Canet… La côte catalane accueille des milliers de camping-caristes chaque année. Pas besoin de chercher un garage poids lourd ou d'immobiliser votre maison roulante : la réparation se fait sur place."
      />
      <section className="pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase">Interventions <span className="text-brand">courantes</span></h2>
            <ul className="mt-6 space-y-3">
              {interventions.map((i) => (
                <li key={i} className="flex gap-3 rounded-md border border-white/10 bg-neutral-950 p-4 text-neutral-300">
                  <span className="text-brand">✓</span>{i}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-neutral-500">
              Julien intervient sur la partie mécanique du porteur. La cellule (gaz, eau, électricité 220V) relève d&apos;un spécialiste.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="font-display text-3xl font-bold uppercase">Bon à <span className="text-brand">savoir</span></h2>
            {conseils.map((c) => (
              <div key={c.title} className="rounded-lg border border-white/10 bg-neutral-950 p-6">
                <h3 className="font-display text-xl font-semibold uppercase">{c.title}</h3>
                <p className="mt-2 text-neutral-400">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq items={faqs.campingCars} />
      <CallBanner />
    </>
  );
}

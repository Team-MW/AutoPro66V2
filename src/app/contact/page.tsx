import type { Metadata } from "next";
import { PHONE, PHONE_HREF, faqs } from "@/lib/data";
import { PageHero, Faq, images } from "@/components/ui";

export const metadata: Metadata = {
  title: "Contact | Auto Pro 66 – 06 61 58 41 42",
  description: "Contactez Julien, mécanicien à domicile à Saint-Cyprien et Perpignan. Lun–Ven 8h–18h.",
};

const infos = [
  "Marque, modèle et année du véhicule",
  "Kilométrage approximatif",
  "Le problème constaté (bruit, voyant, panne…)",
  "L'adresse où se trouve le véhicule",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        image={images.berline}
        kicker="Contact"
        title="Parlons de"
        accent="votre véhicule"
        text="Le plus simple et le plus rapide : un appel. Si Julien est en intervention, laissez un message ou envoyez un SMS, il vous rappelle."
      />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-3">
          <div className="rounded-lg border border-brand/40 bg-neutral-950 p-8 md:col-span-2">
            <p className="text-sm uppercase tracking-widest text-neutral-400">Téléphone / SMS</p>
            <a href={PHONE_HREF} className="mt-2 block font-display text-4xl font-bold text-brand md:text-6xl">{PHONE}</a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONE_HREF} className="rounded-md bg-brand px-6 py-3 font-semibold hover:bg-brand-dark">Appeler</a>
              <a href="sms:+33661584142" className="rounded-md border border-white/20 px-6 py-3 font-semibold hover:border-white">Envoyer un SMS</a>
            </div>
            <h2 className="mt-10 font-display text-xl font-semibold uppercase">Pour un devis rapide, précisez :</h2>
            <ul className="mt-4 space-y-2 text-neutral-300">
              {infos.map((i) => (
                <li key={i} className="flex gap-3"><span className="text-brand">✓</span>{i}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
              <h2 className="font-display text-xl font-semibold uppercase">Horaires</h2>
              <dl className="mt-4 space-y-2 text-neutral-300">
                <div className="flex justify-between"><dt>Lun – Ven</dt><dd className="font-semibold text-white">8h – 18h</dd></div>
                <div className="flex justify-between"><dt>Sam – Dim</dt><dd className="text-neutral-500">Fermé</dd></div>
              </dl>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
              <h2 className="font-display text-xl font-semibold uppercase">Zone</h2>
              <p className="mt-3 text-neutral-300">Saint-Cyprien / Perpignan et alentours (Pyrénées-Orientales)</p>
              <p className="mt-2 text-sm text-neutral-500">Pas d&apos;atelier : intervention uniquement sur place.</p>
            </div>
          </div>
        </div>
      </section>
      <Faq items={faqs.contact} />
    </>
  );
}

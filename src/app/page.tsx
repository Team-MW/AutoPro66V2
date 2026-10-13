import Image from "next/image";
import Link from "next/link";
import { PHONE_HREF, faqs, services } from "@/lib/data";
import { CallBanner, Faq, Stars } from "@/components/ui";

const steps = [
  { n: "01", title: "Vous appelez", text: "Expliquez le problème à Julien par téléphone." },
  { n: "02", title: "On fixe un RDV", text: "Chez vous, au travail ou sur votre aire de camping-car." },
  { n: "03", title: "Réparation sur place", text: "Pas besoin de vous déplacer, ni de garage." },
];

const avantages = [
  { title: "Zéro déplacement", text: "Plus besoin de déposer la voiture, de trouver quelqu'un pour vous ramener ou de poser une journée." },
  { title: "Interlocuteur unique", text: "Vous parlez directement à Julien, celui qui répare votre véhicule. Pas d'accueil, pas d'intermédiaire." },
  { title: "Transparence", text: "Vous pouvez voir le travail effectué et poser toutes vos questions pendant l'intervention." },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
        <Image
          src="/images/mercedes-classe-a-berline.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-70 scale-125 translate-x-[15%] translate-y-[8%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(225,6,0,0.35),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5">
          <div className="max-w-2xl">
          <h1 className="font-display text-5xl font-bold uppercase leading-tight md:text-6xl xl:text-7xl">
            Pas de garage.<br />
            <span className="text-brand">Le garage vient à vous.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-neutral-300">
            Julien se déplace chez vous et sur les aires de camping-cars autour de Saint-Cyprien et Perpignan pour
            entretenir et réparer votre véhicule.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href={PHONE_HREF} className="rounded-md bg-brand px-7 py-4 font-semibold hover:bg-brand-dark">Appeler Julien</a>
            <Link href="/services" className="rounded-md border border-white/20 px-7 py-4 font-semibold hover:border-white">
              Voir les services
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-neutral-300">
            <Stars />
            <span><strong className="text-white">4,8/5</strong> sur Google · 15 avis</span>
          </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-brand">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
          {[
            ["4,8/5", "Note Google"],
            ["15", "Avis clients"],
            ["100%", "À domicile"],
            ["Lun–Ven", "8h – 18h"],
          ].map(([v, l]) => (
            <div key={l}>
              <p className="font-display text-3xl font-bold">{v}</p>
              <p className="text-sm uppercase tracking-wide text-white/80">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-neutral-950 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl font-bold uppercase">Nos <span className="text-brand">services</span></h2>
          <p className="mt-3 text-neutral-400">Tout est réalisé sur place, là où se trouve votre véhicule.</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-lg border border-white/10 bg-black p-6 transition hover:border-brand">
                <div className="mb-4 h-1 w-10 bg-brand" />
                <h3 className="font-display text-xl font-semibold uppercase">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.short}</p>
                <p className="mt-4 text-sm font-semibold text-brand">En savoir plus →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl font-bold uppercase">Comment <span className="text-brand">ça marche</span></h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="font-display text-6xl font-bold text-brand">{s.n}</span>
                <h3 className="mt-2 font-display text-2xl font-semibold uppercase">{s.title}</h3>
                <p className="mt-2 text-neutral-400">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-neutral-950 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="font-display text-4xl font-bold uppercase">Pourquoi un <span className="text-brand">mécanicien mobile</span> ?</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {avantages.map((a) => (
              <div key={a.title} className="rounded-lg border border-white/10 bg-black p-6">
                <h3 className="font-display text-xl font-semibold uppercase">{a.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-brand/40 bg-black p-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="font-display text-2xl font-semibold uppercase">En camping-car dans le 66 ?</h3>
              <p className="mt-2 text-neutral-400">Julien intervient directement sur les aires et campings de la côte.</p>
            </div>
            <Link href="/camping-cars" className="mt-5 inline-block rounded-md bg-brand px-6 py-3 font-semibold hover:bg-brand-dark md:mt-0">
              Service camping-cars
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
          <Image
            src="/images/golf.webp"
            alt="Entretien de voiture toutes marques à domicile"
            width={1400}
            height={685}
            className="w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]"
          />
          <div>
            <h2 className="font-display text-4xl font-bold uppercase">Toutes <span className="text-brand">marques</span></h2>
            <p className="mt-4 text-neutral-300">
              Citadine, berline, SUV, utilitaire ou camping-car : Julien intervient sur toutes les marques, françaises comme
              étrangères. Renault, Peugeot, Citroën, Volkswagen, Mercedes, BMW, Toyota, Fiat, Ford…
            </p>
            <ul className="mt-6 space-y-2 text-neutral-300">
              {["Pièces de qualité équivalente à l'origine", "Préconisations constructeur respectées", "Garantie constructeur préservée"].map((i) => (
                <li key={i} className="flex gap-3"><span className="text-brand">✓</span>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Faq items={faqs.home} />
      <CallBanner />
    </>
  );
}

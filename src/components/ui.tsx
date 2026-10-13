import Image from "next/image";
import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/data";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/camping-cars", label: "Camping-cars" },
  { href: "/zone-intervention", label: "Zone" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-display text-2xl font-bold uppercase tracking-wide">
          Auto Pro <span className="text-brand">66</span>
        </Link>
        <nav className="hidden gap-7 text-sm text-neutral-300 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <a href={PHONE_HREF} className="rounded-md bg-brand px-4 py-2 text-sm font-semibold hover:bg-brand-dark">
          {PHONE}
        </a>
      </div>
      <nav className="flex justify-around border-t border-white/10 py-2 text-xs text-neutral-300 md:hidden">
        {nav.map((n) => (
          <Link key={n.href} href={n.href}>
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 text-sm text-neutral-400 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold uppercase text-white">
            Auto Pro <span className="text-brand">66</span>
          </p>
          <p className="mt-3">Mécanicien à domicile dans les Pyrénées-Orientales. Pas de garage : on se déplace chez vous.</p>
        </div>
        <div>
          <p className="font-semibold uppercase text-white">Pages</p>
          <ul className="mt-3 space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="hover:text-white">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold uppercase text-white">Contact</p>
          <p className="mt-3">Julien · <a href={PHONE_HREF} className="text-brand">{PHONE}</a></p>
          <p className="mt-1">Lun–Ven : 8h – 18h</p>
          <p className="mt-1">Saint-Cyprien / Perpignan (66)</p>
        </div>
      </div>
      <p className="border-t border-white/10 py-5 text-center text-xs text-neutral-600">© 2026 Auto Pro 66</p>
    </footer>
  );
}

type HeroImage = { src: string; alt: string; width: number; height: number };

export function PageHero({
  kicker,
  title,
  accent,
  text,
  image,
}: {
  kicker: string;
  title: string;
  accent: string;
  text: string;
  image?: HeroImage;
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 md:pt-44">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(225,6,0,0.3),transparent_60%)]" />
      <div className={`relative mx-auto grid max-w-6xl items-center gap-10 px-5 ${image ? "lg:grid-cols-2" : ""}`}>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand">{kicker}</p>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase md:text-6xl">
            {title} <span className="text-brand">{accent}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-300">{text}</p>
        </div>
        {image && (
          <div className="relative">
            <div className="absolute inset-x-10 bottom-2 h-12 rounded-full bg-brand/40 blur-3xl" />
            <Image {...image} alt={image.alt} priority className="relative w-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)]" />
          </div>
        )}
      </div>
    </section>
  );
}

export const images = {
  berline: { src: "/images/mercedes-classe-a-berline.webp", alt: "Berline entretenue à domicile", width: 946, height: 436 },
  amg: { src: "/images/mercedes-classe-a-amg.webp", alt: "Réparation automobile à domicile dans le 66", width: 544, height: 289 },
  golf: { src: "/images/golf.webp", alt: "Mécanique toutes marques à domicile", width: 1400, height: 685 },
} satisfies Record<string, HeroImage>;

export function CallBanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(225,6,0,0.3),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl px-5">
        <h2 className="font-display text-3xl font-bold uppercase md:text-5xl">
          Une panne ? <span className="text-brand">Appelez Julien</span>
        </h2>
        <p className="mt-4 text-neutral-300">Du lundi au vendredi, de 8h à 18h.</p>
        <a href={PHONE_HREF} className="mt-8 inline-block rounded-md bg-brand px-10 py-5 font-display text-3xl font-bold tracking-wide hover:bg-brand-dark">
          {PHONE}
        </a>
      </div>
    </section>
  );
}

export type FaqItem = { q: string; a: string };

export function Faq({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-4xl px-5">
        <h2 className="font-display text-3xl font-bold uppercase md:text-4xl">
          {title.split(" ")[0]} <span className="text-brand">{title.split(" ").slice(1).join(" ")}</span>
        </h2>
        <div className="mt-8 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="group rounded-md border border-white/10 bg-neutral-950 p-5 open:border-brand/50">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                {f.q}
                <span className="text-2xl text-brand transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-neutral-400">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
}

export function FloatingCall() {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Appeler Julien au ${PHONE}`}
      className="fixed right-5 bottom-5 z-50 flex items-center gap-3 rounded-full bg-brand py-3 pr-5 pl-3 font-semibold shadow-[0_10px_30px_rgba(225,6,0,0.5)] transition hover:scale-105 hover:bg-brand-dark"
    >
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-5 w-5" aria-hidden>
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
        </svg>
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-normal text-white/80">Appeler Julien</span>
        <span className="hidden sm:block">{PHONE}</span>
        <span className="sm:hidden">Appeler</span>
      </span>
    </a>
  );
}

export function Stars() {
  return <span className="text-brand" aria-hidden>★★★★★</span>;
}

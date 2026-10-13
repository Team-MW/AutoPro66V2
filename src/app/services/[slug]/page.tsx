import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHONE, PHONE_HREF, faqs, services } from "@/lib/data";
import { CallBanner, Faq, PageHero, images } from "@/components/ui";

export const instant = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: `${s.title} à domicile | Auto Pro 66`, description: s.intro };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();

  return (
    <>
      <PageHero kicker="Service à domicile" title={s.title} accent="à domicile" text={s.intro} image={images.amg} />
      <section className="pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase">Ce que <span className="text-brand">comprend</span> l&apos;intervention</h2>
              <ul className="mt-6 space-y-3">
                {s.includes.map((i) => (
                  <li key={i} className="flex gap-3 rounded-md border border-white/10 bg-neutral-950 p-4 text-neutral-300">
                    <span className="text-brand">✓</span>{i}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-3xl font-bold uppercase">Les <span className="text-brand">signes</span> qui doivent alerter</h2>
              <ul className="mt-6 space-y-2 text-neutral-300">
                {s.signs.map((i) => (
                  <li key={i} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-lg border border-brand/40 bg-neutral-950 p-6">
              <h3 className="font-display text-xl font-semibold uppercase">Prendre rendez-vous</h3>
              <p className="mt-2 text-sm text-neutral-400">Décrivez votre problème à Julien, il vous propose un créneau et un tarif.</p>
              <a href={PHONE_HREF} className="mt-5 block rounded-md bg-brand py-3 text-center font-semibold hover:bg-brand-dark">{PHONE}</a>
              <p className="mt-3 text-center text-xs text-neutral-500">Lun–Ven · 8h–18h</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-neutral-950 p-6">
              <h3 className="font-display text-lg font-semibold uppercase">Autres services</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {services.filter((x) => x.slug !== s.slug).map((x) => (
                  <li key={x.slug}><Link href={`/services/${x.slug}`} className="text-neutral-300 hover:text-brand">→ {x.title}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <Faq items={[...s.faq, ...faqs.services.slice(1, 3)]} />
      <CallBanner />
    </>
  );
}

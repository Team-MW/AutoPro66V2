"use client";

import { useEffect, useRef } from "react";

const JOTFORM_SRC = "https://form.jotform.com/jsform/262933280161353";

export function ContactForm() {
  const slot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = slot.current;
    if (!el) return;

    const script = document.createElement("script");
    script.src = JOTFORM_SRC;
    script.type = "text/javascript";
    el.appendChild(script);

    return () => {
      el.replaceChildren();
    };
  }, []);

  return <div ref={slot} className="min-h-[640px] w-full [&_iframe]:w-full" />;
}

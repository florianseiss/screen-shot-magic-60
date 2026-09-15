import { useEffect, useState } from "react";
import { useConsent } from "@/components/CookieConsent";

export function MapEmbed({
  name,
  src,
  link,
}: {
  name: string;
  src: string;
  link: string;
}) {
  const { externalAllowed, openSettings } = useConsent();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (externalAllowed) setLoaded(true);
  }, [externalAllowed]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-card">
      {loaded ? (
        <iframe title={`Karte ${name}`} src={src} loading="lazy" className="h-72 w-full border-0" />
      ) : (
        <div className="relative flex h-72 w-full flex-col items-center justify-center gap-4 bg-sky-soft/70 px-6 text-center">
          <svg
            aria-hidden
            viewBox="0 0 200 120"
            className="absolute inset-0 h-full w-full opacity-40"
            preserveAspectRatio="none"
          >
            <rect width="200" height="120" fill="var(--sky-soft)" />
            <path d="M0,80 C40,60 70,95 110,72 C150,50 175,78 200,62" stroke="var(--primary)" strokeOpacity="0.25" fill="none" strokeWidth="2" />
            <path d="M0,40 C50,20 80,55 130,32 C165,16 185,38 200,28" stroke="var(--primary)" strokeOpacity="0.15" fill="none" strokeWidth="2" />
            <circle cx="100" cy="60" r="26" fill="var(--primary)" fillOpacity="0.08" />
          </svg>
          <div className="relative">
            <p className="font-display text-2xl">{name}</p>
            <p className="mx-auto mt-2 max-w-xs text-xs text-muted-foreground">
              Die Karte wird erst nach deiner Zustimmung geladen. Dabei wird deine IP-Adresse an den
              Kartenanbieter übertragen.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setLoaded(true)}
                className="rounded-full bg-primary px-5 py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground transition hover:brightness-110"
              >
                Karte laden
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="text-xs uppercase tracking-widest text-primary underline underline-offset-4"
              >
                Einstellungen
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <p className="text-sm font-medium">{name}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-xs uppercase tracking-widest text-primary transition hover:brightness-110"
        >
          Größere Karte
        </a>
      </div>
    </div>
  );
}

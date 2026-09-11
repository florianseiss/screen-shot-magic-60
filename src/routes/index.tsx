import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-breath.jpg";
import portraitAsset from "@/assets/michaela-portrait.png.asset.json";
import eggersdorfAsset from "@/assets/eggersdorf-luftbild.png.asset.json";
import studioLightAsset from "@/assets/studio-licht.jpg.asset.json";
import studioGroupAsset from "@/assets/studio-gruppe.jpg.asset.json";
import studioDetailAsset from "@/assets/studio-detail.jpg.asset.json";
import gpbaBadge from "@/assets/gpba-badge.png.asset.json";
import sevenDirectionsBadge from "@/assets/seven-directions-badge.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michaela Seiß – Breathwork in Weiz & Eggersdorf" },
      {
        name: "description",
        content:
          "Zertifizierte Breathwork-Trainerin in Weiz und Eggersdorf (Steiermark). Conscious Connected Breathwork, Slow Breath und 1:1 Atemarbeit – atme tief, lass los, komm bei dir an.",
      },
      { property: "og:title", content: "Michaela Seiß – Breathwork in Weiz & Eggersdorf" },
      {
        property: "og:description",
        content:
          "Atme. Spüre. Komm bei dir an. Breathwork-Sessions in der Steiermark – CCB, Slow Breath und 1:1 Begleitung.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WaveDivider = ({ flip = false }: { flip?: boolean }) => (
  <div aria-hidden className={flip ? "rotate-180" : ""}>
    <svg viewBox="0 0 1440 120" className="h-16 w-full md:h-24" preserveAspectRatio="none">
      <path
        d="M0,64 C240,120 420,10 720,48 C1010,84 1200,120 1440,60 L1440,120 L0,120 Z"
        fill="var(--sky-soft)"
      />
    </svg>
  </div>
);

const offers = [
  {
    title: "Conscious Connected Breathwork",
    tag: "CCB",
    text: "Verbindet bewusste, tiefe Atemzüge ohne Pausen. Der kontinuierliche Atemrhythmus unterstützt Entspannung, Körperwahrnehmung und emotionales Loslassen, fördert Präsenz und kann innere Prozesse achtsam begleiten.",
  },
  {
    title: "Slow Breath",
    tag: "Ruhe",
    text: "Eine bewusste, langsame Atemtechnik, die den Atem vertieft und verlängert. Sie fördert Ruhe, Präsenz und Körperwahrnehmung, unterstützt Entspannung und hilft, Stress sanft loszulassen.",
  },
  {
    title: "1:1 Arbeit",
    tag: "Individuell",
    text: "Wir analysieren deinen Atem und gehen konkret auf deine Wünsche ein: Umgang mit Ängsten, Verwendung der richtigen Atemmuskulatur und Steigerung der CO₂-Toleranz.",
  },
];

function Index() {
  return (
    <main className="surface-sky overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-xl">
            Michaela Seiß
          </a>
          <ul className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <li>
              <a href="#ueber-mich" className="transition hover:text-primary">
                Über mich
              </a>
            </li>
            <li>
              <a href="#angebote" className="transition hover:text-primary">
                Angebot
              </a>
            </li>
            <li>
              <a href="#zertifizierungen" className="transition hover:text-primary">
                Zertifizierungen
              </a>
            </li>
            <li>
              <a
                href="#kontakt"
                className="rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition hover:brightness-110"
              >
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] overflow-hidden pt-20">
        <img
          src={heroImg}
          alt="Frau atmet mit geschlossenen Augen in einer sonnigen steirischen Landschaft"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/10" />
        <div
          aria-hidden
          className="breathe absolute -left-24 top-1/4 h-[26rem] w-[26rem] rounded-full bg-sky/40 blur-3xl"
        />
        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl items-center px-6 py-24">
          <Reveal className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">
              Breathwork · Weiz &amp; Eggersdorf
            </p>
            <h1 className="mt-6 text-5xl leading-[1.05] text-balance-tight md:text-7xl">
              Atme. Spüre.
              <br />
              Komm bei dir an.
            </h1>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-muted-foreground">
              Ich bin Michaela Seiß, zertifizierte Breathwork-Trainerin in der Steiermark. In ruhigen,
              begleiteten Atemsessions findest du zurück in deinen Körper – zu echter Entspannung,
              Klarheit und Kraft, die immer in dir verfügbar ist.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-soft transition hover:brightness-110"
              >
                Session buchen
              </a>
              <a
                href="#angebote"
                className="rounded-full border border-primary/25 px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary transition hover:bg-secondary"
              >
                Angebote ansehen
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider />

      {/* Über mich */}
      <section id="ueber-mich" className="bg-sky-soft/60 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div
                aria-hidden
                className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-sand/70 blur-2xl"
              />
              <img
                src={portraitAsset.url}
                alt="Michaela Seiß, zertifizierte Breathwork-Trainerin, lächelt in die Kamera"
                width={1200}
                height={1200}
                loading="lazy"
                className="relative aspect-square w-full rounded-[3rem] object-cover shadow-card"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Über mich</p>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
              Der Atem als Werkzeug, das immer bei dir ist
            </h2>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted-foreground">
              <p>
                Ich bin Michaela Seiß, 48 Jahre, tief verbunden mit der Natur und den Elementen. Ich
                begleite Menschen dabei, ihren Körper wieder mehr zu spüren, loszulassen und echte
                Entspannung zu erfahren.
              </p>
              <p>
                Für mich gehören ein gesunder Geist und ein gesunder Körper untrennbar zusammen. Der
                Atem ist dabei ein kraftvolles Tool, das immer verfügbar ist – mit gezieltem Training
                und der Aktivierung der richtigen Atemmuskulatur lässt sich Wohlbefinden nachhaltig
                beeinflussen.
              </p>
              <p>
                Mein Herzenswunsch: Menschen die Kraft ihres eigenen Atems zeigen und sie auf dem Weg
                zurück zu sich selbst begleiten.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Angebote */}
      <section id="angebote" className="relative px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Angebote</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Breathwork Einheiten</h2>
            <p className="mt-5 text-muted-foreground">
              Jede Einheit ist ein geschützter Raum – ruhig geführt, in deinem Tempo.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={i * 140}>
                <article className="flex h-full flex-col rounded-[2.5rem] border border-border/70 bg-card p-9 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
                  <span
                    aria-hidden
                    className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-sky-soft"
                  >
                    <svg viewBox="0 0 40 40" className="h-8 w-8">
                      <circle
                        cx="20"
                        cy="20"
                        r={12 - i * 3}
                        fill="none"
                        stroke="var(--petrol)"
                        strokeWidth="1.2"
                        opacity="0.8"
                      />
                      <path
                        d="M4 24 C12 16 20 30 36 20"
                        fill="none"
                        stroke="var(--petrol)"
                        strokeWidth="1.2"
                        opacity="0.5"
                      />
                    </svg>
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary/60">{o.tag}</p>
                  <h3 className="mt-3 text-2xl leading-snug">{o.title}</h3>
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-muted-foreground">{o.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio-Einblicke */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-8 max-w-lg">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Einblicke</p>
            <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Ein Raum zum Ankommen</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-12 md:gap-5">
            <Reveal className="col-span-2 md:col-span-7">
              <img
                src={studioLightAsset.url}
                alt="Heller Breathwork-Raum mit Matten, Kissen und Pflanzen"
                width={768}
                height={1024}
                loading="lazy"
                className="h-80 w-full rounded-[2rem] object-cover shadow-card md:h-[34rem]"
              />
            </Reveal>
            <div className="col-span-2 grid grid-cols-2 gap-3 md:col-span-5 md:grid-cols-1 md:gap-5">
              <Reveal delay={100}>
                <img
                  src={studioGroupAsset.url}
                  alt="Vorbereitete Matten und Bolster für eine gemeinsame Breathwork-Session"
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="h-52 w-full rounded-[2rem] object-cover shadow-card md:h-[16.375rem]"
                />
              </Reveal>
              <Reveal delay={180}>
                <img
                  src={studioDetailAsset.url}
                  alt="Achtsam vorbereiteter Platz mit Sitzkissen, Kerzen und Atemzubehör"
                  width={768}
                  height={1024}
                  loading="lazy"
                  className="h-52 w-full rounded-[2rem] object-cover shadow-card md:h-[16.375rem]"
                />
              </Reveal>
            </div>
          </div>
          <Reveal delay={120} className="mt-7 text-center">
            <blockquote className="font-display text-2xl leading-snug text-primary md:text-3xl">
              „Dein Atem kennt den Weg zurück zu dir.“
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Zertifizierungen */}
      <section id="zertifizierungen" className="bg-sky-soft/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Vertrauen</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Zertifizierungen &amp; Mitgliedschaft</h2>
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Zertifiziert bei der Seven Directions Breathwork School und Mitglied der Global
              Professional Breathwork Alliance (GPBA) – für sichere, ethische und fundierte
              Atembegleitung.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2">
            {[
              {
                title: "Certified Practitioner",
                sub: "Seven Directions® Breathwork",
              },
              {
                title: "Ethically Compliant Breathworker",
                sub: "Global Professional Breathwork Alliance (GPBA)",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 140}>
                <div className="flex h-full flex-col items-center gap-4 rounded-[2rem] border border-primary/15 bg-card px-8 py-10 shadow-card">
                  <span
                    aria-hidden
                    className="flex h-16 w-16 items-center justify-center rounded-full border border-primary/20 bg-sky-soft text-primary"
                  >
                    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor">
                      <circle cx="12" cy="9" r="5.5" strokeWidth="1.2" />
                      <path d="M8.5 14 L7 22 L12 19.5 L17 22 L15.5 14" strokeWidth="1.2" />
                    </svg>
                  </span>
                  <h3 className="text-xl">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Standort */}
      <section id="standort" className="px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Standort</p>
            <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
              Sessions in Weiz und Eggersdorf
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
              Meine Breathwork-Einheiten finden in ruhigen Räumen in Weiz und in Eggersdorf bei Graz
              statt – mitten in der Steiermark, umgeben von Natur. Einzelsessions und kleine Gruppen
              nach Vereinbarung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Weiz", "Eggersdorf bei Graz", "Steiermark"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-primary/20 bg-secondary px-5 py-2 text-sm text-secondary-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={eggersdorfAsset.url}
              alt="Luftbild von Eggersdorf bei Graz mit Kirche, Ortszentrum und steirischen Hügeln"
              width={1600}
              height={912}
              loading="lazy"
              className="h-80 w-full rounded-[3rem] object-cover shadow-card md:h-96"
            />
          </Reveal>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            {
              name: "Weiz",
              src: "https://www.openstreetmap.org/export/embed.html?bbox=15.5850%2C47.1950%2C15.6650%2C47.2450&layer=mapnik&marker=47.2200%2C15.6250",
              link: "https://www.openstreetmap.org/?mlat=47.2200&mlon=15.6250#map=13/47.2200/15.6250",
            },
            {
              name: "Eggersdorf bei Graz",
              src: "https://www.openstreetmap.org/export/embed.html?bbox=15.4950%2C47.0900%2C15.5750%2C47.1400&layer=mapnik&marker=47.1150%2C15.5350",
              link: "https://www.openstreetmap.org/?mlat=47.1150&mlon=15.5350#map=13/47.1150/15.5350",
            },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 140}>
              <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-card">
                <iframe
                  title={`Karte ${m.name}`}
                  src={m.src}
                  loading="lazy"
                  className="h-72 w-full border-0"
                />
                <div className="flex items-center justify-between gap-4 px-6 py-4">
                  <p className="text-sm font-medium">{m.name}</p>
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest text-primary transition hover:brightness-110"
                  >
                    Größere Karte
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* Kontakt */}
      <section id="kontakt" className="bg-sky-soft/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl leading-tight text-balance-tight md:text-5xl">
              Bereit, deinen Atem neu zu entdecken?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Schreib mir kurz, was du dir wünschst – wir finden gemeinsam die passende Einheit für
              dich. Ein kostenloses Kennenlerngespräch ist jederzeit möglich.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <form
              className="mt-12 space-y-4 rounded-[2.5rem] border border-border/70 bg-card p-8 text-left shadow-card md:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Name"
                  className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition focus:border-primary/50"
                />
                <input
                  required
                  type="email"
                  placeholder="E-Mail"
                  className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition focus:border-primary/50"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Deine Nachricht"
                className="w-full rounded-2xl border border-input bg-background px-5 py-4 text-sm outline-none transition focus:border-primary/50"
              />
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-soft transition hover:brightness-110"
              >
                Kennenlerngespräch anfragen
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Oder direkt per E-Mail: office@transland.at
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/70 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl">Michaela Seiß</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Breathwork · Weiz &amp; Eggersdorf, Steiermark
            </p>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Atme. Spüre. Komm bei dir an.
          </p>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Michaela Seiß
            </p>
            <a
              href="#impressum"
              className="rounded-full border border-primary/20 px-5 py-2 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
            >
              Impressum
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

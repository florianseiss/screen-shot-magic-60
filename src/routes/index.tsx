import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import heroImg from "@/assets/hero-breath.jpg";
import sessionImg from "@/assets/session-room.jpg";
import handsImg from "@/assets/hands-breath.jpg";
import landscapeImg from "@/assets/styria-landscape.jpg";

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
                src={handsImg}
                alt="Hände ruhen auf Brustkorb und Bauch beim bewussten Atmen"
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

      {/* Session Bild */}
      <section className="px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[3rem] shadow-soft">
            <img
              src={sessionImg}
              alt="Heller, gemütlicher Raum mit Matten, Decken und Kerzen für Breathwork-Sessions"
              width={1408}
              height={1008}
              loading="lazy"
              className="h-[26rem] w-full object-cover md:h-[34rem]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/45 to-transparent" />
            <blockquote className="absolute bottom-10 left-8 max-w-md text-2xl leading-snug text-primary-foreground md:left-14 md:text-3xl">
              „Dein Atem kennt den Weg zurück zu dir.“
            </blockquote>
          </div>
        </Reveal>
      </section>

      {/* Zertifizierungen */}
      <section className="bg-sky-soft/60 px-6 py-24 md:py-32">
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
              src={landscapeImg}
              alt="Sanfte grüne Hügellandschaft in der Steiermark bei Weiz"
              width={1600}
              height={912}
              loading="lazy"
              className="h-80 w-full rounded-[3rem] object-cover shadow-card md:h-96"
            />
          </Reveal>
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
                Oder direkt per E-Mail: kontakt@michaela-seiss.at
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/70 px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl">Michaela Seiß</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Breathwork · Weiz &amp; Eggersdorf, Steiermark
            </p>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Atme. Spüre. Komm bei dir an.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Michaela Seiß
          </p>
        </div>
      </footer>
    </main>
  );
}

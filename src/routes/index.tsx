import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ConsentProvider, useConsent } from "@/components/CookieConsent";
import { MapEmbed } from "@/components/MapEmbed";
import groundAsset from "@/assets/ground-breath.jpg.asset.json";
import portraitAsset from "@/assets/michaela-portrait.jpg.asset.json";
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

const contact = {
  phone: "+43 660 4643 406",
  phoneHref: "tel:+436604643406",
  email: "office@transland.at",
};

type Appointment = {
  date: string;
  time?: string;
  place: string;
  type: string;
};

const dates: Appointment[] = [
  {
    date: "Do, 22. Oktober 2026",
    place: "Yogastudio Bewusst:Sein, Weiz",
    type: "Conscious Connected Breathwork (CCB)",
  },
  {
    date: "So, 25. Oktober 2026",
    time: "19:00 – 20:30",
    place: "Eggersdorf",
    type: "Conscious Connected Breathwork (CCB)",
  },
  {
    date: "Do, 12. November 2026",
    place: "Yogastudio Bewusst:Sein, Weiz",
    type: "Breath Flow",
  },
  {
    date: "So, 22. November 2026",
    time: "19:00 – 20:30",
    place: "Eggersdorf",
    type: "Slow Breath",
  },
  {
    date: "Do, 3. Dezember 2026",
    place: "Yogastudio Bewusst:Sein, Weiz",
    type: "Conscious Connected Breathwork (CCB)",
  },
  {
    date: "Do, 17. Dezember 2026",
    place: "Yogastudio Bewusst:Sein, Weiz",
    type: "Slow Breath",
  },
  {
    date: "So, 20. Dezember 2026",
    time: "19:00 – 20:30",
    place: "Eggersdorf",
    type: "Conscious Connected Breathwork (CCB)",
  },
];


function PrivacyModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Datenschutzerklärung"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-background/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded-[2.5rem] border border-border/70 bg-card p-8 shadow-soft md:p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
        >
          ✕
        </button>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Rechtliches</p>
          <h2 className="mt-4 text-3xl leading-tight md:text-4xl">Datenschutzerklärung</h2>

          <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              In folgender Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der
              Datenverarbeitung im Rahmen unserer Webseite. Wir erheben und verarbeiten
              personenbezogene Daten nur auf Grundlage der gesetzlichen Bestimmungen
              (Datenschutzgrundverordnung, Telekommunikationsgesetz 2003).
            </p>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Zugriffsdaten</h3>
              <p>
                Sobald Sie als Benutzer auf unsere Webseite zugreifen oder diese besuchen, wird Ihre
                IP-Adresse sowie Beginn und Ende der Sitzung erfasst. Dies ist technisch bedingt und
                stellt somit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO dar.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Kontakt mit uns</h3>
              <p>
                Wenn Sie uns entweder über unser Kontaktformular auf unserer Webseite oder per E-Mail
                kontaktieren, dann werden die von Ihnen an uns übermittelten Daten zwecks Bearbeitung
                Ihrer Anfrage oder für den Fall von weiteren Anschlussfragen für sechs Monate bei uns
                gespeichert. Es erfolgt, ohne Ihre Einwilligung, keine Weitergabe Ihrer übermittelten
                Daten.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Datenspeicherung</h3>
              <p>
                Im Rahmen der Erleichterung des Einkaufsvorganges und zur späteren Vertragsabwicklung
                werden vom Webshop-Betreiber im Rahmen von Cookies die IP-Adresse des Anschlussinhabers
                gespeichert.
              </p>
              <p>
                Die von Ihnen bereitgestellten Daten sind für die Vertragserfüllung und zur Durchführung
                vorvertraglicher Maßnahmen erforderlich. Ein Vertragsabschluss ohne dieser Daten ist
                nicht möglich. Eine Übermittlung der erhobenen Daten an Dritte erfolgt nicht, mit Ausnahme
                der Übermittlung von Zahlungsdaten an die abwickelnden Bankinstitute/Zahlungsdienstleister
                zum Zwecke der Abbuchung des Einkaufspreises, an das von uns beauftragte
                Versandunternehmen, welches mit der Zustellung der Ware beauftragt ist, und unseren
                Steuerberater zur Erfüllung unserer steuerrechtlichen Verpflichtungen.
              </p>
              <p>
                Sollten Sie den Einkaufsvorgang abbrechen, werden diese bei uns gespeicherten Daten
                gelöscht. Sollte ein Vertragsabschluss zustande kommen, werden sämtliche Daten,
                resultierend aus dem Vertragsverhältnis, bis zum Ablauf der steuerrechtlichen
                Aufbewahrungsfrist (7 Jahre) gespeichert. Der übermittelte Name, die Anschrift, gekaufte
                Waren und Kaufdatum werden darüber hinaus bis zum Ablauf der Produkthaftung (10 Jahre)
                gespeichert. Die Datenverarbeitung erfolgt auf Basis der gesetzlichen Bestimmungen des §
                165 Abs 3 TKG 2021 sowie des Art 6 Abs 1 lit a (Einwilligung) und/oder lit b (notwendig zur
                Vertragserfüllung) der DSGVO.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Cookies</h3>
              <p>
                Unsere Website verwendet so genannte Cookies. Dabei handelt es sich um kleine Textdateien,
                die mit Hilfe des Browsers auf Ihrem Endgerät abgelegt werden. Sie richten keinen Schaden
                an. Wir nutzen Cookies dazu, unser Angebot nutzerfreundlich zu gestalten. Einige Cookies
                bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Sie ermöglichen es uns,
                Ihren Browser beim nächsten Besuch wiederzuerkennen. Wenn Sie dies nicht wünschen, so
                können Sie Ihren Browser so einrichten, dass er Sie über das Setzen von Cookies informiert
                und Sie dies nur im Einzelfall erlauben. Bei der Deaktivierung von Cookies kann die
                Funktionalität unserer Website eingeschränkt sein.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Google Maps</h3>
              <p>
                Unsere Website verwendet Funktionen des Webkartendienstes „Google Maps“. Der
                Dienstanbieter dieser Funktion ist:
              </p>
              <p className="mt-2">
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland<br />
                Tel: +353 1 543 1000
              </p>
              <p>
                Im Zuge der Nutzung von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern und zu
                verarbeiten. Google überträgt in der Regel an einen Server in den USA und speichert die Daten
                dort. Die Verarbeitung geschieht durch den Diensteanbieter (oben genannt), der Betreiber
                dieser Homepage hat keinen Einfluss auf die Übertragung der Daten.
              </p>
              <p>
                Die Kartendarstellung wird auf dieser Webseite <strong>nicht automatisch</strong> geladen.
                Stattdessen sehen Sie zunächst einen Platzhalter; erst wenn Sie aktiv auf „Karte laden“
                klicken oder die Kategorie „Externe Inhalte“ in den Cookie-Einstellungen akzeptieren, wird
                die Karte eingebunden und eine Verbindung zum Anbieter hergestellt.
              </p>
              <p>
                Die Datenverarbeitung erfolgt daher ausschließlich auf Basis Ihrer Einwilligung gemäß
                Art. 6 Abs. 1 lit. a DSGVO sowie § 165 Abs 3 TKG 2021. Sie können Ihre Einwilligung
                jederzeit über den Link „Cookie-Einstellungen“ im Fußbereich der Webseite widerrufen.
              </p>
              <p>
                Weitere Informationen über den Umgang mit Nutzerdaten des Dienstebieters „Google“ können
                Sie der Datenschutzerklärung entnehmen:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
              </p>
              <p>
                Google verarbeitet die Daten auch in den USA, ist jedoch nach dem EU-US Data Privacy
                Framework (DPF) zertifiziert:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  https://www.dataprivacyframework.gov/
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Google Fonts</h3>
              <p>
                Unsere Website verwendet Schriftarten von „Google Fonts“. Der Dienstanbieter dieser
                Funktion ist:
              </p>
              <p className="mt-2">
                Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland<br />
                Tel: +353 1 543 1000
              </p>
              <p>
                Die verwendeten Schriftarten („Cormorant Garamond“ und „Karla“) werden{" "}
                <strong>lokal auf unserem Server gehostet</strong> und direkt von dieser Webseite
                geladen. Dadurch besteht beim Laden der Schriftarten keine Verbindung zu Servern von
                Google, es werden keine Daten (insbesondere keine IP-Adresse) an Google übertragen und
                es ist auch keine Einwilligung dafür erforderlich.
              </p>
              <p>
                Weitere Informationen zu Google Fonts erhalten Sie unter:{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-2"
                >
                  https://developers.google.com/fonts/faq
                </a>
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Server-Log Files</h3>
              <p>
                Diese Webseite und der damit verbundene Provider erhebt im Zuge der Webseitennutzung
                automatisch Informationen im Rahmen sogenannter „Server-Log Files“. Dies betrifft
                insbesondere:
              </p>
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>IP-Adresse oder Hostname</li>
                <li>den verwendeten Browser</li>
                <li>Aufenthaltsdauer auf der Webseite sowie Datum und Uhrzeit</li>
                <li>aufgerufene Seiten der Webseite</li>
                <li>Spracheinstellungen und Betriebssystem</li>
                <li>„Leaving-Page“ (auf welcher URL hat der Benutzer die Webseite verlassen)</li>
                <li>ISP (Internet Service Provider)</li>
              </ul>
              <p>
                Diese erhobenen Informationen werden nicht personenbezogen verarbeitet oder mit
                personenbezogenen Daten in Verbindung gebracht.
              </p>
              <p>
                Der Webseitenbetreiber behält es sich vor, im Falle von Bekanntwerden rechtswidriger
                Tätigkeiten, diese Daten auszuwerten oder zu überprüfen.
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-base font-medium text-foreground">Ihre Rechte als Betroffener</h3>
              <p>
                Sie als Betroffener haben bezüglich Ihrer Daten, welche bei uns gespeichert sind,
                grundsätzlich ein Recht auf:
              </p>
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>Auskunft</li>
                <li>Löschung der Daten</li>
                <li>Berichtigung der Daten</li>
                <li>Übertragbarkeit der Daten</li>
                <li>Widerruf und Widerspruch zur Datenverarbeitung</li>
                <li>Einschränkung</li>
              </ul>
              <p>
                Wenn Sie vermuten, dass im Zuge der Verarbeitung Ihrer Daten Verstöße gegen das
                Datenschutzrecht passiert sind, so haben Sie die Möglichkeit, sich bei uns ({" "}
                <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
                  {contact.email}
                </a>
                ) oder der Datenschutzbehörde zu beschweren.
              </p>
            </div>

            <div className="rounded-2xl border border-primary/15 bg-secondary p-5 text-foreground">
              <h3 className="mb-2 text-base font-medium">Kontaktdaten</h3>
              <p>Webseitenbetreiber: Michaela Seiß</p>
              <p>
                Telefonnummer:{" "}
                <a href={contact.phoneHref} className="text-primary underline underline-offset-2">
                  {contact.phone}
                </a>
              </p>
              <p>
                E-Mail:{" "}
                <a href={`mailto:${contact.email}`} className="text-primary underline underline-offset-2">
                  {contact.email}
                </a>
              </p>
            </div>

            <p className="text-xs text-muted-foreground">
              Rechtstext von Quelle: fairesRecht.at in Kooperation mit Rechtsanwalt für Scheidung
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


function Index() {
  return (
    <ConsentProvider>
      <IndexContent />
    </ConsentProvider>
  );
}

function IndexContent() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const { consent, openSettings } = useConsent();

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
              <a href="#termine" className="transition hover:text-primary">
                Nächste Termine
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
          src={groundAsset.url}
          alt="Michaela Seiß liegt im Laub, eine Hand auf der Brust, die andere auf dem Bauch"
          width={1600}
          height={1208}
          className="absolute inset-0 h-full w-full object-cover object-center grayscale-[35%] brightness-[1.05] contrast-[0.94]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/35" />
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
                alt="Michaela Seiß, zertifizierte Breathwork-Trainerin, im Sonnenlicht vor grünen Blättern"
                width={1200}
                height={1600}
                loading="lazy"
                className="relative aspect-[4/5] w-full rounded-[3rem] object-cover object-top shadow-card"
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

      {/* Nächste Termine */}
      <section id="termine" className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Termine</p>
            <h2 className="mt-5 text-4xl md:text-5xl">Nächste Termine</h2>
            <p className="mt-5 text-muted-foreground">
              Die nächsten Einheiten in Weiz und Eggersdorf – begrenzte Plätze, Anmeldung
              notwendig.
            </p>
          </Reveal>
          <div className="mt-14 space-y-5">
            {dates.map((d, i) => (
              <Reveal key={d.date} delay={i * 90}>
                <article className="flex flex-col gap-5 rounded-[2rem] border border-border/70 bg-card p-7 shadow-card transition hover:shadow-soft md:flex-row md:items-center md:justify-between md:p-8">
                  <div className="flex flex-col gap-1">
                    <p className="font-display text-2xl leading-snug text-primary">{d.date}</p>
                    <p className="text-sm text-muted-foreground">
                      {d.time ? `${d.time} · ${d.place}` : d.place}
                    </p>
                    <p className="mt-1 text-[0.95rem]">{d.type}</p>
                  </div>
                  <a
                    href="#kontakt"
                    className="shrink-0 rounded-full bg-primary px-8 py-3.5 text-center text-sm font-medium uppercase tracking-widest text-primary-foreground shadow-soft transition hover:brightness-110"
                  >
                    Zum Kontakt
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <p className="rounded-[1.5rem] border border-border/70 bg-secondary/40 px-6 py-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Eggersdorf:</span> sonntags 19:00 –
                20:30, Beitrag €20, Anmeldung notwendig.
              </p>
              <p className="rounded-[1.5rem] border border-border/70 bg-secondary/40 px-6 py-5 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Weiz:</span> weitere Termine im
                Stundenplan des Studios –{" "}
                <a
                  href="https://www.bewusstsein-studio.at/stundenplan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline underline-offset-4"
                >
                  bewusstsein-studio.at/stundenplan
                </a>
                .
              </p>
            </div>
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
                img: sevenDirectionsBadge.url,
                alt: "Zertifikat Certified Practitioner der Seven Directions Breathwork School",
              },
              {
                title: "Ethically Compliant Breathworker",
                sub: "Global Professional Breathwork Alliance (GPBA)",
                img: gpbaBadge.url,
                alt: "Siegel Ethically Compliant Breathworker der Global Professional Breathwork Alliance",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 140}>
                <div className="flex h-full flex-col items-center gap-4 rounded-[2rem] border border-primary/15 bg-card px-8 py-10 shadow-card">
                  <img
                    src={b.img}
                    alt={b.alt}
                    width={400}
                    height={400}
                    loading="lazy"
                    className="h-28 w-28 object-contain md:h-32 md:w-32"
                  />
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
              Sessions in Weiz, Eggersdorf und Ilz
            </h2>
            <p className="mt-6 text-[1.05rem] leading-relaxed text-muted-foreground">
              Meine Breathwork-Einheiten finden in ruhigen Räumen in Weiz, in Eggersdorf bei Graz und
              in Ilz statt – mitten in der Steiermark, umgeben von Natur. Einzelsessions und kleine
              Gruppen nach Vereinbarung.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Weiz", "Eggersdorf bei Graz", "Ilz", "Steiermark"].map((t) => (
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

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
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
            {
              name: "Ilz",
              src: "https://www.openstreetmap.org/export/embed.html?bbox=15.9000%2C47.0000%2C15.9800%2C47.0500&layer=mapnik&marker=47.0250%2C15.9400",
              link: "https://www.openstreetmap.org/?mlat=47.0250&mlon=15.9400#map=13/47.0250/15.9400",
            },
          ].map((m, i) => (
            <Reveal key={m.name} delay={i * 140}>
              <MapEmbed name={m.name} src={m.src} link={m.link} />
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider />

      {/* Kontakt */}
      <section id="kontakt" className="bg-sky-soft/60 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-primary/70">Kontakt</p>
            <h2 className="mt-5 text-4xl leading-tight text-balance-tight md:text-5xl">
              Ruf mich an oder schreib mir
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Am schnellsten geht es direkt – ruf mich an oder schreib mir eine E-Mail.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              <a
                href={contact.phoneHref}
                className="flex flex-col items-center gap-2 rounded-[2rem] border border-primary/15 bg-card px-8 py-9 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/60">Anrufen</span>
                <span className="font-display text-2xl text-primary">{contact.phone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex flex-col items-center gap-2 rounded-[2rem] border border-primary/15 bg-card px-8 py-9 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-primary/60">Schreiben</span>
                <span className="font-display text-2xl text-primary">{contact.email}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>


      {/* Footer */}
      <footer
        className={`border-t border-border/70 px-6 py-14 ${consent === null ? "pb-72 md:pb-64" : ""}`}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="font-display text-2xl">Michaela Seiß</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Breathwork aus Eggersdorf, Steiermark
            </p>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Atme. Spüre. Komm bei dir an.
          </p>
          <div className="flex flex-col items-center gap-3 md:items-end">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Michaela Seiß
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="#impressum"
                className="rounded-full border border-primary/20 px-5 py-2 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
              >
                Impressum
              </a>
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="rounded-full border border-primary/20 px-5 py-2 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
              >
                Datenschutzerklärung
              </button>
              <button
                type="button"
                onClick={openSettings}
                className="rounded-full border border-primary/20 px-5 py-2 text-xs font-medium text-muted-foreground transition hover:bg-secondary"
              >
                Cookie-Einstellungen
              </button>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </main>
  );
}

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type ConsentState = {
  necessary: true;
  external: boolean;
  statistics: boolean;
};

const STORAGE_KEY = "ms-consent-v1";

type Ctx = {
  consent: ConsentState | null;
  externalAllowed: boolean;
  save: (c: Omit<ConsentState, "necessary">) => void;
  openSettings: () => void;
};

const ConsentContext = createContext<Ctx | null>(null);

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ConsentState;
        setConsent({ necessary: true, external: !!parsed.external, statistics: !!parsed.statistics });
      } else {
        setBannerOpen(true);
      }
    } catch {
      setBannerOpen(true);
    }
  }, []);

  const save = useCallback((c: Omit<ConsentState, "necessary">) => {
    const next: ConsentState = { necessary: true, external: c.external, statistics: c.statistics };
    setConsent(next);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setBannerOpen(false);
    setSettingsOpen(false);
  }, []);

  const openSettings = useCallback(() => {
    setSettingsOpen(true);
    setBannerOpen(false);
  }, []);

  return (
    <ConsentContext.Provider
      value={{ consent, externalAllowed: !!consent?.external, save, openSettings }}
    >
      {children}
      {bannerOpen && <ConsentBanner onSave={save} onSettings={openSettings} />}
      {settingsOpen && (
        <ConsentSettings
          initial={consent}
          onSave={save}
          onClose={() => setSettingsOpen(false)}
        />
      )}
    </ConsentContext.Provider>
  );
}

const btnBase =
  "inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition sm:w-auto sm:min-w-[10rem]";

function ConsentBanner({
  onSave,
  onSettings,
}: {
  onSave: (c: { external: boolean; statistics: boolean }) => void;
  onSettings: () => void;
}) {
  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie-Hinweis"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4"
    >
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border/70 bg-card/95 p-6 shadow-soft backdrop-blur md:p-8">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Cookies</p>
        <h2 className="mt-3 font-display text-2xl leading-snug">Deine Auswahl</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Wir verwenden nur technisch notwendige Cookies. Externe Inhalte (Karten) werden erst
          geladen, wenn du zustimmst. Du kannst deine Auswahl jederzeit im Fußbereich ändern.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onSave({ external: true, statistics: true })}
            className={`${btnBase} bg-primary text-primary-foreground hover:brightness-110`}
          >
            Alle akzeptieren
          </button>
          <button
            type="button"
            onClick={() => onSave({ external: false, statistics: false })}
            className={`${btnBase} bg-primary text-primary-foreground hover:brightness-110`}
          >
            Alle ablehnen
          </button>
        </div>
        <button
          type="button"
          onClick={onSettings}
          className="mt-4 text-xs uppercase tracking-widest text-primary underline underline-offset-4"
        >
          Einstellungen
        </button>
      </div>
    </div>
  );
}

function Toggle({
  label,
  description,
  checked,
  disabled,
  onChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <label className="flex items-start gap-4 rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 accent-[var(--primary)]"
      />
      <span>
        <span className="block text-sm font-medium text-foreground">{label}</span>
        <span className="mt-1 block text-sm text-muted-foreground">{description}</span>
      </span>
    </label>
  );
}

function ConsentSettings({
  initial,
  onSave,
  onClose,
}: {
  initial: ConsentState | null;
  onSave: (c: { external: boolean; statistics: boolean }) => void;
  onClose: () => void;
}) {
  const [external, setExternal] = useState(!!initial?.external);
  const [statistics, setStatistics] = useState(!!initial?.statistics);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen"
      className="fixed inset-0 z-[95] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-lg rounded-[2.5rem] border border-border/70 bg-card p-8 shadow-soft">
        <p className="text-xs uppercase tracking-[0.3em] text-primary/70">Einstellungen</p>
        <h2 className="mt-3 font-display text-2xl">Cookie-Kategorien</h2>
        <div className="mt-6 space-y-3">
          <Toggle
            label="Notwendig"
            description="Für den Betrieb der Seite erforderlich. Immer aktiv."
            checked
            disabled
          />
          <Toggle
            label="Externe Inhalte"
            description="Kartendarstellung (Google Maps / OpenStreetMap). Beim Laden wird deine IP-Adresse an den Anbieter übertragen."
            checked={external}
            onChange={setExternal}
          />
          <Toggle
            label="Statistik"
            description="Anonyme Auswertung der Seitennutzung. Derzeit nicht im Einsatz."
            checked={statistics}
            onChange={setStatistics}
          />
        </div>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onSave({ external, statistics })}
            className={`${btnBase} bg-primary text-primary-foreground hover:brightness-110`}
          >
            Auswahl speichern
          </button>
          <button
            type="button"
            onClick={onClose}
            className={`${btnBase} border border-border/70 text-foreground hover:bg-secondary`}
          >
            Abbrechen
          </button>
        </div>
      </div>
    </div>
  );
}

// @ts-nocheck
"use client";
import React, { useState } from "react";

const LOGO_SRC = "/assets/platzhelden24_ohne_unteren_text_transparent.png";

const navItems = [
  { label: "Start", href: "#top" },
  { label: "Problem → Lösung", href: "#problem" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Vorteile", href: "#vorteile" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Ablauf", href: "#ablauf" },
  { label: "Anfragen", href: "#kontakt" },
];

const trustItems = [
  "Kostenlose Erstberatung",
  "Individuelles Angebot je Auftrag",
  "Besenreine Übergabe",
  "Umweltgerechte Entsorgung",
];

const requestServices = [
  "Wohnungsentrümpelung",
  "Hausentrümpelung",
  "Keller",
  "Dachboden",
  "Garage",
  "Büro / Gewerbe",
  "Haushaltsauflösung",
  "Ausmisten & Sortieren",
  "Sperrmüllentsorgung",
  "Elektroschrott",
];

const services = [
  {
    icon: "🏠",
    title: "Wohnung & Haus",
    text: "Wir räumen Wohnungen, Häuser und einzelne Räume sauber, schnell und zuverlässig.",
    points: ["Möbel", "Kartons", "Hausrat"],
  },
  {
    icon: "📦",
    title: "Keller, Dachboden & Garage",
    text: "Wir schaffen Platz in vollgestellten Nebenräumen, auch bei schweren und sperrigen Gegenständen.",
    points: ["Sortieren", "Tragen", "Räumen"],
  },
  {
    icon: "🏢",
    title: "Gewerbe & Büro",
    text: "Räumung von Büros, Lagern und Gewerbeflächen mit klarer Planung und kurzer Ausfallzeit.",
    points: ["Inventar", "Akten", "Büromöbel"],
  },
  {
    icon: "✨",
    title: "Ausmisten mit System",
    text: "Wir helfen beim Selektieren, Sortieren und Trennen. Ruhig, respektvoll und praktisch.",
    points: ["Behalten", "Trennen", "Ordnen"],
  },
  {
    icon: "🚚",
    title: "Transport & Entsorgung",
    text: "Sperrmüll, Elektrogeräte und weitere Gegenstände werden fachgerecht entsorgt.",
    points: ["Abholung", "Transport", "Entsorgung"],
  },
  {
    icon: "🌱",
    title: "Faire Entsorgung",
    text: "Wir trennen Materialien sinnvoll und achten auf eine saubere, verantwortungsvolle Entsorgung.",
    points: ["Umweltbewusst", "Sorgfältig", "Ordentlich"],
  },
];

const advantages = [
  {
    icon: "⏱️",
    title: "Schnell verfügbar",
    text: "Wir reagieren zügig und planen Ihre Entrümpelung zuverlässig ein.",
  },
  {
    icon: "🛡️",
    title: "Diskret & sauber",
    text: "Wir arbeiten respektvoll, unauffällig und hinterlassen die Räume besenrein.",
  },
  {
    icon: "🌱",
    title: "Umweltgerecht",
    text: "Wir trennen, transportieren und entsorgen so verantwortungsvoll wie möglich.",
  },
  {
    icon: "✅",
    title: "Alles aus einer Hand",
    text: "Besichtigung, Planung, Räumung, Transport und Entsorgung. Wir kümmern uns um alles.",
  },
];

const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    text: "Sie kontaktieren uns per Telefon, WhatsApp oder Formular und beschreiben kurz Ihr Anliegen.",
  },
  {
    number: "02",
    title: "Auftrag einschätzen",
    text: "Wir klären Umfang, Etage, Zimmerzahl, Zugänglichkeit und mögliche Besonderheiten.",
  },
  {
    number: "03",
    title: "Angebot erhalten",
    text: "Sie bekommen ein individuelles Angebot. Der Preis richtet sich nach Aufwand, Menge, Etage und Entsorgung.",
  },
  {
    number: "04",
    title: "Räumung & Übergabe",
    text: "Wir entrümpeln, transportieren, entsorgen und übergeben die Räume besenrein.",
  },
];

const faqs = [
  {
    q: "Was kostet eine Entrümpelung?",
    a: "Der Preis wird für jeden Auftrag einzeln kalkuliert. Entscheidend sind Umfang, Menge, Etage, Zugänglichkeit, Transportweg und Entsorgungsart.",
  },
  {
    q: "Wie wird der Preis berechnet?",
    a: "Wir erstellen für jeden Auftrag ein individuelles Angebot. Entscheidend sind Umfang, Menge, Etage, Zugänglichkeit, Transportweg und Entsorgungsart.",
  },
  {
    q: "Muss ich selbst etwas vorbereiten?",
    a: "Nein. Sie können uns einfach zeigen, was geräumt werden soll. Auf Wunsch helfen wir auch beim Sortieren und Ausmisten.",
  },
  {
    q: "Kann ich mehrere Bereiche gleichzeitig anfragen?",
    a: "Ja. Sie können zum Beispiel Keller, Garage, Dachboden und Wohnung zusammen anfragen. Im Formular können Sie mehrere Leistungen auswählen.",
  },
  {
    q: "Kann ich Bilder mitschicken?",
    a: "Ja. Bilder helfen uns, den Aufwand schneller einzuschätzen. Im Anfrageformular gibt es dafür ein optionales Upload-Feld.",
  },
  {
    q: "Entsorgen Sie auch Elektroschrott und Sperrmüll?",
    a: "Ja. Wir kümmern uns um Sperrmüll, Elektrogeräte und andere Gegenstände. Besondere Abfälle klären wir vorab, damit alles fachgerecht entsorgt wird.",
  },
  {
    q: "Arbeiten Sie auch für Firmen?",
    a: "Ja. Wir räumen Büros, Lager, Gewerbeflächen und Nebenräume für Unternehmen in Kleve und am Niederrhein.",
  },
];

const legalSections = [
  {
    id: "impressum",
    title: "Impressum",
    content: [
      "Angaben gemäß § 5 DDG",
      "Platzhelden24",
      "Inhaber: Granit Brovina",
      "Straße und Hausnummer bitte einfügen",
      "47533 Kleve",
      "Deutschland",
      "Telefon: 02821 8383650",
      "E-Mail: info@platzhelden24.de",
      "Website: www.platzhelden24.de",
      "Umsatzsteuer-ID: bitte einfügen, falls vorhanden",
      "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Granit Brovina, Anschrift wie oben.",
      "Haftung für Inhalte: Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernehmen wir keine Gewähr. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.",
      "Haftung für Links: Diese Website kann Links zu externen Websites enthalten. Auf deren Inhalte haben wir keinen Einfluss. Für fremde Inhalte übernehmen wir keine Haftung.",
    ],
  },
  {
    id: "datenschutz",
    title: "Datenschutzerklärung",
    content: [
      "Verantwortlicher für die Datenverarbeitung auf dieser Website ist Platzhelden24, Inhaber: Granit Brovina. Die vollständige Anschrift und Telefonnummer werden im Impressum ergänzt.",
      "Wir verarbeiten personenbezogene Daten nur, soweit dies für die Bearbeitung Ihrer Anfrage, die Kommunikation mit Ihnen, die Angebotserstellung, die Durchführung eines Auftrags oder die Erfüllung gesetzlicher Pflichten erforderlich ist.",
      "Beim Besuch dieser Website können technisch notwendige Daten verarbeitet werden, zum Beispiel IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem und aufgerufene Seiten. Diese Daten dienen der sicheren Bereitstellung der Website.",
      "Wenn Sie das Kontaktformular nutzen, verarbeiten wir die von Ihnen eingegebenen Daten. Dazu können Name, Telefonnummer, E-Mail-Adresse, Ort, Etage, Zimmerzahl, ausgewählte Leistungen, Nachricht und freiwillig hochgeladene Bilder gehören.",
      "Hochgeladene Bilder werden ausschließlich zur Einschätzung des Auftrags und zur Angebotserstellung genutzt. Bitte laden Sie nur Bilder hoch, die für die Anfrage notwendig sind.",
      "Rechtsgrundlagen der Verarbeitung sind Art. 6 Abs. 1 lit. b DSGVO für vorvertragliche Maßnahmen und Vertragserfüllung, Art. 6 Abs. 1 lit. f DSGVO für berechtigte Interessen an sicherer Website-Bereitstellung und Kommunikation sowie Art. 6 Abs. 1 lit. c DSGVO für gesetzliche Pflichten.",
      "Ihre Daten werden gelöscht, sobald sie für den jeweiligen Zweck nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.",
      "Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Außerdem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.",
      "Eine Weitergabe an Dritte erfolgt nur, wenn dies zur Auftragsabwicklung erforderlich ist, eine gesetzliche Pflicht besteht oder Sie eingewilligt haben.",
      "Hinweis: Diese Datenschutzerklärung muss final an den tatsächlichen Website-Betrieb angepasst werden, insbesondere an Hosting, Kontaktformular, E-Mail-Dienst, Analyse-Tools, Karten, Schriftarten und Cookie-Banner.",
    ],
  },
  {
    id: "agb",
    title: "AGB",
    content: [
      "1. Geltungsbereich: Diese Allgemeinen Geschäftsbedingungen gelten für alle Leistungen von Platzhelden24 im Bereich Entrümpelung, Ausmisten, Räumung, Transport und Entsorgung.",
      "2. Angebot und Vertragsschluss: Angebote werden individuell nach Umfang, Aufwand, Etage, Menge, Zugänglichkeit, Transportweg und Entsorgungsart erstellt. Ein Vertrag kommt zustande, wenn der Kunde das Angebot annimmt.",
      "3. Preise: Es gelten die im jeweiligen Angebot vereinbarten Preise. Da jeder Auftrag unterschiedlich ist, erfolgt die Kalkulation auftragsbezogen. Zusätzliche Leistungen, die erst während der Durchführung erkennbar werden, werden vorab mit dem Kunden abgestimmt.",
      "4. Leistungserbringung: Platzhelden24 führt die vereinbarten Arbeiten sorgfältig und zuverlässig aus. Der Kunde sorgt dafür, dass die Räume zugänglich sind und notwendige Informationen vollständig mitgeteilt werden.",
      "5. Entsorgung: Die Entsorgung erfolgt nach den geltenden Vorschriften. Besondere Abfälle, Gefahrstoffe oder nicht übliche Materialien müssen vorab angegeben werden.",
      "6. Termine: Vereinbarte Termine sind verbindlich, soweit keine unvorhersehbaren Umstände eintreten. Sollte ein Termin verschoben werden müssen, informieren sich beide Seiten rechtzeitig.",
      "7. Haftung: Für Schäden haftet Platzhelden24 nach den gesetzlichen Vorschriften. Für Schäden, die durch unvollständige oder falsche Angaben des Kunden entstehen, wird keine Haftung übernommen, soweit gesetzlich zulässig.",
      "8. Zahlung: Die Zahlung erfolgt gemäß Vereinbarung im Angebot. Fälligkeit, Zahlungsart und Zahlungsfrist werden im jeweiligen Auftrag festgelegt.",
      "9. Schlussbestimmungen: Es gilt deutsches Recht. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.",
      "Hinweis: Diese AGB sind ein Muster und sollten vor Veröffentlichung rechtlich geprüft werden.",
    ],
  },
  {
    id: "widerruf",
    title: "Widerrufsbelehrung",
    content: [
      "Verbraucher haben bei Fernabsatzverträgen grundsätzlich das Recht, binnen 14 Tagen ohne Angabe von Gründen den Vertrag zu widerrufen.",
      "Die Widerrufsfrist beträgt 14 Tage ab dem Tag des Vertragsschlusses. Um Ihr Widerrufsrecht auszuüben, müssen Sie uns mittels einer eindeutigen Erklärung, zum Beispiel per Brief oder E-Mail, über Ihren Entschluss informieren, diesen Vertrag zu widerrufen.",
      "Richten Sie den Widerruf an: Platzhelden24, Inhaber: Granit Brovina, Anschrift bitte einfügen, E-Mail: info@platzhelden24.de.",
      "Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.",
      "Folgen des Widerrufs: Wenn Sie den Vertrag widerrufen, erstatten wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen 14 Tagen ab dem Tag, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.",
      "Haben Sie verlangt, dass die Dienstleistung während der Widerrufsfrist beginnen soll, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zum Widerruf bereits erbrachten Leistungen entspricht.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie-Richtlinie",
    content: [
      "Diese Website verwendet technisch notwendige Cookies und vergleichbare Technologien, soweit sie für den Betrieb der Website erforderlich sind.",
      "Technisch notwendige Cookies dienen zum Beispiel der sicheren Darstellung der Website, der Formularfunktion oder der Speicherung Ihrer Cookie-Auswahl. Diese Cookies können ohne Einwilligung gesetzt werden, soweit sie unbedingt erforderlich sind.",
      "Analyse-, Marketing- oder Tracking-Cookies werden nur eingesetzt, wenn Sie zuvor eingewilligt haben. Falls solche Dienste später eingebunden werden, wird die Cookie-Richtlinie entsprechend ergänzt.",
      "Sie können Ihre Cookie-Einstellungen jederzeit ändern oder eine erteilte Einwilligung widerrufen, sobald ein Cookie-Banner oder ein Einstellungsbereich auf der Website eingebunden ist.",
      "Hinweis: Wenn externe Dienste wie Google Maps, Google Fonts, Analytics, Meta Pixel oder ähnliche Tools genutzt werden, muss diese Cookie-Richtlinie konkret erweitert werden.",
    ],
  },
];


function IconCircle({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${dark ? "bg-slate-950 text-white" : "bg-emerald-100 text-emerald-700"}`}>
      {children}
    </div>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-xs font-black text-white ${className}`}>✓</span>;
}

function XIcon({ className = "" }: { className?: string }) {
  return <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-black text-white ${className}`}>×</span>;
}

function ArrowIcon() {
  return <span className="text-lg font-black">→</span>;
}

function Logo({ large = false }: { large?: boolean }) {
  const [imageOk, setImageOk] = useState(true);

  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Platzhelden24 Startseite">
      {imageOk && (
        <img
          src={LOGO_SRC}
          alt="Platzhelden24 Logo"
          onError={() => setImageOk(false)}
          className={large ? "h-28 w-auto object-contain sm:h-36" : "h-12 w-auto object-contain"}
        />
      )}
      {!imageOk && (
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-xl text-white shadow-lg shadow-emerald-600/25">P</div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-950">Platzhelden24</div>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Ihre Helden für mehr Platz</div>
          </div>
        </div>
      )}
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={`mb-3 text-sm font-bold uppercase tracking-[0.25em] ${dark ? "text-emerald-300" : "text-emerald-700"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${dark ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${dark ? "text-slate-300" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function FAQItem({ item, index }: { item: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-bold text-slate-950">{item.q}</span>
        <span className={`text-xl font-black text-emerald-700 transition ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      {open && <p className="px-5 pb-5 leading-7 text-slate-600">{item.a}</p>}
    </div>
  );
}

function LegalBlock({ section, index }: { section: { id: string; title: string; content: string[] }; index: number }) {
  return (
    <details id={section.id} open={index === 0} className="scroll-mt-28 rounded-2xl border border-slate-800 bg-slate-900 p-5 text-slate-300">
      <summary className="cursor-pointer text-lg font-black text-white">{section.title}</summary>
      <div className="mt-5 space-y-3 text-sm leading-7">
        {section.content.map((paragraph, paragraphIndex) => (
          <p key={`${section.id}-${paragraphIndex}`}>{paragraph}</p>
        ))}
      </div>
    </details>
  );
}

function LegalModal({ section, onClose }: { section: { id: string; title: string; content: string[] } | undefined; onClose: () => void }) {
  if (!section) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm">
      <div className="max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 px-6 py-5">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">Rechtliches</p>
            <h2 className="mt-1 text-2xl font-black text-slate-950">{section.title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-2xl font-black text-slate-700 hover:bg-slate-200"
            aria-label="Fenster schließen"
          >
            ×
          </button>
        </div>

        <div className="max-h-[68vh] overflow-y-auto px-6 py-6">
          <div className="space-y-4 text-sm leading-7 text-slate-700">
            {section.content.map((paragraph, paragraphIndex) => (
              <p key={`${section.id}-modal-${paragraphIndex}`}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platzhelden24Landingpage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState(["Wohnungsentrümpelung"]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeLegalId, setActiveLegalId] = useState(null);
  const activeLegalSection = legalSections.find((section) => section.id === activeLegalId);
  function handleImageChange(event) {
    const newFiles = Array.from(event.target.files || []);

    setSelectedImages((currentFiles) => {
      const existingKeys = new Set(currentFiles.map((file) => `${file.name}-${file.size}-${file.lastModified}`));
      const uniqueNewFiles = newFiles.filter((file) => !existingKeys.has(`${file.name}-${file.size}-${file.lastModified}`));
      return [...currentFiles, ...uniqueNewFiles];
    });

    event.target.value = "";
  }

  function removeSelectedImage(fileToRemove) {
    setSelectedImages((currentFiles) => currentFiles.filter((file) => file !== fileToRemove));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitStatus("");
    setIsSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.delete("leistungen");
    selectedServices.forEach((service) => formData.append("leistungen", service));

    formData.delete("bilder");
    selectedImages.forEach((file) => formData.append("bilder", file));

    try {
      const response = await fetch("/api/anfrage", {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Die Anfrage konnte nicht gesendet werden.");
      }

      setSubmitStatus("success");
      form.reset();
      setSelectedServices([]);
      setSelectedImages([]);
    } catch (error) {
      setSubmitStatus(error.message || "error");
    } finally {
      setIsSubmitting(false);
    }
  }

  function toggleService(service: string) {
    setSelectedServices((current) => (
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service]
    ));
  }

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-emerald-700">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700 lg:inline-flex"
          >
            Angebot anfragen
          </a>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="rounded-xl border border-slate-200 p-2 text-2xl lg:hidden" aria-label="Menü öffnen">
            {mobileOpen ? "×" : "☰"}
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl px-3 py-2 font-semibold text-slate-700 hover:bg-slate-100">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden bg-white">
          <div className="absolute left-1/2 top-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-100 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-800">
                <CheckIcon /> Entrümpelung in Kleve & am Niederrhein
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Ihre Helden für mehr Platz
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-600">
                Platzhelden24 entrümpelt Wohnungen, Häuser, Keller, Dachböden, Garagen und Gewerbeflächen. Schnell, diskret und komplett aus einer Hand.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a href="#kontakt" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-600/25 transition hover:bg-emerald-700">
                  Angebot anfordern <ArrowIcon />
                </a>
                <a href="#leistungen" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 text-base font-black text-slate-950 transition hover:border-emerald-300 hover:bg-emerald-50">
                  Leistungen ansehen
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                    <CheckIcon />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-[2.5rem] border border-slate-200 bg-slate-950 p-4 shadow-2xl">
                <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-950 p-7 text-white">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold">Vorher → Nachher</div>
                    <span className="text-2xl text-emerald-300">✨</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl bg-white/10 p-5 backdrop-blur">
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-red-200">Vorher</p>
                      <div className="space-y-3">
                        <div className="h-20 rounded-2xl bg-white/15" />
                        <div className="grid grid-cols-2 gap-3">
                          <div className="h-16 rounded-2xl bg-white/15" />
                          <div className="h-16 rounded-2xl bg-white/15" />
                        </div>
                        <div className="h-12 rounded-2xl bg-white/15" />
                      </div>
                    </div>
                    <div className="rounded-3xl bg-emerald-500/20 p-5 backdrop-blur">
                      <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-100">Nachher</p>
                      <div className="flex h-[188px] items-center justify-center rounded-3xl border border-emerald-300/40 bg-white/10">
                        <div className="text-center">
                          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 text-xl font-black text-slate-950">✓</div>
                          <p className="text-2xl font-black">Besenrein</p>
                          <p className="mt-1 text-sm text-emerald-50">Raum wieder nutzbar</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl bg-white p-5 text-slate-950">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">Platzhelden24 Service</p>
                        <p className="mt-1 text-2xl font-black">Stressfrei entrümpeln lassen</p>
                      </div>
                      <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-black text-emerald-800">Alles erledigt</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-white/5 p-8 ring-1 ring-white/10">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-red-200">Das kennen viele</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Zu viel Zeug. Zu wenig Zeit. Zu viel Stress.</h2>
              <ul className="mt-8 space-y-4 text-lg text-slate-300">
                {[
                  "Die Wohnung ist vollgestellt",
                  "Keller oder Dachboden sind nicht mehr nutzbar",
                  "Eine Haushaltsauflösung steht an",
                  "Transport und Entsorgung sind schwer zu organisieren",
                ].map((item) => (
                  <li key={item} className="flex gap-3"><XIcon className="mt-1 shrink-0" /> {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] bg-emerald-600 p-8 shadow-2xl shadow-emerald-900/30">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">Unsere Lösung</p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Wir übernehmen die Arbeit komplett.</h2>
              <p className="mt-6 text-lg leading-8 text-emerald-50">
                Platzhelden24 kümmert sich um Planung, Räumung, Transport, Entsorgung und besenreine Übergabe. Sie müssen nichts schleppen und nichts koordinieren.
              </p>
              <a href="#kontakt" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 font-black text-emerald-700 transition hover:bg-emerald-50">
                Jetzt Auftrag anfragen <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="ueber-uns" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-4xl font-black text-emerald-700">100%</p>
                  <p className="mt-2 font-semibold text-slate-600">Diskretion</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-4xl font-black text-emerald-700">A-Z</p>
                  <p className="mt-2 font-semibold text-slate-600">Service</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-4xl font-black text-emerald-700">KLE</p>
                  <p className="mt-2 font-semibold text-slate-600">Regional</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="text-4xl font-black text-emerald-700">Fair</p>
                  <p className="mt-2 font-semibold text-slate-600">Kalkuliert</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Über uns</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Ihr zuverlässiger Partner für Entrümpelung und Ausmisten.</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Platzhelden24 ist für Privatpersonen und Unternehmen da, die schnell und stressfrei Platz schaffen möchten. Wir arbeiten sauber, diskret und lösungsorientiert. Auch bei sensiblen Situationen bleiben wir respektvoll und zuverlässig.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Unser Ziel ist einfach: Sie bekommen wieder freie Räume, klare Strukturen und weniger Belastung. Wir übernehmen die schwere Arbeit.
              </p>
            </div>
          </div>
        </section>

        <section id="vorteile" className="bg-slate-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Ihre Vorteile" title="Mehr Platz ohne Aufwand" text="Kein Schleppen. Kein Organisieren. Keine unnötige Belastung. Wir machen es klar, sauber und verlässlich." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {advantages.map((item) => (
                <div key={item.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <IconCircle>{item.icon}</IconCircle>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="leistungen" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow="Unsere Leistungen" title="Entrümpelung, Ausmisten und Entsorgung" text="Wir räumen, sortieren, transportieren und entsorgen. Für Wohnungen, Häuser, Keller, Dachböden, Garagen, Büros und Gewerbeflächen." />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:border-emerald-200 hover:shadow-xl">
                  <IconCircle dark>{service.icon}</IconCircle>
                  <h3 className="mt-5 text-xl font-black text-slate-950">{service.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.points.map((point) => (
                      <span key={point} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">{point}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ablauf" className="bg-slate-950 px-5 py-20 text-white lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle dark eyebrow="Ablauf" title="So einfach läuft Ihre Entrümpelung ab" text="Von der ersten Anfrage bis zur sauberen Übergabe bleibt alles klar und transparent." />
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step) => (
                <div key={step.number} className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10">
                  <div className="mb-6 text-5xl font-black text-emerald-400">{step.number}</div>
                  <h3 className="text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-emerald-600 p-8 text-white shadow-2xl shadow-emerald-700/20 lg:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-100">Vertrauen & Sicherheit</p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Diskret. Pünktlich. Besenrein.</h2>
                <p className="mt-5 text-lg leading-8 text-emerald-50">
                  Wir wissen, dass Entrümpelungen oft persönliche Gründe haben. Deshalb arbeiten wir ruhig, respektvoll und zuverlässig. Sie bekommen klare Absprachen und eine saubere Durchführung.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {["Klare Absprachen", "Individuelle Kalkulation", "Saubere Übergabe", "Umweltgerechte Entsorgung"].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-4 font-bold backdrop-blur">
                    <CheckIcon /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionTitle eyebrow="FAQ" title="Häufige Fragen" text="Die wichtigsten Antworten vor Ihrer Anfrage." />
            <div className="mt-10 space-y-4">
              {faqs.map((item, index) => <FAQItem key={item.q} item={item} index={index} />)}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-white px-5 py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-emerald-700">Kontakt</p>
              <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Angebot anfordern</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Senden Sie uns Ihre Anfrage. Je genauer die Angaben sind, desto besser können wir den Auftrag einschätzen.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl">☎️</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Telefon</p>
                    <p className="text-lg font-black text-slate-950">02821 8383650</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">E-Mail</p>
                    <p className="text-lg font-black text-slate-950">info@platzhelden24.de</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">Region</p>
                    <p className="text-lg font-black text-slate-950">Kleve & gesamter Niederrhein</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm lg:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Name *</span>
                  <input name="name" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500" placeholder="Ihr Name" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Telefon *</span>
                  <input name="telefon" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500" placeholder="Ihre Telefonnummer" />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-slate-700">E-Mail</span>
                  <input name="email" type="email" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500" placeholder="Ihre E-Mail-Adresse" />
                </label>

                <fieldset className="sm:col-span-2">
                  <legend className="mb-3 block text-sm font-bold text-slate-700">Leistungen auswählen *</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {requestServices.map((service) => {
                      const checked = selectedServices.includes(service);
                      return (
                        <label key={service} className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-bold transition ${checked ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-slate-200 bg-white text-slate-700 hover:border-emerald-300"}`}>
                          <input
                            name="leistungen"
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(service)}
                            className="h-4 w-4 accent-emerald-600"
                          />
                          {service}
                        </label>
                      );
                    })}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Mehrere Auswahlen sind möglich.</p>
                </fieldset>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Anzahl Zimmer</span>
                  <select name="zimmer" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500">
                    <option>Bitte wählen</option>
                    <option>1 Zimmer</option>
                    <option>2 Zimmer</option>
                    <option>3 Zimmer</option>
                    <option>4 Zimmer</option>
                    <option>5 Zimmer</option>
                    <option>Mehr als 5 Zimmer</option>
                    <option>Nur Keller / Garage / Dachboden</option>
                    <option>Gewerbefläche</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Etage</span>
                  <select name="etage" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500">
                    <option>Bitte wählen</option>
                    <option>Erdgeschoss</option>
                    <option>1. Etage</option>
                    <option>2. Etage</option>
                    <option>3. Etage</option>
                    <option>4. Etage oder höher</option>
                    <option>Keller</option>
                    <option>Dachboden</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Aufzug vorhanden?</span>
                  <select name="aufzug" className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500">
                    <option>Bitte wählen</option>
                    <option>Ja</option>
                    <option>Nein</option>
                    <option>Nicht relevant</option>
                  </select>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Ort *</span>
                  <input name="ort" required className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500" placeholder="z. B. Kleve" />
                </label>

                <div className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Bilder hinzufügen optional</span>
                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 transition hover:border-emerald-400">
                    <label
                      htmlFor="bilder-upload"
                      className="inline-flex cursor-pointer items-center justify-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-black text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-700"
                    >
                      Bilder auswählen
                    </label>
                    <input
                      id="bilder-upload"
                      type="file"
                      name="bilder"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <p className="mt-3 text-sm text-slate-500">
                      Sie können mehrfach auf „Bilder auswählen“ klicken. Neue Bilder werden zur Liste hinzugefügt und ersetzen die alten nicht.
                    </p>

                    {selectedImages.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <p className="text-sm font-bold text-slate-700">Ausgewählte Bilder:</p>
                        <div className="grid gap-2">
                          {selectedImages.map((file, index) => (
                            <div key={`${file.name}-${file.size}-${index}`} className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                              <span className="truncate">{file.name}</span>
                              <button
                                type="button"
                                onClick={() => removeSelectedImage(file)}
                                className="shrink-0 rounded-full bg-red-50 px-3 py-1 font-bold text-red-700 hover:bg-red-100"
                              >
                                Entfernen
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-slate-500">Die Bilder werden zusammen mit der Anfrage an Platzhelden24 gesendet.</p>
                </div>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-slate-700">Details zur Anfrage</span>
                  <textarea name="details" className="min-h-32 w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 outline-none transition focus:border-emerald-500" placeholder="Was soll entrümpelt werden? Wie groß ist der Umfang? Gibt es schwere Gegenstände?" />
                </label>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-4 text-base font-black text-white shadow-xl shadow-emerald-600/20 transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {isSubmitting ? "Anfrage wird gesendet..." : "Anfrage senden"} <ArrowIcon />
              </button>
              {submitStatus === "success" && (
                <p className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-center text-sm font-bold text-emerald-800">
                  Ihre Anfrage wurde erfolgreich gesendet.
                </p>
              )}
              {submitStatus && submitStatus !== "success" && (
                <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-800">
                  {submitStatus}
                </p>
              )}
              <p className="mt-4 text-center text-sm text-slate-500">Unverbindlich. Individuell kalkuliert. Bilder werden direkt mitgesendet.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-5 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-slate-800 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-2xl font-black">Platzhelden24</div>
            <p className="mt-2 text-slate-400">Ihre Helden für mehr Platz</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <a href="#top" className="hover:text-white">Start</a>
            <a href="#leistungen" className="hover:text-white">Leistungen</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
            <button type="button" onClick={() => setActiveLegalId("impressum")} className="hover:text-white">Impressum</button>
            <button type="button" onClick={() => setActiveLegalId("datenschutz")} className="hover:text-white">Datenschutz</button>
            <button type="button" onClick={() => setActiveLegalId("agb")} className="hover:text-white">AGB</button>
            <button type="button" onClick={() => setActiveLegalId("widerruf")} className="hover:text-white">Widerruf</button>
            <button type="button" onClick={() => setActiveLegalId("cookies")} className="hover:text-white">Cookies</button>
          </div>
        </div>
      </footer>

      <LegalModal section={activeLegalSection} onClose={() => setActiveLegalId(null)} />
    </div>
  );
}

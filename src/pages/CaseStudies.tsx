import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextReveal from "@/components/TextReveal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import bedLogo from "@/assets/bed-logo.png";
import aflacLogo from "@/assets/brands/aflac-logo.jpg";
import captainsLogo from "@/assets/brands/captains-logo.png";
import metaLogo from "@/assets/brands/meta-logo.png";
import walmartLogo from "@/assets/brands/walmart-logo.png";
import aromaLogo from "@/assets/brands/aroma360-logo.png";
import starkeyLogo from "@/assets/brands/starkey-logo.png";

/* ------------------------------------------------------------------ */
/* Content — every fact below comes from the existing Portfolio page.  */
/* ------------------------------------------------------------------ */

const NDR_LOGO =
  "https://img.logo.dev/nationaldebtrelief.com?token=pk_A1SO0ovWSZa0TRYGcw69Og&size=80&retina=true";

type Quiz = {
  kind: "quiz";
  question: string;
  options: string[];
  answer: number;
};

type Collect = {
  kind: "collect";
  prompt: string;
  items: { name: string; logo: string }[];
};

type CaseFile = {
  id: string;
  file: string; // "File 01"
  brand: string;
  logo: string;
  tag: string;
  brief: string;
  challenge: Quiz | Collect;
  play: string;
  stats: { value: string; label: string }[];
};

const CASES: CaseFile[] = [
  {
    id: "bed",
    file: "01",
    brand: "Black Entrepreneurs Day",
    logo: bedLogo,
    tag: "Live event · Daymond John × Medium Rare",
    brief:
      "Daymond John's annual celebration of Black business and culture, produced with the event team at Medium Rare.",
    challenge: {
      kind: "quiz",
      question: "How many impressions did Black Entrepreneurs Day pull last year?",
      options: ["30 Million", "300 Million", "3 Billion"],
      answer: 2,
    },
    play:
      "Millions of viewers, iconic celebrity guests, hard-hitting roundtables with top brand executives and unforgettable musical performances, with partners including Apple, T-Mobile, Chase, Salesforce, Shopify and Hilton.",
    stats: [
      { value: "3B", label: "Impressions last year" },
      { value: "$1M", label: "Given to Black-owned businesses" },
      { value: "30+", label: "Celebrity guests" },
      { value: "4×", label: "Webby Award winner" },
      { value: "3×", label: "Anthem Award winner" },
      { value: "2×", label: "Official day in NYC & ATL" },
    ],
  },
  {
    id: "captainds",
    file: "02",
    brand: "Captain D's",
    logo: captainsLogo,
    tag: "Commercial · with Daymond John",
    brief:
      "The seafood giant needed a new value proposition and product offering to win over a younger audience.",
    challenge: {
      kind: "quiz",
      question: "Beyond digital, how many key markets did the campaign reach on linear TV?",
      options: ["5", "12", "20"],
      answer: 2,
    },
    play:
      "Teamed up with Daymond to launch a new hand-breaded Chick-N-D's and a $5.99 Meal Deal, taken from digital all the way to linear TV.",
    stats: [
      { value: "20", label: "Key TV markets" },
      { value: "25–44", label: "Age group with a notable awareness lift" },
      { value: "$5.99", label: "Meal Deal launched" },
    ],
  },
  {
    id: "aflac",
    file: "03",
    brand: "Aflac",
    logo: aflacLogo,
    tag: "Commercial · Make Your Mark",
    brief:
      "Aflac's Make Your Mark campaign, supported in collaboration with Daymond John.",
    challenge: {
      kind: "quiz",
      question: "What was Make Your Mark built to do?",
      options: [
        "Launch a new insurance product",
        "Recruit the next generation of agents",
        "Promote a mobile app",
      ],
      answer: 1,
    },
    play:
      "A recruitment campaign to find diverse Aflac brokers and jumpstart their careers as insurance agents.",
    stats: [
      { value: "Recruit", label: "Next-gen, diverse agents" },
      { value: "Reach", label: "More diverse customers" },
      { value: "Serve", label: "The existing Aflac community" },
    ],
  },
  {
    id: "ndr",
    file: "04",
    brand: "National Debt Relief",
    logo: NDR_LOGO,
    tag: "Commercial · with Daymond John",
    brief:
      "Daymond and National Debt Relief teamed up to tell a story that reaches people authentically.",
    challenge: {
      kind: "quiz",
      question: "Who was the story built to reach?",
      options: [
        "First-time homebuyers",
        "People facing financial challenges",
        "Small-business owners",
      ],
      answer: 1,
    },
    play:
      "A campaign that doesn't just educate. It empowers consumers to take control of their financial future.",
    stats: [
      { value: "Educate", label: "Make debt relief understandable" },
      { value: "Empower", label: "Put people back in control" },
    ],
  },
  {
    id: "social",
    file: "05",
    brand: "Branded Social",
    logo: metaLogo,
    tag: "Social content · with Daymond John",
    brief:
      "Crafting compelling social posts alongside Daymond John for some of the biggest companies around.",
    challenge: {
      kind: "collect",
      prompt: "Tap every logo to add it to your collection.",
      items: [
        { name: "Meta", logo: metaLogo },
        { name: "Walmart", logo: walmartLogo },
        { name: "Aflac", logo: aflacLogo },
        { name: "National Debt Relief", logo: NDR_LOGO },
        { name: "Aroma360", logo: aromaLogo },
        { name: "Starkey", logo: starkeyLogo },
      ],
    },
    play:
      "Branded posts for Meta, Walmart, Aflac Insurance, National Debt Relief, Aroma360, Starkey Hearing Technologies and much, much more.",
    stats: [
      { value: "6+", label: "Major brands" },
      { value: "1", label: "Voice: Daymond John" },
    ],
  },
  {
    id: "ceo",
    file: "06",
    brand: "CEO Access",
    logo: "",
    tag: "Personal brand program",
    brief:
      "Today's CEOs aren't just running companies, they're building personal brands. CEO Access helps them become recognized industry influencers.",
    challenge: {
      kind: "quiz",
      question: "Which pillar lines up keynotes, media features and networking events?",
      options: ["Brand Foundation", "Influence & Visibility", "Social Positioning"],
      answer: 1,
    },
    play:
      "Guided by Daymond John's expertise and network, working directly with CEOs on brand assets, digital presence and strategic opportunities.",
    stats: [
      { value: "Foundation", label: "Positioning, messaging, visuals" },
      { value: "Visibility", label: "Keynotes, media, events" },
      { value: "Social", label: "Their voice, the right audience" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* macOS-style folder icon                                             */
/* ------------------------------------------------------------------ */

const FolderIcon = ({ c, open }: { c: CaseFile; open?: boolean }) => (
  <div className="relative w-full aspect-[5/4]">
    <svg viewBox="0 0 120 96" className="absolute inset-0 w-full h-full drop-shadow-[0_6px_10px_rgba(30,90,170,0.25)]" aria-hidden="true">
      <defs>
        <linearGradient id={`front-${c.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8ECDFB" />
          <stop offset="100%" stopColor="#5AABF2" />
        </linearGradient>
        <linearGradient id={`back-${c.id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5DAEF1" />
          <stop offset="100%" stopColor="#3E92E2" />
        </linearGradient>
      </defs>
      {/* Back panel with tab */}
      <path
        d="M8 16a7 7 0 0 1 7-7h28.5a7 7 0 0 1 5.3 2.4l4.4 5.2a7 7 0 0 0 5.3 2.4H105a7 7 0 0 1 7 7V82a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7Z"
        fill={`url(#back-${c.id})`}
      />
      {/* Paper peeking out */}
      <rect
        x="16"
        y={open ? 14 : 22}
        width="88"
        height="40"
        rx="3"
        fill="#FFFFFF"
        className="transition-all duration-300"
      />
      <rect x="22" y={open ? 20 : 28} width="50" height="3" rx="1.5" fill="#D6E6F7" className="transition-all duration-300" />
      {/* Front panel */}
      <path
        d="M6 34a6 6 0 0 1 6-6h96a6 6 0 0 1 6 6v49a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6Z"
        fill={`url(#front-${c.id})`}
        className="origin-bottom transition-transform duration-300"
        style={{ transform: open ? "skewX(-6deg) translateX(4px) scaleY(0.94)" : "none", transformBox: "fill-box" }}
      />
      {/* Top highlight on the front panel */}
      <path d="M12 29.5h96" stroke="#B9E0FD" strokeWidth="1.2" strokeLinecap="round" />
    </svg>

    {/* Brand "sticker" on the front of the folder */}
    <div className="absolute left-1/2 top-[63%] -translate-x-1/2 -translate-y-1/2 w-[34%] aspect-square rounded-[22%] bg-white/95 shadow-sm flex items-center justify-center p-[6%]">
      {c.logo ? (
        <img src={c.logo} alt="" className="max-w-full max-h-full object-contain" draggable={false} />
      ) : (
        <span className="text-[10px] sm:text-[11px] font-black text-[#2F7FD6] leading-[1] text-center tracking-tight">
          CEO
          <br />
          ACCESS
        </span>
      )}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */

const CaseStudies = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [collected, setCollected] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    document.title = "Abel Mesfin | Case Files";
    window.scrollTo(0, 0);
  }, []);

  const active = CASES.find((c) => c.id === openId) ?? null;
  const activeIndex = active ? CASES.indexOf(active) : -1;

  const openCase = (id: string) => {
    setSelectedId(id);
    setOpenId(id);
    setPicked(null);
    setCollected([]);
    setRevealed(false);
  };

  const answer = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setRevealed(true);
  };

  const collect = (c: CaseFile, name: string) => {
    if (c.challenge.kind !== "collect" || collected.includes(name)) return;
    const next = [...collected, name];
    setCollected(next);
    if (next.length === c.challenge.items.length) setRevealed(true);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Header variant="static" />

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 md:pt-40 pb-8 md:pb-12">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-text mb-4">Case Files</p>
        <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[0.95] tracking-tight mb-6">
          <TextReveal>Open</TextReveal>
          <br />
          <TextReveal delay={150}>the work.</TextReveal>
        </h1>
        <p className="text-lg md:text-xl text-body-text max-w-2xl">
          Every folder is a campaign. Open one to see the brief, make your guess, and get the results.
        </p>
      </section>

      {/* Finder-style desktop */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 pb-20 md:pb-28">
        <div
          className="rounded-3xl bg-gradient-to-b from-[#F3F6FA] to-[#E9EEF5] border border-card-border px-4 py-8 sm:p-10 md:p-14"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedId(null);
          }}
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-12">
            {CASES.map((c) => {
              const selected = selectedId === c.id;
              return (
                <li key={c.id} className="flex justify-center">
                  <button
                    onClick={() => openCase(c.id)}
                    onFocus={() => setSelectedId(c.id)}
                    className="group w-full max-w-[168px] flex flex-col items-center gap-2 rounded-xl p-2 outline-none"
                    aria-label={`Open ${c.brand} folder`}
                  >
                    <div
                      className={`w-full rounded-xl p-2 transition-all duration-200 group-hover:-translate-y-1 ${
                        selected ? "bg-black/[0.07]" : ""
                      }`}
                    >
                      <FolderIcon c={c} open={openId === c.id} />
                    </div>
                    <span
                      className={`max-w-full px-1.5 py-0.5 rounded-[5px] text-[13px] sm:text-sm font-medium leading-snug text-center line-clamp-2 transition-colors ${
                        selected ? "bg-[#0A64D8] text-white" : "text-heading"
                      }`}
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
                    >
                      {c.brand}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Finder window */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        {active && (
          <DialogContent className="max-w-2xl w-[calc(100vw-1.5rem)] max-h-[88svh] p-0 gap-0 overflow-hidden rounded-2xl border border-black/10 shadow-2xl flex flex-col [&>button:last-child]:hidden">
            {/* Title bar */}
            <div className="relative flex items-center h-12 px-4 bg-gradient-to-b from-[#F6F6F6] to-[#E8E8E8] border-b border-black/10 shrink-0">
              <div className="flex items-center gap-2 z-10">
                <button
                  onClick={() => setOpenId(null)}
                  className="group/tl w-3.5 h-3.5 rounded-full bg-[#FF5F57] border border-[#E0443E] flex items-center justify-center"
                  aria-label="Close window"
                >
                  <X className="w-2.5 h-2.5 text-[#7A0D07] opacity-0 group-hover/tl:opacity-100" strokeWidth={3} />
                </button>
                <span className="w-3.5 h-3.5 rounded-full bg-[#FEBC2E] border border-[#DEA123]" aria-hidden="true" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#28C840] border border-[#1AAB29]" aria-hidden="true" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center gap-2 pointer-events-none px-24">
                <svg viewBox="0 0 120 96" className="w-5 h-4 shrink-0" aria-hidden="true">
                  <path d="M8 16a7 7 0 0 1 7-7h28.5a7 7 0 0 1 5.3 2.4l4.4 5.2a7 7 0 0 0 5.3 2.4H105a7 7 0 0 1 7 7V82a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7Z" fill="#3E92E2" />
                  <path d="M6 34a6 6 0 0 1 6-6h96a6 6 0 0 1 6 6v49a6 6 0 0 1-6 6H12a6 6 0 0 1-6-6Z" fill="#7CC2F8" />
                </svg>
                <DialogTitle
                  className="text-[13px] font-semibold text-[#3B3B3B] truncate"
                  style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif' }}
                >
                  {active.brand}
                </DialogTitle>
              </div>
            </div>

            {/* Window body */}
            <div className="overflow-y-auto bg-white">
              {/* Brief */}
              <div className="p-6 md:p-8 flex gap-4 md:gap-5 items-start border-b border-black/5">
                <div className="w-16 md:w-20 shrink-0">
                  <FolderIcon c={active} open />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-text mb-1">{active.tag}</p>
                  <DialogDescription className="text-base md:text-lg text-body-text leading-relaxed">
                    <span className="font-semibold text-heading">The brief. </span>
                    {active.brief}
                  </DialogDescription>
                </div>
              </div>

              {/* Guess */}
              <div className="p-6 md:p-8 border-b border-black/5">
                {active.challenge.kind === "quiz" ? (
                  <>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">Take a guess</p>
                    <h3 className="text-xl md:text-2xl font-bold text-heading mb-5">{active.challenge.question}</h3>
                    <div className="grid gap-3">
                      {active.challenge.options.map((opt, i) => {
                        const quiz = active.challenge as Quiz;
                        const state = !revealed
                          ? "idle"
                          : i === quiz.answer
                          ? "right"
                          : picked === i
                          ? "wrong"
                          : "dim";
                        return (
                          <button
                            key={opt}
                            onClick={() => answer(i)}
                            disabled={revealed}
                            className={`w-full text-left rounded-xl border-2 px-5 py-4 font-semibold transition-all ${
                              state === "idle"
                                ? "border-border hover:border-primary hover:bg-primary/5"
                                : state === "right"
                                ? "border-primary bg-primary text-primary-foreground"
                                : state === "wrong"
                                ? "border-red-400 bg-red-50 text-red-700"
                                : "border-border opacity-40"
                            }`}
                          >
                            <span className="flex items-center justify-between gap-3">
                              {opt}
                              {state === "right" && <Check className="w-5 h-5 shrink-0" aria-hidden="true" />}
                              {state === "wrong" && <X className="w-5 h-5 shrink-0" aria-hidden="true" />}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {revealed && picked !== null && (
                      <p className="mt-4 text-sm font-semibold text-heading">
                        {picked === active.challenge.answer ? "Nailed it." : "Not quite. Here's what happened."}
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary mb-2">Collect them all</p>
                    <h3 className="text-xl md:text-2xl font-bold text-heading mb-5">{active.challenge.prompt}</h3>
                    <div className="grid grid-cols-3 gap-3">
                      {active.challenge.items.map((item) => {
                        const got = revealed || collected.includes(item.name);
                        return (
                          <button
                            key={item.name}
                            onClick={() => collect(active, item.name)}
                            disabled={got}
                            aria-label={got ? `${item.name} collected` : `Collect ${item.name}`}
                            className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center gap-2 p-3 transition-all ${
                              got
                                ? "border-primary bg-primary/5"
                                : "border-dashed border-border bg-heading/5 hover:border-primary hover:scale-[1.03]"
                            }`}
                          >
                            {got ? (
                              <>
                                <img src={item.logo} alt="" className="max-h-10 md:max-h-12 max-w-full object-contain" />
                                <span className="text-[11px] md:text-xs font-semibold text-heading text-center leading-tight">
                                  {item.name}
                                </span>
                              </>
                            ) : (
                              <span className="text-2xl font-black text-muted-text" aria-hidden="true">
                                ?
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-heading">
                      {revealed ? "Collection complete." : `${collected.length} / ${active.challenge.items.length} collected`}
                    </p>
                  </>
                )}
                {!revealed && (
                  <button
                    onClick={() => setRevealed(true)}
                    className="mt-4 inline-block py-2 text-sm font-semibold text-muted-text underline underline-offset-4 hover:text-heading"
                  >
                    Skip to the results
                  </button>
                )}
              </div>

              {/* Results */}
              <div
                className={`p-6 md:p-8 transition-all duration-500 ${
                  revealed ? "opacity-100" : "opacity-40 blur-[3px] select-none pointer-events-none"
                }`}
                aria-hidden={!revealed}
              >
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-text mb-2">
                  {revealed ? "The play" : "Make a guess to see the results"}
                </p>
                <p className="text-base md:text-lg text-body-text leading-relaxed mb-6">{active.play}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {active.stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-heading/5 p-4">
                      <div className="text-2xl md:text-3xl font-bold text-primary leading-none mb-1.5">{s.value}</div>
                      <div className="text-xs md:text-sm text-body-text leading-snug">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Window footer: folder navigation */}
            <div className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 bg-[#F6F6F6] border-t border-black/10 text-sm">
              <button
                onClick={() => openCase(CASES[(activeIndex - 1 + CASES.length) % CASES.length].id)}
                className="py-2 px-2 font-semibold text-[#3B3B3B] hover:text-primary truncate"
              >
                ← {CASES[(activeIndex - 1 + CASES.length) % CASES.length].brand}
              </button>
              <span className="text-muted-text shrink-0">
                {activeIndex + 1} of {CASES.length}
              </span>
              <button
                onClick={() => openCase(CASES[(activeIndex + 1) % CASES.length].id)}
                className="py-2 px-2 font-semibold text-[#3B3B3B] hover:text-primary truncate text-right"
              >
                {CASES[(activeIndex + 1) % CASES.length].brand} →
              </button>
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </div>
  );
};

export default CaseStudies;

import { useEffect, useMemo, useState } from "react";
import { Check, Lock, RotateCcw, Sparkles, Trophy, X } from "lucide-react";
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
/* Game rules                                                          */
/* ------------------------------------------------------------------ */

const XP_CORRECT = 150;
const XP_MISS = 75;
const MAX_XP = CASES.length * XP_CORRECT;

// Levels are earned by files opened (so a missed question never blocks the
// finale); XP is the score — a perfect run is MAX_XP.
const LEVELS = [
  { at: 0, name: "Rookie" },
  { at: 2, name: "Strategist" },
  { at: 4, name: "Campaign Lead" },
  { at: CASES.length, name: "Brand Builder" },
];
const levelFor = (files: number) => [...LEVELS].reverse().find((l) => files >= l.at) ?? LEVELS[0];

type Result = { xp: number; correct: boolean };
const STORAGE_KEY = "case-files-v1";

const loadProgress = (): Record<string, Result> => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

const saveProgress = (p: Record<string, Result>) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    /* storage unavailable — progress just won't persist */
  }
};

/* ------------------------------------------------------------------ */

const LogoTile = ({ c, dim }: { c: CaseFile; dim?: boolean }) => (
  <div
    className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border border-border flex items-center justify-center p-2 shrink-0 transition ${
      dim ? "grayscale opacity-60" : ""
    }`}
  >
    {c.logo ? (
      <img src={c.logo} alt={c.brand} className="max-w-full max-h-full object-contain" />
    ) : (
      <span className="text-sm font-black text-heading tracking-tight leading-none text-center">
        CEO
        <br />
        ACCESS
      </span>
    )}
  </div>
);

const CaseStudies = () => {
  const [progress, setProgress] = useState<Record<string, Result>>(loadProgress);
  const [openId, setOpenId] = useState<string | null>(null);
  const [picked, setPicked] = useState<number | null>(null);
  const [collected, setCollected] = useState<string[]>([]);
  const [justLeveled, setJustLeveled] = useState<string | null>(null);

  useEffect(() => {
    document.title = "Abel Mesfin | Case Files";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => saveProgress(progress), [progress]);

  const xp = useMemo(() => Object.values(progress).reduce((s, r) => s + r.xp, 0), [progress]);
  const done = Object.keys(progress).length;
  const level = levelFor(done);
  const nextLevel = LEVELS.find((l) => l.at > done);
  const allDone = done === CASES.length;

  const active = CASES.find((c) => c.id === openId) ?? null;
  const activeResult = active ? progress[active.id] : undefined;

  const openCase = (id: string) => {
    setOpenId(id);
    setPicked(null);
    setCollected([]);
  };

  const award = (id: string, result: Result) => {
    if (progress[id]) return;
    const before = levelFor(done).name;
    const after = levelFor(done + 1).name;
    setProgress((p) => ({ ...p, [id]: result }));
    if (after && after !== before) {
      setJustLeveled(after);
      window.setTimeout(() => setJustLeveled(null), 2600);
    }
  };

  const answer = (c: CaseFile, i: number) => {
    if (c.challenge.kind !== "quiz" || picked !== null || progress[c.id]) return;
    setPicked(i);
    const correct = i === c.challenge.answer;
    award(c.id, { xp: correct ? XP_CORRECT : XP_MISS, correct });
  };

  const collect = (c: CaseFile, name: string) => {
    if (c.challenge.kind !== "collect" || collected.includes(name)) return;
    const next = [...collected, name];
    setCollected(next);
    if (next.length === c.challenge.items.length) award(c.id, { xp: XP_CORRECT, correct: true });
  };

  const reset = () => {
    setProgress({});
    setOpenId(null);
  };

  // Is the active case "revealed" (challenge finished)?
  const revealed = !!activeResult;

  return (
    <div className="min-h-screen bg-background overflow-x-clip">
      <Header variant="static" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 md:pt-40 pb-10">
        <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-muted-text mb-4">
          Prototype · Case Files
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-heading leading-[0.95] tracking-tight mb-6">
          <TextReveal>Unlock</TextReveal>
          <br />
          <TextReveal delay={150}>the work.</TextReveal>
        </h1>
        <p className="text-lg md:text-xl text-body-text max-w-2xl">
          Six campaigns, sealed. Open each file, beat the challenge, and see what we built.
          Collect them all to level up from Rookie to Brand Builder.
        </p>
      </section>

      {/* HUD */}
      <div className="sticky top-0 z-30 bg-background/85 backdrop-blur border-y border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-3 flex items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <Trophy className="w-5 h-5 text-primary" aria-hidden="true" />
            <span className="font-bold text-heading text-sm md:text-base">{level.name}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div
              className="h-2.5 rounded-full bg-heading/5 overflow-hidden"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={MAX_XP}
              aria-valuenow={xp}
              aria-label="Experience points"
            >
              <div
                className="h-full bg-primary rounded-full transition-[width] duration-700 ease-out"
                style={{ width: `${(xp / MAX_XP) * 100}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[11px] md:text-xs text-muted-text">
              <span>
                {xp} / {MAX_XP} XP
              </span>
              <span>
                {nextLevel
                  ? `${nextLevel.at - done} more to ${nextLevel.name}`
                  : xp === MAX_XP
                  ? "Perfect run"
                  : "Max level"}
              </span>
            </div>
          </div>
          <div className="shrink-0 text-right">
            <div className="font-bold text-heading text-sm md:text-base">
              {done}/{CASES.length}
            </div>
            <div className="text-[11px] md:text-xs text-muted-text">files open</div>
          </div>
        </div>
      </div>

      {/* Level-up toast */}
      <div
        aria-live="polite"
        data-levelup-toast=""
        className={`fixed left-1/2 -translate-x-1/2 bottom-6 z-[60] transition-all duration-500 ${
          justLeveled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {justLeveled && (
          <div className="flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 shadow-xl font-semibold">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Level up: {justLeveled}
          </div>
        )}
      </div>

      {/* Grid of case files */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CASES.map((c) => {
            const r = progress[c.id];
            return (
              <button
                key={c.id}
                onClick={() => openCase(c.id)}
                className={`group relative text-left rounded-3xl border p-6 min-h-[240px] flex flex-col justify-between transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:-translate-y-1 hover:shadow-xl ${
                  r
                    ? "bg-card border-card-border"
                    : "bg-heading text-white border-transparent"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <LogoTile c={c} dim={!r} />
                  <div className="flex flex-col items-end gap-3">
                    <span
                      className={`text-xs font-semibold tracking-[0.2em] uppercase ${
                        r ? "text-muted-text" : "text-white/50"
                      }`}
                    >
                      File {c.file}
                    </span>
                    {/* "Sealed" stamp on unopened files */}
                    {!r && (
                      <span
                        aria-hidden="true"
                        className="rotate-[-10deg] border-2 border-primary text-primary rounded-md px-2 py-0.5 text-[11px] font-black tracking-[0.25em]"
                      >
                        SEALED
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className={`text-2xl font-bold mb-1 ${r ? "text-heading" : "text-white"}`}>
                    {c.brand}
                  </h2>
                  <p className={`text-sm ${r ? "text-muted-text" : "text-white/60"}`}>{c.tag}</p>
                </div>

                <div className="flex items-center justify-between pt-4">
                  {r ? (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      <Check className="w-4 h-4" aria-hidden="true" />
                      Unlocked · +{r.xp} XP
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/80">
                      <Lock className="w-4 h-4" aria-hidden="true" />
                      Tap to open
                    </span>
                  )}
                  <span
                    className={`text-sm font-semibold transition-transform group-hover:translate-x-1 ${
                      r ? "text-heading" : "text-white"
                    }`}
                    aria-hidden="true"
                  >
                    →
                  </span>
                </div>

              </button>
            );
          })}
        </div>

        {/* Finale */}
        <div
          className={`mt-12 rounded-3xl p-8 md:p-12 text-center transition-all duration-700 ${
            allDone ? "bg-primary text-primary-foreground" : "bg-heading/5 text-muted-text"
          }`}
        >
          {allDone ? (
            <>
              <Trophy className="w-10 h-10 mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-3xl md:text-5xl font-bold mb-3">Brand Builder unlocked.</h2>
              <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
                You've opened every file with {xp} / {MAX_XP} XP
                {xp === MAX_XP ? ", a perfect run" : ""}. The next case file could be yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:abelgmesfin@gmail.com?subject=Let's%20build%20the%20next%20case%20file"
                  className="inline-flex items-center justify-center rounded-full bg-white text-primary font-semibold px-6 py-3"
                >
                  Start a project
                </a>
                <button
                  onClick={reset}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 font-semibold px-6 py-3"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  Play again
                </button>
              </div>
            </>
          ) : (
            <>
              <Lock className="w-8 h-8 mx-auto mb-3" aria-hidden="true" />
              <p className="text-lg font-semibold text-heading">
                {CASES.length - done} file{CASES.length - done === 1 ? "" : "s"} left to unlock the finale
              </p>
            </>
          )}
        </div>
      </section>

      {/* Case file dialog */}
      <Dialog open={!!active} onOpenChange={(o) => !o && setOpenId(null)}>
        {active && (
          <DialogContent className="max-w-2xl w-[calc(100vw-2rem)] max-h-[90svh] overflow-y-auto rounded-3xl p-0 gap-0 [&>button:last-child]:hidden">
            {/* Header */}
            <div className="bg-heading text-white p-6 md:p-8 rounded-t-3xl relative">
              <button
                onClick={() => setOpenId(null)}
                className="absolute right-4 top-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-4 pr-10">
                <LogoTile c={active} />
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                    Case file {active.file}
                  </p>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {active.brand}
                  </DialogTitle>
                </div>
              </div>
              <DialogDescription className="mt-5 text-white/80 text-base leading-relaxed">
                <span className="font-semibold text-white">The brief. </span>
                {active.brief}
              </DialogDescription>
            </div>

            {/* Challenge */}
            <div className="p-6 md:p-8 border-b border-border">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
                Challenge · up to +{XP_CORRECT} XP
              </p>

              {active.challenge.kind === "quiz" ? (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-heading mb-5">
                    {active.challenge.question}
                  </h3>
                  <div className="grid gap-3">
                    {active.challenge.options.map((opt, i) => {
                      const quiz = active.challenge as Quiz;
                      const chosen = picked ?? (activeResult ? (activeResult.correct ? quiz.answer : -1) : null);
                      const isAnswer = i === quiz.answer;
                      const showState = revealed;
                      const state = !showState
                        ? "idle"
                        : isAnswer
                        ? "right"
                        : chosen === i
                        ? "wrong"
                        : "dim";
                      return (
                        <button
                          key={opt}
                          onClick={() => answer(active, i)}
                          disabled={revealed}
                          className={`w-full text-left rounded-2xl border-2 px-5 py-4 font-semibold transition-all ${
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
                  {revealed && (
                    <p className="mt-4 text-sm font-semibold text-heading">
                      {activeResult?.correct
                        ? `Nailed it. +${activeResult.xp} XP`
                        : `Not quite, but you still earned +${activeResult?.xp} XP for opening the file.`}
                    </p>
                  )}
                </>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-bold text-heading mb-5">
                    {active.challenge.prompt}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {active.challenge.items.map((item) => {
                      const got = revealed || collected.includes(item.name);
                      return (
                        <button
                          key={item.name}
                          onClick={() => collect(active, item.name)}
                          disabled={got}
                          aria-label={got ? `${item.name} collected` : `Collect ${item.name}`}
                          className={`aspect-square rounded-2xl border-2 flex flex-col items-center justify-center gap-2 p-3 transition-all ${
                            got
                              ? "border-primary bg-primary/5 scale-100"
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
                    {revealed
                      ? `Collection complete. +${activeResult?.xp} XP`
                      : `${collected.length} / ${active.challenge.items.length} collected`}
                  </p>
                </>
              )}
            </div>

            {/* Reveal: the play + results */}
            <div
              className={`p-6 md:p-8 transition-all duration-500 ${
                revealed ? "opacity-100" : "opacity-40 blur-[3px] select-none pointer-events-none"
              }`}
              aria-hidden={!revealed}
            >
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-text mb-2">
                {revealed ? "The play" : "Locked · finish the challenge"}
              </p>
              <p className="text-base md:text-lg text-body-text leading-relaxed mb-6">{active.play}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {active.stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-heading/5 p-4">
                    <div className="text-2xl md:text-3xl font-bold text-primary leading-none mb-1.5">{s.value}</div>
                    <div className="text-xs md:text-sm text-body-text leading-snug">{s.label}</div>
                  </div>
                ))}
              </div>
              {revealed && (
                <button
                  onClick={() => {
                    const next = CASES.find((c) => !progress[c.id]);
                    if (next) openCase(next.id);
                    else setOpenId(null);
                  }}
                  className="mt-6 w-full rounded-full bg-heading text-white font-semibold py-3.5 hover:opacity-90"
                >
                  {CASES.some((c) => !progress[c.id]) ? "Open next file →" : "See your reward →"}
                </button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>

      <Footer />
    </div>
  );
};

export default CaseStudies;

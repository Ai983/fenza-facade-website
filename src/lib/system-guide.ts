// The system selector quiz. It points a reader to the system families worth looking at first; it is
// NOT a specification and makes no performance claims. Each answer adds points to some systems, and
// the three highest-scoring systems are shown with the answers that matched. Change the quiz here.
//
// Guardrails (docs/AFTER-EVERY-EDIT.md, section 3): qualitative guidance only, no capacity, price or
// test claims. Keys in `picks` must be system slugs from systems.ts (unknown ones are ignored).

import { SYSTEMS, type SystemFamily } from "./systems";

export interface QuizOption {
  id: string;
  label: string;
  /** slug -> points */
  picks: Partial<Record<string, number>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  hint?: string;
  /** The first question must be answered before results show; the rest only sharpen them. */
  required?: boolean;
  options: QuizOption[];
}

export const QUIZ: QuizQuestion[] = [
  {
    id: "scope",
    question: "What are you covering?",
    required: true,
    options: [
      { id: "face", label: "The main face of a building", picks: { "curtain-wall": 3, "structural-glazing": 2, cladding: 3, "rain-screen-facade": 3 } },
      { id: "windows", label: "Windows in a wall", picks: { "casement-windows": 3, "sliding-windows-doors": 3 } },
      { id: "terrace", label: "A wide opening to a balcony or terrace", picks: { "slide-and-fold-doors": 3, "sliding-windows-doors": 3, "frameless-glass-doors": 1 } },
      { id: "entrance", label: "An entrance or lobby", picks: { "frameless-glass-doors": 3, "spider-glazing": 2, "curtain-wall": 2 } },
      { id: "edge", label: "A balcony, terrace or stair edge", picks: { railings: 3 } },
      { id: "roof", label: "A roof light or covered entrance", picks: { skylights: 3 } },
      { id: "shade", label: "Shade or a screen in front of a facade", picks: { louvers: 3, pergolas: 2 } },
      { id: "outdoor", label: "A shaded outdoor seating area", picks: { pergolas: 3, louvers: 1 } },
    ],
  },
  {
    id: "look",
    question: "What look do you want?",
    options: [
      { id: "glass", label: "Clean and glass-led, with minimal frames", picks: { "structural-glazing": 2, "spider-glazing": 2, "frameless-glass-doors": 2, "curtain-wall": 1 } },
      { id: "solid", label: "A solid, panelled metal skin", picks: { cladding: 2, "rain-screen-facade": 2 } },
      { id: "mix", label: "A mix of glass and solid panels", picks: { "curtain-wall": 2, "rain-screen-facade": 1 } },
    ],
  },
  {
    id: "open",
    question: "Does it need to open?",
    options: [
      { id: "opens", label: "Yes, it must open", picks: { "casement-windows": 2, "sliding-windows-doors": 2, "slide-and-fold-doors": 2, "frameless-glass-doors": 1 } },
      { id: "fixed", label: "No, fixed is fine", picks: { "curtain-wall": 1, "structural-glazing": 1, cladding: 1, "spider-glazing": 1, skylights: 1 } },
    ],
  },
  {
    id: "worry",
    question: "What worries you most about the site?",
    hint: "The glass, seals and detailing matter as much as the system, so treat this as a pointer.",
    options: [
      { id: "sun", label: "Heat and glare from the sun", picks: { louvers: 2, pergolas: 1, "rain-screen-facade": 1, "curtain-wall": 1 } },
      { id: "rain", label: "Heavy rain and moisture", picks: { "rain-screen-facade": 2, cladding: 1 } },
      { id: "noise", label: "Noise from outside", picks: { "casement-windows": 2, "curtain-wall": 1 } },
      { id: "none", label: "Nothing in particular", picks: {} },
    ],
  },
  {
    id: "priority",
    question: "What matters more?",
    options: [
      { id: "simple", label: "Keeping it simple and standard", picks: { cladding: 1, "casement-windows": 1, "sliding-windows-doors": 1, railings: 1, "curtain-wall": 1 } },
      { id: "statement", label: "A design-led statement", picks: { "structural-glazing": 1, "spider-glazing": 1, "frameless-glass-doors": 1, skylights: 1, "slide-and-fold-doors": 1 } },
    ],
  },
];

export interface QuizResult {
  system: SystemFamily;
  score: number;
  /** Labels of the answers that scored for this system. */
  because: string[];
}

/** answers: question id -> option id. Returns up to three systems, best first, or [] until scope is answered. */
export const scoreQuiz = (answers: Record<string, string>): QuizResult[] => {
  if (!answers.scope) return [];
  const tally = new Map<string, QuizResult>();
  for (const q of QUIZ) {
    const opt = q.options.find((o) => o.id === answers[q.id]);
    if (!opt) continue;
    for (const [slug, pts] of Object.entries(opt.picks)) {
      const system = SYSTEMS.find((s) => s.slug === slug);
      if (!system || !pts) continue;
      const cur = tally.get(slug) ?? { system, score: 0, because: [] };
      cur.score += pts;
      cur.because.push(opt.label);
      tally.set(slug, cur);
    }
  }
  const order = (s: SystemFamily) => SYSTEMS.indexOf(s);
  return [...tally.values()]
    .sort((a, b) => b.score - a.score || order(a.system) - order(b.system))
    .slice(0, 3);
};

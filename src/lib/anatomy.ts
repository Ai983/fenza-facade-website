// Parts of a curtain-wall specimen, pinned to /images/cw-1.webp for the
// AnatomyExplorer. `x` / `y` are percentages of the image's width / height —
// if the photo is ever swapped, re-measure every point against the new image.
//
// Copy stays inside the same guardrails as systems.ts: figures are the
// indicative ranges already published there, nothing about test results or
// capacity, and no part is claimed for a specific project.

export interface AnatomyPart {
  id: string;
  name: string;
  /** One-line label shown in the legend. */
  tagline: string;
  body: string;
  x: number;
  y: number;
}

/**
 * The Home page scroll story (AnatomyStory): five parts, in plain language —
 * no alloy grades or standards here; those live on the system page.
 */
export const STORY_STEPS: { id: string; line: string }[] = [
  {
    id: "mullion",
    line: "The vertical spine. It carries the wall's weight, and the push of the wind, back to the building's floors.",
  },
  {
    id: "transom",
    line: "The horizontal member. It ties the grid together and holds up each pane of glass.",
  },
  {
    id: "glass",
    line: "The view, and the insulation. Two panes around a sealed gap keep heat and noise outside.",
  },
  {
    id: "gasket",
    line: "Where glass meets metal. Soft seals grip the glass so it never touches the frame, and keep out air and water.",
  },
  {
    id: "profile",
    line: "Inside the frame. Hollow aluminium chambers give strength without weight, cut on our own line to a tenth of a millimetre.",
  },
];

// cw-1-hd.webp is cw-1.webp resized 2x (Lanczos) with a light unsharp mask:
// the source is only 900px and these sections zoom it up to 2x, so the
// pre-resized copy holds its edges better than the browser's own stretch.
// The positions below are percentages, so they apply to either size.
export const ANATOMY_IMAGE = {
  key: "cw-1-hd",
  alt: "Curtain wall specimen: aluminium mullion and transoms framing glass units, with the extruded profile ends exposed",
  width: 1800,
  height: 1800,
};

export const ANATOMY_PARTS: AnatomyPart[] = [
  {
    id: "mullion",
    name: "Mullion",
    tagline: "The vertical spine",
    body: "The vertical member. Mullions run floor to floor and carry the wall's own weight and the wind load back to the slab through anchor brackets. Their depth, typically 50–150 mm, is sized to the span and the wind pressure.",
    x: 42,
    y: 67,
  },
  {
    id: "transom",
    name: "Transom",
    tagline: "The horizontal member",
    body: "Transoms span between mullions and divide the grid into panels, carrying the glass above them. Fenza end-mills each transom so it seats square against the mullion, which is what keeps that joint tight and watertight.",
    x: 30,
    y: 40,
  },
  {
    id: "glass",
    name: "Glass unit",
    tagline: "The infill",
    body: "Usually a double-glazed unit (DGU): two panes around a sealed cavity for thermal and acoustic performance, or laminated glass where safety calls for it. Glazing runs 6–36 mm. The same grid can take ACP, solid aluminium, stone or louvre instead.",
    x: 62,
    y: 22,
  },
  {
    id: "gasket",
    name: "Gasket & glazing seal",
    tagline: "Where glass meets metal",
    body: "Co-extruded EPDM gaskets grip the glass on both faces, cushion it off the aluminium and form the first line against air and water. The glass never touches the frame directly.",
    x: 60,
    y: 38,
  },
  {
    id: "profile",
    name: "Extruded profile",
    tagline: "What's inside the frame",
    body: "The cut end shows the extrusion: 6063-T6 aluminium formed into hollow chambers, giving stiffness without weight, with channels for gaskets and fixings. Profiles are cut on servo-driven saws to ±0.1 mm.",
    x: 76,
    y: 48,
  },
  {
    id: "sill",
    name: "Bottom member",
    tagline: "Closing the grid",
    body: "The bottom member closes the grid. Glass sits on setting blocks here, not on bare metal, and drainage paths carry any water that gets past the outer seals back outside.",
    x: 62,
    y: 88,
  },
];

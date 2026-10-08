# Journal photos

All Journal photos are free Unsplash photos (Unsplash License: free for commercial use, no attribution needed).
Each file below is a copy in `public/images/`. To move one to Supabase storage: open the **Unsplash page**, download it,
upload it, then set `"url": "https://..."` on that slot in `src/lib/journal-images.json` (the `file` is then ignored).
Card thumbnails (`j-<article-slug>.webp`, 720x480) are crops of each article's hero.

## The three India articles (2026-10-07): reused photos
These articles reuse photos already listed below (same files, same Unsplash pages); only their
card thumbnails are new crops. The manifest file `j-e331-2` was never added to `public/images`, so
nothing may use slot `e331-2` until it is.

- `/journal/facades-for-indian-climates`: `climate-hero` = `j-louver-1`, `climate-1` = `j-thermal-2`,
  `climate-2` = `j-e331-1`, card `j-facades-for-indian-climates.webp` (crop of `j-louver-1`).
- `/journal/monsoon-proof-facades-and-windows`: `monsoon-hero` = `j-e331-1`, `monsoon-1` = `j-rain-1`,
  `monsoon-2` = `j-thermal-1`, card `j-monsoon-proof-facades-and-windows.webp` (crop of `j-e331-1`).
- `/journal/choosing-a-facade-contractor-in-india`: `contractor-hero` = `j-quote-1`,
  `contractor-1` = `j-stick-1`, `contractor-2` = `j-joints-1`, card
  `j-choosing-a-facade-contractor-in-india.webp` (crop of `j-quote-1`).

## ACP vs. solid aluminium cladding: which one?
`/journal/acp-vs-solid-aluminium-cladding`

- `acp-hero` -> `public/images/j-acp-hero.webp` (2000x1333) - Folded metal cladding panels in grey and warm copper tones - https://unsplash.com/photos/white-concrete-building-during-daytime-k7DrfFvUEqU
- `acp-1` -> `public/images/j-acp-1.webp` (1400x934) - Curved sheet-metal cladding sweeping across a building face - https://unsplash.com/photos/a-close-up-of-a-building-with-a-curved-wall-fuKt3RgGm3o
- `acp-2` -> `public/images/j-acp-2.webp` (1400x933) - Flat cladding panels with fine, even joints under soft light - https://unsplash.com/photos/blue-and-white-tiles-ZHVy20iPb7E

## Anodised, powder-coated or PVDF: choosing an aluminium finish
`/journal/anodised-powder-coated-or-pvdf`

- `finish-hero` -> `public/images/j-finish-hero-v2.webp` (2000x1333) - Copper-toned anodised cladding on rounded balconies against a teal sky - https://unsplash.com/photos/a-very-tall-building-with-many-balconies-on-it-hK-jdvutWoU
- `finish-1` -> `public/images/j-finish-1.webp` (1400x1120) - Dark matte metal surface with a fine grain - https://unsplash.com/photos/dark-grey-grainy-gradient-W9LTI6cKPfM
- `finish-2` -> `public/images/j-finish-2.webp` (1400x1051) - Facade panels in contrasting coloured finishes - https://unsplash.com/photos/a-multicolored-building-with-a-clock-on-the-side-of-it-PK1aUKM9DrA

## Casement or sliding windows: how to choose
`/journal/casement-or-sliding-windows`

- `casement-hero` -> `public/images/j-casement-hero.webp` (2000x1500) - Awning window opening outward from a concrete facade - https://unsplash.com/photos/modern-building-facade-with-open-windows-KL-IZsX51tc
- `casement-1` -> `public/images/j-casement-1.webp` (1400x933) - Blue glass facade with a few small openable windows - https://unsplash.com/photos/blue-glass-office-building-facade-nqXrIWXt8GY
- `casement-2` -> `public/images/j-casement-2.webp` (1400x933) - Awning window in a wall of glass blocks looking onto green fields - https://unsplash.com/photos/open-window-in-glass-block-wall-overlooking-landscape-AgdrrfS6h9E

## Choosing facade glass: toughened, laminated and double-glazed units
`/journal/choosing-facade-glass`

- `glass-hero` -> `public/images/j-glass-hero.webp` (2000x1333) - Looking up glass towers with clouds reflected in every pane - https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows-GP6-P0QAEzY
- `glass-1` -> `public/images/j-glass-1.webp` (1400x937) - Window reflecting a neighbouring building and a blue sky - https://unsplash.com/photos/a-reflection-of-a-building-in-a-window-zUDjuv3NP_M
- `glass-2` -> `public/images/j-glass-2.webp` (1400x933) - Glass facade reflecting a soft pink and blue sky - https://unsplash.com/photos/worms-eye-view-photo-of-glass-building-HFug8fv_1jw

## Glass balustrades: what to check before you specify
`/journal/glass-balustrades-what-to-check`

- `balus-hero` -> `public/images/j-balus-hero.webp` (2000x1331) - Glass balustrade along a terrace in front of a stone-clad building - https://unsplash.com/photos/modern-building-facade-with-glass-balcony-railing-TDP60dC388E
- `balus-1` -> `public/images/j-balus-1.webp` (1400x933) - Slim glass balustrade in front of a bright window wall, in black and white - https://unsplash.com/photos/modern-interior-with-horizontal-blinds-and-railing-8FB241JvXLc
- `balus-2` -> `public/images/j-balus-2.webp` (1400x947) - Glass and steel railing along a landscaped walkway - https://unsplash.com/photos/modern-office-buildings-in-shanghai-rQEZZrGGmCI

## Louvers and sun-shading fins: how they cut heat gain
`/journal/louvers-and-sun-shading-fins`

- `louver-hero` -> `public/images/j-louver-hero.webp` (2000x1333) - Vertical timber fins in front of a glazed building face - https://unsplash.com/photos/modern-building-with-dark-facade-wooden-slats-and-glass-windows-rHe-M_q2y88
- `louver-1` -> `public/images/j-louver-1.webp` (1400x1121) - Horizontal louvres running along a green-framed glass facade - https://unsplash.com/photos/a-close-up-of-a-building-with-a-sky-background-BZ2R0TxWb7I
- `louver-2` -> `public/images/j-louver-2.webp` (1400x932) - Dark horizontal louvres curving up under a cloudy sky - https://unsplash.com/photos/a-modern-buildings-exterior-lines-against-a-gray-sky-8Llz0ieRWOI

## Movement joints: why a facade must be allowed to move
`/journal/movement-joints-in-facades`

- `joints-hero` -> `public/images/j-joints-hero.webp` (2000x1333) - Vertical metal ribs catching light and shadow across a facade - https://unsplash.com/photos/a-white-wall-with-vertical-blinds-on-it-un4Dp8OR-4U
- `joints-1` -> `public/images/j-joints-1.webp` (1400x875) - Fine lines of panel joints across a pale glass facade - https://unsplash.com/photos/graphing-artwork-xnqVGsbXgV4
- `joints-2` -> `public/images/j-joints-2.webp` (1400x933) - Regular rows of windows set in a stone-clad facade - https://unsplash.com/photos/mans-eye-view-of-multi-storey-building-Q-HmETwjW-A

## Rain-screen cladding: why the gap behind the panel matters
`/journal/rain-screen-cladding-the-gap`

- `rain-hero` -> `public/images/j-rain-hero.webp` (2000x1261) - Golden horizontal cladding battens against a deep blue sky - https://unsplash.com/photos/low-angle-photography-of-building-facade-DZWYrOyej1I
- `rain-1` -> `public/images/j-rain-1.webp` (1400x933) - Timber-toned slatted cladding over a balconied facade - https://unsplash.com/photos/brown-and-white-concrete-building-nF2Fn_UNqzE
- `rain-2` -> `public/images/j-rain-2.webp` (1400x933) - Timber fins and cladding under a white roof edge - https://unsplash.com/photos/a-close-up-of-a-building-with-wooden-blinds-DffR5VtlTFc

## Slide-and-fold doors: what to check before you specify
`/journal/slide-and-fold-doors-what-to-check`

- `fold-hero` -> `public/images/j-fold-hero.webp` (2000x2000) - Folding glass doors opened fully onto a timber deck - https://unsplash.com/photos/modern-home-with-folding-glass-doors-opening-to-deck-ckSnDzU_xOg
- `fold-1` -> `public/images/j-fold-1.webp` (1400x933) - Sliding glazed doors opening to a balcony and the sea - https://unsplash.com/photos/balcony-overlooking-the-sea-and-coastal-town-N1DlQkl2V2c
- `fold-2` -> `public/images/j-fold-2.webp` (1400x933) - Frameless sliding glazing on a balcony in golden evening light - https://unsplash.com/photos/photo-of-sliding-door-iQ9_1cVOwiQ

## Spider glazing and glass fins: how point-fixed glass works
`/journal/spider-glazing-and-glass-fins`

- `spider-hero` -> `public/images/j-spider-hero.webp` (2000x1491) - Point-fixed glass panes held by slim steel spider fittings - https://unsplash.com/photos/a-close-up-of-a-window-with-a-sky-background-pelH3Z0O8f0
- `spider-1` -> `public/images/j-spider-1.webp` (1400x765) - Glass facade with small stainless fixings at each panel corner - https://unsplash.com/photos/a-tall-glass-building-with-a-sky-background-GBhh6nhbI5Q
- `spider-2` -> `public/images/j-spider-2.webp` (1400x765) - Wide glass facade with fixings and slim horizontal bars - https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows--LCA5wDQdeo

## Stick vs. unitised curtain wall: how to choose
`/journal/stick-vs-unitised-curtain-wall`

- `stick-hero` -> `public/images/j-stick-hero-v2.webp` (2000x1333) - Glass facade modules glowing orange and deep blue in the evening light - https://unsplash.com/photos/modern-building-facade-reflecting-sunset-colors-aaBwFOFjTbE
- `stick-1` -> `public/images/j-stick-1.webp` (1400x1050) - Looking up two glass curtain wall faces that meet at a sharp corner - https://unsplash.com/photos/low-angle-photography-of-high-rise-building-ISQ3M9fPa0g
- `stick-2` -> `public/images/j-stick-2.webp` (1400x933) - Glass facade corner rising to a point against a pale blue sky - https://unsplash.com/photos/a-tall-building-with-a-blue-sky-QPsJzQC4wQI

## Structural glazing: how glass is held without a visible frame
`/journal/structural-glazing-explained`

- `sg-hero` -> `public/images/j-sg-hero-v2.webp` (2000x1333) - Glass pavilion glowing warm at dusk behind a nearly frameless glass wall
- `sg-1` -> `public/images/j-sg-1.webp` (1400x933) - Corner of a glazed facade with clouds reflected in the panes - https://unsplash.com/photos/white-clouds-and-blue-sky-during-daytime-P5nl2JsAHPw
- `sg-2` -> `public/images/j-sg-2.webp` (1400x933) - Long glass facade running to a horizon under a pale sky - https://unsplash.com/photos/a-tall-glass-building-with-a-sky-in-the-background-3i2CvJXk4yA

## Thermal breaks: why aluminium frames need insulation inside them
`/journal/thermal-breaks-in-aluminium-frames`

- `thermal-hero` -> `public/images/j-thermal-hero-v2.webp` (2000x1333) - Dark aluminium-clad facade with rows of slim-framed windows - https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows-8Oxy-__EjQc
- `thermal-1` -> `public/images/j-thermal-1.webp` (1400x928) - Dark-framed sliding window looking onto trees - https://unsplash.com/photos/a-window-with-a-view-of-green-trees-outside-zKGL4LThrdE
- `thermal-2` -> `public/images/j-thermal-2.webp` (1400x933) - Grid of slim aluminium window frames with green beyond - https://unsplash.com/photos/rain-streaks-on-a-window-overlooking-lush-greenery-u-9dA84J0iI

## What ASTM E331 actually tests
`/journal/what-astm-e331-tests`

- `e331-hero` -> `public/images/j-e331-hero.webp` (2000x1500) - Rain droplets on a window pane with a pale building softly blurred behind - https://unsplash.com/photos/droplets-on-windshield-tXZTdTmC51o
- `e331-1` -> `public/images/j-e331-1.webp` (1400x933) - Water beading on glass under a heavy grey sky - https://unsplash.com/photos/water-droplets-on-glass-panel-eehRmieZJvY
- `e331-2` -> `public/images/j-e331-2.webp` (1400x1400) - Rain on a window pane over a hazy city view - https://unsplash.com/photos/raindrops-on-clear-window-Bu1zj2WbjHE

## What to send a facade manufacturer for an accurate quote
`/journal/what-to-send-a-facade-manufacturer`

- `quote-hero` -> `public/images/j-quote-hero.webp` (2000x1500) - Technical drawings and measuring tools laid out on a dark wooden table - https://unsplash.com/photos/a-wooden-table-topped-with-a-piece-of-paper-and-a-pair-of-scissors-OspMUpCBeqQ
- `quote-1` -> `public/images/j-quote-1.webp` (1400x933) - Close-up of a dimensioned drawing with a pencil and scale rule - https://unsplash.com/photos/brown-pencil-on-white-printing-paper-fteR0e2BzKo

## Later articles, batch 2 (photos chosen 2026-10-08)

### /journal/acoustic-glazing-for-noisy-sites

- `acoustic-hero` -> `public/images/j-acoustic-hero.webp` (2000x1333) - Residential building glowing in warm evening light beside a road - https://unsplash.com/photos/modern-apartment-building-bathed-in-warm-sunset-light-4klaqVDV_eY
- `acoustic-1` -> `public/images/j-acoustic-1.webp` (1400x788) - Lit apartment block above streaking traffic lights at night - https://unsplash.com/photos/light-trails-beside-modern-apartment-buildings-8_zdt4xKJoE

### /journal/condensation-on-windows-and-facades

- `condens-hero` -> `public/images/j-condens-hero.webp` (2000x1333) - Warm light behind a glass pane beaded with condensation - https://unsplash.com/photos/a-close-up-of-a-window-with-rain-drops-on-it-RQcdF00-iIg
- `condens-1` -> `public/images/j-condens-1.webp` (1400x930) - Frosted window pane with a pale view beyond - https://unsplash.com/photos/shallow-focus-photography-of-window-hwM-qMrGW0I

### /journal/curtain-wall-anchors-and-slab-edges

- `anchor-hero` -> `public/images/j-anchor-hero.webp` (2000x1333) - Balconied building with strong horizontal slab edges under a blue sky - https://unsplash.com/photos/modern-concrete-building-with-reflective-glass-windows-N0kLynkvQ9k
- `anchor-1` -> `public/images/j-anchor-1.webp` (1400x1050) - Curved floor slab edges rising to the top of a glazed building - https://unsplash.com/photos/modern-skyscraper-with-glass-facade-against-clear-blue-sky-6DXYD_gGeAw

### /journal/facade-maintenance-checklist

- `maint-hero` -> `public/images/j-maint-hero.webp` (2000x1333) - Sweeping metal cladding curve against a pale sky - https://unsplash.com/photos/gray-and-white-building-roof-at-day-time-_UuN_2ixJvA
- `maint-1` -> `public/images/j-maint-1.webp` (1400x933) - Curved glazed office facade under a clear blue sky - https://unsplash.com/photos/white-and-blue-glass-walled-building-Wm8opOd-MDE

### /journal/facade-mock-up-review

- `mockup-hero` -> `public/images/j-mockup-hero.webp` (2000x1333) - Large warm-toned cladding panels framed against the sky - https://unsplash.com/photos/brown-and-gray-concrete-building-Deg7cdm9oH4
- `mockup-1` -> `public/images/j-mockup-1.webp` (1400x1050) - Folded metal cladding panels catching the light - https://unsplash.com/photos/a-close-up-of-a-building-with-a-lot-of-papers-stuck-to-it-AoXxb_FSQ-s

### /journal/reading-facade-shop-drawings

- `shopdwg-hero` -> `public/images/j-shopdwg-hero.webp` (2000x1333) - Hand-drawn building elevation in warm watercolour tones - https://unsplash.com/photos/a-drawing-of-a-building-with-two-benches-in-front-of-it-YpSr2YJSuUY
- `shopdwg-1` -> `public/images/j-shopdwg-1.webp` (1400x933) - Sheets of building drawings spread on a wooden table - https://unsplash.com/photos/a-wooden-table-topped-with-lots-of-papers-IzFXEH0jb0w

### /journal/replacing-damaged-facade-glass

- `replace-hero` -> `public/images/j-replace-hero.webp` (2000x1333) - Cracked glass pane with warm light behind it - https://unsplash.com/photos/a-close-up-of-a-broken-glass-window-j9-2LIZ2_Rc
- `replace-1` -> `public/images/j-replace-1.webp` (1400x933) - Shattered glass reflecting a cloudy sky - https://unsplash.com/photos/a-close-up-of-a-broken-glass-window-dVOq_uij30c

### /journal/skylight-design-and-drainage

- `skylight-hero` -> `public/images/j-skylight-hero.webp` (2000x1333) - Glass roof grid seen from below against a pale blue sky - https://unsplash.com/photos/glass-ceiling-with-a-geometric-pattern-cy6XFD1ZiOU
- `skylight-1` -> `public/images/j-skylight-1.webp` (1400x1050) - Looking up through a stepped glass lantern roof - https://unsplash.com/photos/a-very-tall-building-with-lots-of-windows-KlGCqgF7SCE

### /journal/solar-control-glass-and-shading

- `solar-hero` -> `public/images/j-solar-hero.webp` (2000x1333) - Sunlit white shading panels against blue sky - https://unsplash.com/photos/modern-building-facade-with-white-fabric-screens-aBxb72gChjk
- `solar-1` -> `public/images/j-solar-1.webp` (1400x933) - Angled glass fins on a facade reflecting the sky - https://unsplash.com/photos/modern-building-facade-with-reflective-glass-panels-Taz-U34oXFw

### /journal/window-drainage-and-weep-holes

- `weep-hero` -> `public/images/j-weep-hero.webp` (2000x1333) - Timber-lined window opening with a pale sky beyond - https://unsplash.com/photos/window-frame-with-vertical-wooden-slats-e3nT9w9mRJ8
- `weep-1` -> `public/images/j-weep-1.webp` (1400x1050) - Slim-framed sliding window set in a white wall - https://unsplash.com/photos/window-reflects-the-sky-and-trees-Q3B8qLjahdo

### /journal/choosing-a-facade-contractor-in-india

- `contractor-hero` -> `public/images/j-contractor-hero-v2.webp` (2000x1333) - Multi-storey building under construction glowing at night - https://unsplash.com/photos/a-large-building-with-a-crane-on-top-of-it-6ZshT5udWxs
- `contractor-1` -> `public/images/j-contractor-1-v2.webp` (1400x933) - Scaffolded building during construction - https://unsplash.com/photos/concrete-building-under-construction-hfI0pr6g4yw
- `contractor-2` -> `public/images/j-contractor-2-v2.webp` (1400x933) - Tower crane beside a building taking shape - https://unsplash.com/photos/construction-of-a-building-in-progress-3GdHDDtHJ-4

### /journal/facades-for-indian-climates

- `climate-hero` -> `public/images/j-climate-hero-v2.webp` (2000x1333) - Low sun flaring across a balconied brick and glass facade - https://unsplash.com/photos/a-tall-brick-building-with-windows-and-balconies-omDM3mA7Gy4
- `climate-1` -> `public/images/j-climate-1-v2.webp` (1400x933) - Dappled shadows across a warm-toned building face - https://unsplash.com/photos/a-tall-building-with-lots-of-windows-next-to-a-street-eT9d3CznqLg
- `climate-2` -> `public/images/j-climate-2-v2.webp` (1400x933) - Modern white-framed house among palm trees - https://unsplash.com/photos/a-modern-luxurious-house-sits-among-palm-trees-_tEBCVrEnyo

### /journal/monsoon-proof-facades-and-windows

- `monsoon-hero` -> `public/images/j-monsoon-hero-v2.webp` (2000x1333) - Rainwater dripping from a roof edge over green foliage - https://unsplash.com/photos/a-rain-gutter-with-water-running-down-it-sEjMrYwLSC4
- `monsoon-1` -> `public/images/j-monsoon-1-v2.webp` (1400x966) - Wet city street at dusk with lights reflected in the rain - https://unsplash.com/photos/people-walking-on-street-during-daytime-cWtZ_6ysd94
- `monsoon-2` -> `public/images/j-monsoon-2-v2.webp` (1400x933) - Rain falling on a sloped roof among leaves - https://unsplash.com/photos/a-wooden-bridge-over-a-river-I1ZgbZZK5_M

## Later articles (photos chosen 2026-10-08)

### /journal/wind-load-on-facades-what-it-means

- `wind-hero` -> `public/images/j-wind-hero.webp` (2000x1333) - Dark glass towers rising into a stormy blue sky - https://unsplash.com/photos/a-couple-of-tall-buildings-under-a-cloudy-sky-FkVLAB3HJ3A
- `wind-1` -> `public/images/j-wind-1.webp` (1400x1053) - Glass tower reflecting clouds as it climbs - https://unsplash.com/photos/blue-glass-building-under-blue-sky-during-daytime-__LQBBYGULo

### /journal/firestopping-at-curtain-wall-slab-edges

- `firestop-hero` -> `public/images/j-firestop-hero.webp` (2000x1333) - Blue glass facade meeting a clean corner under a clear sky - https://unsplash.com/photos/a-tall-blue-building-with-a-sky-in-the-background-MNkJpgjDfHo
- `firestop-1` -> `public/images/j-firestop-1.webp` (1400x1053) - Glazed corridor running beside a concrete wall - https://unsplash.com/photos/empty-building-alley-7mD1JA7gl4E

### /journal/how-facade-glass-thickness-is-chosen

- `gthick-hero` -> `public/images/j-gthick-hero.webp` (2000x1333) - Stacked glass sheets showing their pale green edges - https://unsplash.com/photos/green-and-white-line-paper-PreLE0ZJVQ0
- `gthick-1` -> `public/images/j-gthick-1.webp` (1400x933) - Close view of a thick glass edge - https://unsplash.com/photos/a-close-up-of-a-piece-of-food-on-a-table-ukAnAaQi0q8

### /journal/laminated-or-toughened-glass-for-facades

- `lamtough-1` -> `public/images/j-lamtough-1.webp` (1400x933) - Balconies with glass railings against a clear sky - https://unsplash.com/photos/white-and-brown-concrete-building-yz8_w9qtwZY
- `lamtough-hero` -> `public/images/j-lamtough-hero.webp` (2000x1333) - Balconies with glass railings in warm late light - https://unsplash.com/photos/black-metal-framed-glass-window-XuB5C7xKks0

### /journal/insulated-glass-units-what-is-inside

- `igu-1` -> `public/images/j-igu-1.webp` (1400x932) - Opening window with a teal frame and glass beyond - https://unsplash.com/photos/grey-metal-framed-glass-window-closed-Dsms8jjMVQo
- `igu-hero` -> `public/images/j-igu-hero.webp` (2000x1333) - Slim-framed window grid with soft cloud beyond - https://unsplash.com/photos/a-black-and-white-photo-of-a-glass-wall-oRyZNAzM6gM

### /journal/low-e-coatings-explained-for-facades

- `lowe-hero` -> `public/images/j-lowe-hero.webp` (2000x1333) - Glass tower reflecting a cloudy sky - https://unsplash.com/photos/low-angle-photo-of-high-rise-building-H0vuplqoX0c
- `lowe-1` -> `public/images/j-lowe-1.webp` (1400x1053) - Facade fins catching pink and purple light - https://unsplash.com/photos/modern-building-facade-with-angled-windows-against-sky-EKy-whG4tBE

### /journal/sealants-and-gaskets-in-facades

- `sealant-hero` -> `public/images/j-sealant-hero.webp` (2000x1333) - Window set in a sunlit brick wall - https://unsplash.com/photos/a-window-sill-sitting-next-to-a-brick-building-t-wHtgv4FiA
- `sealant-1` -> `public/images/j-sealant-1.webp` (1400x933) - Close view of a window edge and its seal - https://unsplash.com/photos/a-window-with-a-glass-OqDeyqXbGFQ

### /journal/aluminium-extrusion-tolerances-explained

- `extol-hero` -> `public/images/j-extol-hero.webp` (2000x1333) - Fine parallel metal ribs in raking light - https://unsplash.com/photos/black-and-white-striped-textile-gRDgwHDrcNI
- `extol-1` -> `public/images/j-extol-1.webp` (1400x967) - Aluminium extruded sections in a chevron pattern - https://unsplash.com/photos/a-stack-of-metal-sheets-stacked-on-top-of-each-other-GsJwAFOtAG4

### /journal/facade-installation-sequence-on-site

- `install-hero` -> `public/images/j-install-hero.webp` (2000x1333) - Crane reflected in the glass of a rising facade - https://unsplash.com/photos/a-tall-building-with-a-glass-front-aeRa0u7apC8
- `install-1` -> `public/images/j-install-1.webp` (1400x1053) - Tower crane mirrored in a glazed wall - https://unsplash.com/photos/white-concrete-glass-building-qNXLyx_1daY

### /journal/facade-warranty-and-defect-liability

- `warranty-hero` -> `public/images/j-warranty-hero.webp` (2000x1333) - Dark-framed glass building under a soft cloudy sky - https://unsplash.com/photos/a-tall-building-with-lots-of-windows-on-top-of-it-8UDnSkjGqGU
- `warranty-1` -> `public/images/j-warranty-1.webp` (1400x788) - Finished office building with a regular window grid - https://unsplash.com/photos/a-building-with-many-windows-FjagHmZAq38

### /journal/terracotta-hpl-or-acp-cladding

- `terra-hero` -> `public/images/j-terra-hero.webp` (2000x1333) - Sweeping terracotta-toned cladding against the sky - https://unsplash.com/photos/curving-terracotta-facade-against-a-blue-sky-3Duo5nIxCQQ
- `terra-1` -> `public/images/j-terra-1.webp` (1400x933) - Terracotta lattice screen in warm light - https://unsplash.com/photos/terracotta-patterned-screen-with-geometric-shapes-fPt8OXRsGeQ

### /journal/perforated-metal-screens-on-facades

- `perf-hero` -> `public/images/j-perf-hero.webp` (2000x1333) - Perforated gold-toned facade with a lace-like canopy - https://unsplash.com/photos/modern-building-with-metal-lattice-roof-r03JZhy1-Y8
- `perf-1` -> `public/images/j-perf-1.webp` (1400x933) - White perforated panel with warm cut-outs - https://unsplash.com/photos/white-perforated-surface-with-small-holes-and-larger-square-cutouts-_tpEVVFozmc

### /journal/double-skin-facades-explained

- `dsf-hero` -> `public/images/j-dsf-hero.webp` (2000x1333) - Layered glass panels held on bolted fixings - https://unsplash.com/photos/white-metal-building-frame-n7wW6xVpVJo
- `dsf-1` -> `public/images/j-dsf-1.webp` (1400x933) - Glass curtain wall with fine mullion lines in daylight - https://unsplash.com/photos/modern-building-with-glass-and-red-facade-ll_Lcvg0E9I

### /journal/glass-reflectivity-and-glare-for-neighbours

- `glare-hero` -> `public/images/j-glare-hero.webp` (2000x1333) - Mirror-glass building reflecting clouds and sky - https://unsplash.com/photos/blue-and-white-glass-building-under-blue-sky-during-daytime-D5l_ka0rbEo
- `glare-1` -> `public/images/j-glare-1.webp` (1400x1053) - Golden glass facade catching the sun - https://unsplash.com/photos/bright-sun-reflected-in-a-modern-buildings-golden-glass-facade-Eueh0Io1CIQ

### /journal/air-leakage-in-facades-what-is-measured

- `airleak-hero` -> `public/images/j-airleak-hero.webp` (2000x1333) - Recessed window reflecting a cloudy sky - https://unsplash.com/photos/black-framed-glass-window-on-gray-concrete-wall-WhWyHsj9ULQ
- `airleak-1` -> `public/images/j-airleak-1.webp` (1400x934) - Open window frame with grass beyond - https://unsplash.com/photos/the-shadow-of-a-person-standing-in-front-of-a-window-9xT47v-dn2U

### /journal/structural-and-deflection-tests-for-facades

- `structest-hero` -> `public/images/j-structest-hero.webp` (2000x1333) - Curved glass tower against a clear blue sky - https://unsplash.com/photos/a-very-tall-glass-building-with-a-blue-sky-in-the-background-3icQ4FbvyWQ
- `structest-1` -> `public/images/j-structest-1.webp` (1400x933) - Woven metal facade sweeping across the sky - https://unsplash.com/photos/a-building-with-wavy-lines-on-it-against-a-blue-sky-T5nXYXCf50I

### /journal/facade-design-timeline-concept-to-handover

- `timeline-hero` -> `public/images/j-timeline-hero.webp` (2000x1333) - Timber architectural model of a building on a dark base - https://unsplash.com/photos/white-wooden-3-layer-shelf-hoIkcgbU2R8
- `timeline-1` -> `public/images/j-timeline-1.webp` (1400x933) - Architectural model of a low building among trees - https://unsplash.com/photos/brown-wooden-building-scale-model-panPsvU_y0Q

### /journal/value-engineering-a-facade-without-losing-performance

- `ve-hero` -> `public/images/j-ve-hero.webp` (2000x1333) - Dark curved metal cladding against a pale sky - https://unsplash.com/photos/gray-concrete-building-wall-gtBVNF6pCU8
- `ve-1` -> `public/images/j-ve-1.webp` (1400x933) - White cladding panels in a regular grid - https://unsplash.com/photos/a-close-up-of-a-building-with-many-windows-TGKpLRIGVrM

### /journal/frameless-glass-doors-hardware-floor-and-header

- `fgdoor-hero` -> `public/images/j-fgdoor-hero.webp` (2000x1333) - Tall pivoting glass door opening to a bright interior - https://unsplash.com/photos/a-restaurant-with-glass-walls-and-tables-and-chairs-iKcYogjuMeY
- `fgdoor-1` -> `public/images/j-fgdoor-1.webp` (1400x933) - Frameless glass entrance with planting beyond - https://unsplash.com/photos/modern-building-entrance-with-glass-doors-and-a-green-wall-W9JLJQ47hU8

### /journal/pergolas-and-glass-canopies-weather-and-drainage

- `pergola-hero` -> `public/images/j-pergola-hero.webp` (2000x1333) - White louvred pergola roof against a blue sky - https://unsplash.com/photos/white-and-blue-concrete-building-9quXVKeBJjA
- `pergola-1` -> `public/images/j-pergola-1.webp` (1400x933) - Covered terrace with a flat white roof at golden hour - https://unsplash.com/photos/black-metal-table-and-chairs-on-green-grass-field-during-daytime-Kwg6xKwBNGA


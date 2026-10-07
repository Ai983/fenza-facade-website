// The light half of the location data: just enough to name and link the city pages. The footer,
// the homepage, the Contact page, the /locations index and the site-wide structured data use it,
// so it ships in the main script. The full page text lives in locations.ts and loads only on a
// city page (see pages/LocationRoute.tsx), the same way the Journal does. Keep this file small.

export interface LocationBase {
  slug: string;
  /** The page's main city, for structured data ("Ludhiana" on the Ludhiana & Punjab page). */
  city: string;
  /** True when the page covers the whole state, not just its main city. */
  wholeState?: true;
  /** Short name used in headings and links ("Pune"). */
  name: string;
  /** Other spellings people search for ("Bangalore"). */
  alsoKnownAs?: string;
  /** State or union territory, for structured data. */
  state: string;
  /** Group on the index page. */
  region: "North India" | "West India" | "South India";
  /** Hero and card image key (public/images). */
  hero: string;
  /** One line for the index card. */
  card: string;
}

export const LOCATION_INDEX: LocationBase[] = [
  {
    slug: "delhi",
    city: "Delhi",
    name: "Delhi",
    state: "Delhi",
    region: "North India",
    hero: "about-hero",
    card: "Hospitals, institutions, offices and premium homes, close to our line.",
  },
  {
    slug: "gurugram",
    city: "Gurugram",
    name: "Gurugram",
    alsoKnownAs: "Gurgaon",
    state: "Haryana",
    region: "North India",
    hero: "home-hero",
    card: "Home to our line: office towers, IT campuses and high-rise homes.",
  },
  {
    slug: "noida",
    city: "Noida",
    name: "Noida",
    state: "Uttar Pradesh",
    region: "North India",
    hero: "cw-hero",
    card: "Offices, IT campuses, factories and high-rise housing.",
  },
  {
    slug: "faridabad",
    city: "Faridabad",
    name: "Faridabad",
    state: "Haryana",
    region: "North India",
    hero: "sec-towers",
    card: "An industrial city in the NCR, with new housing and commercial growth.",
  },
  {
    slug: "ghaziabad",
    city: "Ghaziabad",
    name: "Ghaziabad",
    state: "Uttar Pradesh",
    region: "North India",
    hero: "rl-hero",
    card: "High-rise housing, commercial centres and industry east of Delhi.",
  },
  {
    slug: "sonipat",
    city: "Sonipat",
    name: "Sonipat & Panipat",
    state: "Haryana",
    region: "North India",
    hero: "leadership-hero",
    card: "University campuses, Kundli's industry and Panipat's textile mills.",
  },
  {
    slug: "chandigarh",
    city: "Chandigarh",
    name: "Chandigarh",
    state: "Chandigarh",
    region: "North India",
    hero: "ca-hero",
    card: "A planned city: homes, offices and institutions across the Tricity.",
  },
  {
    slug: "ludhiana",
    city: "Ludhiana",
    wholeState: true,
    name: "Ludhiana & Punjab",
    state: "Punjab",
    region: "North India",
    hero: "sl-hero",
    card: "Industry, showrooms and premium homes across Punjab.",
  },
  {
    slug: "amritsar",
    city: "Amritsar",
    name: "Amritsar",
    state: "Punjab",
    region: "North India",
    hero: "sf-hero",
    card: "A pilgrimage city: hotels, commercial fronts and premium homes.",
  },
  {
    slug: "shimla",
    city: "Shimla",
    wholeState: true,
    name: "Shimla & Himachal Pradesh",
    state: "Himachal Pradesh",
    region: "North India",
    hero: "sg-hero",
    card: "Hill sites, cold winters and snow: hotels, homes and Baddi's industry.",
  },
  {
    slug: "dehradun",
    city: "Dehradun",
    name: "Dehradun & Haridwar",
    state: "Uttarakhand",
    region: "North India",
    hero: "sk-hero",
    card: "Institutions, homes and industry in the wet Himalayan foothills.",
  },
  {
    slug: "jaipur",
    city: "Jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    region: "North India",
    hero: "pg-hero",
    card: "Heat, dust and heritage: hotels, offices and homes in Rajasthan's capital.",
  },
  {
    slug: "bhiwadi",
    city: "Bhiwadi",
    name: "Bhiwadi & Neemrana",
    state: "Rajasthan",
    region: "North India",
    hero: "cl-hero",
    card: "Factories and admin blocks on the Delhi–Jaipur industrial belt.",
  },
  {
    slug: "lucknow",
    city: "Lucknow",
    name: "Lucknow",
    state: "Uttar Pradesh",
    region: "North India",
    hero: "resources-hero",
    card: "Government, institutions, hospitals and a growing commercial city.",
  },
  {
    slug: "agra",
    city: "Agra",
    name: "Agra",
    state: "Uttar Pradesh",
    region: "North India",
    hero: "contact-hero",
    card: "Hotels and commercial buildings in the city of the Taj Mahal.",
  },
  {
    slug: "ahmedabad",
    city: "Ahmedabad",
    wholeState: true,
    name: "Ahmedabad & Gujarat",
    state: "Gujarat",
    region: "West India",
    hero: "lv-hero",
    card: "Hot, dry and bright: towers, offices and industry across Gujarat.",
  },
  {
    slug: "pune",
    city: "Pune",
    name: "Pune",
    state: "Maharashtra",
    region: "West India",
    hero: "rv-hero",
    card: "IT parks, factories and towers, built for a long monsoon.",
  },
  {
    slug: "bengaluru",
    city: "Bengaluru",
    name: "Bengaluru",
    alsoKnownAs: "Bangalore",
    state: "Karnataka",
    region: "South India",
    hero: "sp-hero",
    card: "Tech campuses and offices in a mild, rainy climate.",
  },
];

export const LOCATION_REGIONS = ["North India", "West India", "South India"] as const;

/** schema.org places for one location page: its city, plus its state when the page covers it all. */
export const locationPlaces = (l: LocationBase): Record<string, unknown>[] => [
  {
    "@type": "City",
    name: l.city,
    containedInPlace: { "@type": "State", name: l.state },
  },
  ...(l.wholeState ? [{ "@type": "State", name: l.state }] : []),
];

/** One sentence naming the cities, for FAQs and descriptions elsewhere on the site. */
export const SERVED_SENTENCE =
  "Delhi NCR (Delhi, Gurugram, Noida, Faridabad, Ghaziabad, Sonipat), Chandigarh, Punjab, Himachal Pradesh, Uttarakhand, Jaipur and Rajasthan, Lucknow and Agra, Ahmedabad and Gujarat, Pune and Bengaluru";

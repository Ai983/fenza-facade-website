import { Helmet } from "react-helmet-async";
import {
  canonical,
  absoluteUrl,
  TITLE_SUFFIX,
  buildSchemaGraph,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  /** Extra JSON-LD nodes appended to the Org + WebSite graph. */
  schema?: Array<Record<string, unknown>>;
  noSuffix?: boolean;
  type?: "website" | "article";
}

export default function Seo({
  title,
  description,
  path,
  image = "/og/home-hero.jpg",
  schema = [],
  noSuffix = false,
  type = "website",
}: SeoProps) {
  const fullTitle = noSuffix ? title : `${title} · ${TITLE_SUFFIX}`;
  const url = canonical(path);
  const img = absoluteUrl(image);
  const graph = buildSchemaGraph([
    organizationSchema,
    websiteSchema,
    ...schema,
  ]);

  return (
    <Helmet>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Fenza Facade Engineering" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
      <script type="application/ld+json">{JSON.stringify(graph)}</script>
    </Helmet>
  );
}

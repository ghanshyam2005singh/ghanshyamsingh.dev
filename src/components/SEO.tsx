import Head from "next/head";

const SITE_URL = "https://ghanshyam-singh.me";
const FALLBACK_URL = "https://ghanshyamsingh-dev.vercel.app";
const DEFAULT_IMAGE = "/assets/cmo-2.jpg";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const defaultTitle =
  "Ghanshyam Singh - Alumconn Founder, Full Stack Developer & Open Source Contributor";

const defaultDescription =
  "Ghanshyam Singh is the founder of Alumconn, a full stack developer, open-source contributor, and KubeStellar LFX mentee building products for students, developers, and communities.";

const defaultKeywords = [
  "Ghanshyam Singh",
  "Ghanshyam Singh Alumconn",
  "Alumconn",
  "Alumconn founder",
  "Ghanshyam Singh developer",
  "Ghanshyam Singh portfolio",
  "KubeStellar LFX mentee",
  "full stack developer India",
  "open source contributor",
];

export const absoluteUrl = (path = "/") => {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};

const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords = [],
  publishedTime,
  modifiedTime,
  structuredData,
}) => {
  const canonicalUrl = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);
  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));
  const pageTitle = title.includes("Ghanshyam Singh")
    ? title
    : `${title} - Ghanshyam Singh`;
  const jsonLd = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={mergedKeywords.join(", ")} />
      <meta name="author" content="Ghanshyam Singh" />
      <meta name="creator" content="Ghanshyam Singh" />
      <meta name="publisher" content="Ghanshyam Singh" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" href={FALLBACK_URL} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="Ghanshyam Singh" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={pageTitle} />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@https_ghanshyam" />
      <meta name="twitter:creator" content="@https_ghanshyam" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}

      {jsonLd.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </Head>
  );
};

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Ghanshyam Singh",
  url: SITE_URL,
  image: `${SITE_URL}${DEFAULT_IMAGE}`,
  jobTitle: "Full Stack Developer",
  description: defaultDescription,
  brand: {
    "@type": "Brand",
    name: "Ghanshyam Singh",
  },
  founder: {
    "@type": "Organization",
    name: "Alumconn",
    url: "https://alumconn.in",
  },
  sameAs: [
    "https://ghanshyamsingh-dev.vercel.app",
    "https://alumconn.in",
    "https://github.com/ghanshyam2005singh",
    "https://www.linkedin.com/in/ghanshyam-singh-b014232b2/",
    "https://twitter.com/https_ghanshyam",
    "https://instagram.com/https_ghanshyam",
    "https://linktr.ee/https_ghanshyam",
  ],
  knowsAbout: [
    "Alumconn",
    "Full Stack Development",
    "Open Source",
    "Kubernetes",
    "KubeStellar",
    "Cloud Native",
    "Next.js",
    "TypeScript",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "Ghanshyam Singh",
  alternateName: ["Ghanshyam Singh Portfolio", "Ghanshyam Singh Alumconn"],
  url: SITE_URL,
  author: {
    "@id": `${SITE_URL}/#person`,
  },
  about: {
    "@type": "Thing",
    name: "Ghanshyam Singh, Alumconn, open source, and full stack development",
  },
};

export const alumconnJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://alumconn.in/#organization",
  name: "Alumconn",
  url: "https://alumconn.in",
  founder: {
    "@id": `${SITE_URL}/#person`,
  },
  description:
    "Alumconn is an alumni networking platform founded by Ghanshyam Singh to connect students with alumni for mentorship, internships, and career guidance.",
};

export default SEO;

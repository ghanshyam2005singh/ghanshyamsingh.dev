import React from "react";
import MediaCoverage from "../components/MediaCoverage";
import SEO, { personJsonLd } from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const NewsPage: React.FC = () => (
  <>
    <SEO
      title="News & Media Coverage - Ghanshyam Singh and Alumconn"
      description="Press coverage, media mentions, and news articles featuring Ghanshyam Singh, Alumconn, and his work building student and developer-focused products."
      path="/news"
      keywords={[
        "Ghanshyam Singh news",
        "Ghanshyam Singh media coverage",
        "Alumconn news",
        "Ghanshyam Singh Alumconn news",
      ]}
      structuredData={personJsonLd}
    />
    <SiteLayout>
      <MediaCoverage />
    </SiteLayout>
  </>
);

export default NewsPage;

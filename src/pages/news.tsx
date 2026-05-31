import React from "react";
import Head from "next/head";
import MediaCoverage from "../components/MediaCoverage";
import SiteLayout from "../components/SiteLayout";

const NewsPage: React.FC = () => (
  <>
    <Head>
      <title>News - Ghanshyam Singh</title>
      <meta
        name="description"
        content="Press coverage, media mentions, and news articles featuring Ghanshyam Singh's work."
      />
    </Head>
    <SiteLayout>
      <MediaCoverage />
    </SiteLayout>
  </>
);

export default NewsPage;

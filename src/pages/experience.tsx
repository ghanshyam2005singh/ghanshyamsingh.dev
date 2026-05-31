import React from "react";
import Head from "next/head";
import Achievements from "../components/Achievments";
import WorkExperience from "../components/WorkExperince";
import SiteLayout from "../components/SiteLayout";

const ExperiencePage: React.FC = () => (
  <>
    <Head>
      <title>Experience - Ghanshyam Singh</title>
      <meta
        name="description"
        content="Ghanshyam Singh's work experience, open-source programs, achievements, and education."
      />
    </Head>
    <SiteLayout>
      <WorkExperience />
      <Achievements />
    </SiteLayout>
  </>
);

export default ExperiencePage;

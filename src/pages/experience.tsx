import React from "react";
import Achievements from "../components/Achievments";
import WorkExperience from "../components/WorkExperince";
import SEO, { personJsonLd } from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const ExperiencePage: React.FC = () => (
  <>
    <SEO
      title="Experience - Ghanshyam Singh, KubeStellar LFX & Open Source"
      description="Ghanshyam Singh's experience across Google Summer of Code, Linux Foundation LFX, KubeStellar, CNCF, internships, open source, and technical achievements."
      path="/experience"
      keywords={[
        "Ghanshyam Singh experience",
        "Ghanshyam Singh LFX",
        "Ghanshyam Singh KubeStellar",
        "Ghanshyam Singh CNCF",
      ]}
      structuredData={personJsonLd}
    />
    <SiteLayout>
      <WorkExperience />
      <Achievements />
    </SiteLayout>
  </>
);

export default ExperiencePage;

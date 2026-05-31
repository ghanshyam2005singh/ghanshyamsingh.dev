import React from "react";
import About from "../components/About";
import Academics from "../components/Academics";
import Achievements from "../components/Achievments";
import Skills from "../components/Skills";
import SEO, { personJsonLd } from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const AboutPage: React.FC = () => (
  <>
    <SEO
      title="About Ghanshyam Singh - Alumconn, Skills, Education & Achievements"
      description="Learn about Ghanshyam Singh, founder of Alumconn, full stack developer, open-source contributor, skills, education, achievements, and technical journey."
      path="/about"
      type="profile"
      keywords={[
        "About Ghanshyam Singh",
        "Ghanshyam Singh skills",
        "Ghanshyam Singh education",
        "Ghanshyam Singh achievements",
      ]}
      structuredData={personJsonLd}
    />
    <SiteLayout>
      <About />
      <Skills />
      <Achievements />
      <Academics />
    </SiteLayout>
  </>
);

export default AboutPage;

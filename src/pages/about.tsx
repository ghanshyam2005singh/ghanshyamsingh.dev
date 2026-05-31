import React from "react";
import Head from "next/head";
import About from "../components/About";
import Academics from "../components/Academics";
import Achievements from "../components/Achievments";
import Skills from "../components/Skills";
import SiteLayout from "../components/SiteLayout";

const AboutPage: React.FC = () => (
  <>
    <Head>
      <title>About - Ghanshyam Singh</title>
      <meta
        name="description"
        content="Learn about Ghanshyam Singh, skills, education, achievements, and media coverage."
      />
    </Head>
    <SiteLayout>
      <About />
      <Skills />
      <Achievements />
      <Academics />
    </SiteLayout>
  </>
);

export default AboutPage;

import React from "react";
import Head from "next/head";
import Projects from "../components/Projects";
import SiteLayout from "../components/SiteLayout";

const ProjectsPage: React.FC = () => (
  <>
    <Head>
      <title>Projects - Ghanshyam Singh</title>
      <meta
        name="description"
        content="Explore Ghanshyam Singh's featured projects, product builds, and open-source work."
      />
    </Head>
    <SiteLayout>
      <Projects />
    </SiteLayout>
  </>
);

export default ProjectsPage;

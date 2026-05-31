import React from "react";
import Projects from "../components/Projects";
import SEO, { alumconnJsonLd } from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const ProjectsPage: React.FC = () => (
  <>
    <SEO
      title="Projects by Ghanshyam Singh - Alumconn, CV Slayer & Open Source"
      description="Explore Ghanshyam Singh's projects including Alumconn, CV Slayer, Padh-le-Bhai, cloud-native work, open-source contributions, and full stack product builds."
      path="/projects"
      keywords={[
        "Ghanshyam Singh projects",
        "Alumconn",
        "Alumconn Ghanshyam Singh",
        "CV Slayer",
        "Padh-le-Bhai",
      ]}
      structuredData={alumconnJsonLd}
    />
    <SiteLayout>
      <Projects />
    </SiteLayout>
  </>
);

export default ProjectsPage;

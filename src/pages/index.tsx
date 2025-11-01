import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Academics from "../components/Academics";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Achievements from "../components/Achievments";
import WorkExperience from "../components/WorkExperince";
import MediaCoverage from "../components/MediaCoverage";
//import History from "../components/History";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Ghanshyam Singh - Portfolio</title>
        <meta
          name="description"
          content="Welcome to my portfolio website. Explore my projects, skills, journey, achievements, and contact information."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
       <div className="min-h-screen w-full bg-[#f9fafb] relative">
        {/* Diagonal Fade Grid Background - Top Left */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #d1d5db 1px, transparent 1px),
              linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          }}
        />
        <Header />
        <main id="main-content" className="relative z-10 animate-fadein">
          <About />
          <Skills />
          <WorkExperience />
          <Projects />
          <Achievements />
          <Academics />
          <MediaCoverage />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
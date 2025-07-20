import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Head from "next/head";

const Home: React.FC = () => (
  <>
    <Head>
      <title>Ghanshyam Singh - Portfolio</title>
      <meta
        name="description"
        content="Welcome to my portfolio website. Explore my projects, skills, and contact information."
      />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main id="main-content">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
);

export default Home;
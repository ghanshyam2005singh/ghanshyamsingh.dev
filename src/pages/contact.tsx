import React from "react";
import Head from "next/head";
import Contact from "../components/Contact";
import SiteLayout from "../components/SiteLayout";

const ContactPage: React.FC = () => (
  <>
    <Head>
      <title>Contact - Ghanshyam Singh</title>
      <meta
        name="description"
        content="Contact Ghanshyam Singh for collaborations, projects, or open-source opportunities."
      />
    </Head>
    <SiteLayout>
      <Contact />
    </SiteLayout>
  </>
);

export default ContactPage;

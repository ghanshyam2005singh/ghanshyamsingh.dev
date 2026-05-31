import React from "react";
import Contact from "../components/Contact";
import SEO, { personJsonLd } from "../components/SEO";
import SiteLayout from "../components/SiteLayout";

const ContactPage: React.FC = () => (
  <>
    <SEO
      title="Contact Ghanshyam Singh - Alumconn Founder & Developer"
      description="Contact Ghanshyam Singh for Alumconn, collaborations, full stack projects, open-source opportunities, internships, speaking, or technical writing."
      path="/contact"
      keywords={[
        "Contact Ghanshyam Singh",
        "Ghanshyam Singh email",
        "Ghanshyam Singh Alumconn contact",
      ]}
      structuredData={personJsonLd}
    />
    <SiteLayout>
      <Contact />
    </SiteLayout>
  </>
);

export default ContactPage;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type SiteLayoutProps = {
  children: React.ReactNode;
};

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-[#f9fafb] relative overflow-x-hidden">
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 45%, transparent 88%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 45%, transparent 88%)",
        }}
      />
      <Header />
      <main id="main-content" className="relative z-10 animate-fadein">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default SiteLayout;

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import { usePathname } from "next/navigation";
import FeatureCard from "@/components/listfeature/FeatureCard";

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <FeatureCard iconKey="support" title="Support" subtext="We offer 24/7 support." />
        <FeatureCard iconKey="customizable" title="Customizable" subtext="Highly customizable features." />
        <FeatureCard iconKey="web" title="Web" subtext="Optimized for web applications." />
      </main>
    </>
  );
};

export default Home;

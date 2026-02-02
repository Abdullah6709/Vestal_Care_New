import React from "react";
import { Helmet } from "react-helmet-async";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutCare";
import AboutCare from "../components/AboutSection";
import OurServiceSection from "../components/ServicesSection";
import StatsBar from "../components/StatsBar";
import WhyChooseUsSection from "../components/WhyChooseSection";
import SpecialOfferSection from "../components/SpecialOffer";
import EasyStepsSection from "../components/EasyStepsSection";
import TestimonialSection from "../components/TestimonialSection";
import LatestNewsSection from "../components/LatestNewSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Vestal Health – Healthcare & Wellness Center in Noida</title>

        <meta
          name="description"
          content="Vestal Health is a healthcare and wellness center located at B-38, 2nd Floor, Sector 64, Noida 201301. We provide trusted medical and wellness services."
        />

        <meta property="og:title" content="Vestal Health – Healthcare & Wellness Center in Noida" />
        <meta
          property="og:description"
          content="Visit Vestal Health at B-38, 2nd Floor, Sector 64, Noida 201301 for quality healthcare and wellness services."
        />
        <meta property="og:url" content="https://vestalhealth.in" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Vestal Health",
            url: "https://vestalhealth.in",
            address: {
              "@type": "PostalAddress",
              streetAddress: "B-38, 2nd Floor, Sector 64",
              addressLocality: "Noida",
              addressRegion: "UP",
              postalCode: "201301",
              addressCountry: "IN",
            },
          })}
        </script>
      </Helmet>

      <HeroSection />
      <AboutCare />
      <AboutSection />
      <OurServiceSection />
      <StatsBar />
      <WhyChooseUsSection />
      <SpecialOfferSection />
      <EasyStepsSection />
      <TestimonialSection />
      <LatestNewsSection />
    </>
  );
};

export default Home;

import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../containers/Hero/Hero";
import PrayerTimes from "../containers/PrayerTimes/PrayerTimes";
import Button from "../components/Button/Button";
import Footer from "../containers/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import CTA from "../containers/CTA";

function Home() {
  const { t, i18n } = useTranslation("home");

  // UseNavigate
  const navigate = useNavigate();

  return (
    <div className="">
      <NavBar />
      <div className="w-full h-full top-0 right-0 bg-gradient-to-tr from-cream/20 to-gold-light/70">
        <Hero />

        {/* <!-- Prayer Times --> */}
        <PrayerTimes />
      </div>

      {/* <!-- Call to Action --> */}
      <CTA theme={"primary"} />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default Home;

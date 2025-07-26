import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../containers/Hero/Hero";
import PrayerTimes from "../containers/PrayerTimes/PrayerTimes";
import Button from "../components/Button/Button";
import Footer from "../containers/Footer/Footer";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
      <div className="py-16 bg-gradient-to-r from-green-islamic to-green-dark text-cream">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t("cta.subtitle")}</p>
          <div className="flex justify-center space-x-4">
            <Button
              title={t("common:volunteer")}
              handleClick={() => navigate("/donate")}
            />
            <Button
              theme="secondary"
              title={t("common:contactUs")}
              handleClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default Home;

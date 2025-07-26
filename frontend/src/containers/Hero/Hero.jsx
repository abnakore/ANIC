import React from "react";
import "./hero.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import {
  FaHandHoldingHeart,
  FaPeopleCarry,
  FaPrayingHands,
  FaQuran,
} from "react-icons/fa";
import Button from "../../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Hero() {
  // For translation
  const { t, i18n } = useTranslation("home");

  // UseNavigate
  const navigate = useNavigate();

  // Icons for different services
  const icons = {
    prayers: <FaPrayingHands />,
    education: <FaQuran />,
    dawah: <FaPeopleCarry />,
    community: <FaHandHoldingHeart />,
  };

  // Get the services and add icon to each
  const services = Object.entries(
    t("services.items", { returnObjects: true })
  ).map(([key, service]) => ({
    icon: icons[key],
    title: service.title,
    text: service.description,
  }));

  return (
    <>
      {/* <!-- Hero Section --> */}
      <div className="relative py-16 px-4 islamic-pattern">
        {/* <!-- Background Circles --> */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-green-islamic/10 rounded-full pulse-circle"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-gold/10 rounded-full pulse-circle"></div>

        {/* <!-- Hero Content --> */}
        <div className="container mx-auto relative z-10 max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-islamic mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-black-rich mb-8">{t("hero.subtitle")}</p>
          <div className="flex justify-center space-x-4">
            <Button
              title={t("common:visitUs")}
              handleClick={() => navigate("/contact")}
            />
            <Button
              theme="other"
              title={t("common:donate")}
              handleClick={() => navigate("/donate")}
            />
          </div>
        </div>

        {/* <!-- Services --> */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            {/* <h2 className="text-3xl font-bold text-center text-green-islamic mb-12">
              {t("services.title")}
            </h2> */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  text={service.text}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { useTranslation } from "react-i18next";
import ContactCard from "../components/ContactCard";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
  FaMapMarkedAlt,
  FaBus,
  FaCar,
  FaWheelchair,
} from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button/Button";
import Footer from "../containers/Footer/Footer";

import {
  COMPANY_LOCATION,
  EMAIL_ADDRESS,
  PHONE_NUMBER,
} from "../constants/constants";

function Contact() {
  const { t } = useTranslation("contact");

  // Get Company location
  const { latitude, longitude, label } = COMPANY_LOCATION;

  // Other contact info
  const otherInfo = {
    location: {
      icon: <FaMapMarkerAlt className="text-xl text-green-islamic" />,
      text: t("common:address"),
      ctaIcon: <FaArrowRight className="inline ml-1" />,
      ctaAction: () => openCompanyLocation(),
    },
    phone: {
      icon: <FaPhoneAlt className="text-xl text-green-islamic" />,
      text: t("common:phoneNo"),
      ctaIcon: <FaPhone className="inline ml-1" />,
      ctaAction: () => (location.href = `tel:${PHONE_NUMBER}`),
    },
    email: {
      icon: <FaEnvelope className="text-xl text-green-islamic" />,
      text: EMAIL_ADDRESS,
      ctaIcon: <FaEnvelope className="inline ml-1" />,
      ctaAction: () => (location.href = `mailto:${EMAIL_ADDRESS}`),
    },
  };

  // Get the contact Cards
  const contactCards = Object.entries(
    t("contacts", { returnObjects: true })
  ).map(([key, item]) => ({ ...item, ...otherInfo[key], key }));

  // types of each form field
  const fieldTypes = {
    name: "text",
    email: "email",
    subject: "dropdown",
    message: "textarea",
  };

  // Get the Form fields
  const formFields = Object.entries(
    t("form.fields", { returnObjects: true })
  ).map(([key, item]) => ({ ...item, type: fieldTypes[key] }));

  // Get Visiting Hours info
  const visitingHours = t("addInfo.items", { returnObjects: true });

  // Function that opens location in google map
  const openCompanyLocation = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const webUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    const appUrl = `geo:${latitude},${longitude}?q=${encodeURIComponent(
      label
    )}`;

    if (isMobile) {
      // Open map app on mobile
      window.location.href = appUrl;
    } else {
      // Open Google Maps in new tab on desktop
      window.open(webUrl, "_blank");
    }
  };

  return (
    <section className="bg-cream islamic-pattern">
      <NavBar />

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-3xl font-bold text-green-islamic mb-12 text-center">
          {t("title")}
        </h1>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactCards.map((item) => (
            <ContactCard
              key={item.key}
              icon={item.icon}
              title={item.title}
              text={item.text}
              subtext={item.subtext}
              ctaTitle={item.ctaTitle}
              ctaIcon={item.ctaIcon}
              ctaAction={item.ctaAction}
            />
          ))}
        </div>

        {/* Contact Form */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold">
            <h2 className="text-2xl font-bold text-green-islamic mb-6">
              <FaPaperPlane className="inline text-gold mx-2" />
              {t("form.title")}
            </h2>
            <form className="space-y-4">
              {formFields.map((field, i) => (
                <Input
                  key={i}
                  title={field.title}
                  placeholder={field.placeholder}
                  type={field.type}
                  dropdownOptions={field.dropdownOptions}
                />
              ))}

              <Button
                title={t("form.send")}
                handleClick={() => {}}
                otherClasses={"w-full"}
              />
            </form>
          </div>

          {/* Right: Additional Info */}
          <div className="bg-gradient-to-br from-green-islamic/5 to-green-dark/5 p-8 rounded-xl border border-gold-light">
            <h3 className="text-xl font-bold text-green-islamic mb-4">
              {t("addInfo.title")}
            </h3>
            <div className="space-y-4 mb-6">
              {visitingHours.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between border-b border-gold-light pb-2"
                >
                  <span>{item.title}</span>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-green-islamic flex items-center">
              <FaMapMarkedAlt className="text-gold mx-3" />
              {t("map.title")}
            </h2>
            <Button
              title={t("map.openInMap")}
              handleClick={openCompanyLocation}
            />
          </div>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-islamic/20 to-green-dark/20 z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3713.682085852048!2d9.01305618647635!3d12.778082741028191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11af2f7d2ed702ad%3A0xf48bb72586f9a314!2sBabura%20732104%2C%20Jigawa!5e1!3m2!1sen!2sng!4v1753647809994!5m2!1sen!2sng"
                className="border-0 w-full h-full"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <FaMapMarkerAlt className="text-5xl text-gold z-20 animate-bounce" />
            <div className="z-20 mt-4 text-center px-4">
              {/* <h3 className="text-xl font-bold text-green-islamic">
                {t("common:title")}
              </h3> */}
              {/* <p className="text-black-rich">{t("common:baburaNigeria")}</p> */}
            </div>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <FaBus className="text-2xl text-gold mr-4" />
              <div>
                <h4 className="font-bold text-green-islamic">
                  Public Transport
                </h4>
                <p className="text-sm">Bus routes 12, 45 stop nearby</p>
              </div>
            </div>
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <FaCar className="text-2xl text-gold mr-4" />
              <div>
                <h4 className="font-bold text-green-islamic">Parking</h4>
                <p className="text-sm">Free parking available onsite</p>
              </div>
            </div>
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <FaWheelchair className="text-2xl text-gold mr-4" />
              <div>
                <h4 className="font-bold text-green-islamic">Accessibility</h4>
                <p className="text-sm">Wheelchair accessible facility</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;

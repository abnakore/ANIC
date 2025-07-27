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

function Contact() {
  const { t } = useTranslation("contact");

  // Other contact info
  const otherInfo = {
    location: {
      icon: <FaMapMarkerAlt className="text-xl text-green-islamic" />,
      text: t("common:address"),
      ctaIcon: <FaArrowRight className="inline ml-1" />,
      ctaAction: () => {},
    },
    phone: {
      icon: <FaPhoneAlt className="text-xl text-green-islamic" />,
      text: t("common:phoneNo"),
      ctaIcon: <FaPhone className="inline ml-1" />,
      ctaAction: () => {},
    },
    email: {
      icon: <FaEnvelope className="text-xl text-green-islamic" />,
      text: "info@anic.org",
      ctaIcon: <FaEnvelope className="inline ml-1" />,
      ctaAction: () => {},
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
          <h2 className="text-2xl font-bold text-green-islamic mb-6 flex items-center">
            <FaMapMarkedAlt className="text-gold mr-3" />
            {t("map.title")}
          </h2>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-islamic/20 to-green-dark/20 z-10"></div>
            <FaMapMarkerAlt className="text-5xl text-gold z-20 animate-bounce" />
            <div className="z-20 mt-4 text-center px-4">
              <h3 className="text-xl font-bold text-green-islamic">
                {t("common:title")}
              </h3>
              <p className="text-black-rich">{t("common:baburaNigeria")}</p>
              <Button title={t("map.openInMap")} />
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

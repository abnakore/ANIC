import React from "react";

// Hooks
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { FaBullseye, FaEye, FaInfoCircle, FaTasks } from "react-icons/fa";
import { FaUserGear, FaUsersGear, FaUserShield } from "react-icons/fa6";

// Components
import Footer from "../../containers/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import Button from "../../components/Button/Button";
import History from "../../containers/History/History";
import MissionCard from "../../components/MissionCard";
import LeaderCard from "../../components/LeaderCard/LeaderCard";

// Styles
import "./about.css";
import CTA from "../../containers/CTA";

function About() {
  const { t, i18n } = useTranslation("about");

  // UseNavigate
  const navigate = useNavigate();

  // Trustees responsibilities
  const responsibilities = t("governance.trustee.responsibilities.items", {
    returnObjects: true,
  });

  // Management composition
  const managementComposition = t("governance.management.composition.items", {
    returnObjects: true,
  });

  // Trustee members
  const trusteeMembers = Object.entries(
    t("governance.trustee.members", {
      returnObjects: true,
    })
  ).map(([key, member]) => ({ ...member }));

  // Management members
  const managementMembers = Object.entries(
    t("governance.management.members", {
      returnObjects: true,
    })
  ).map(([key, member]) => ({ ...member }));

  // Society Impacts
  const societyImpact = t("impact.items", {
    returnObjects: true,
  });

  return (
    <div className="islamic-pattern">
      {/* <!-- Navbar --> */}
      <NavBar />

      {/* <!-- Hero Section for About Page --> */}
      <div className="relative py-20 px-4 bg-gradient-to-r from-green-islamic/10 to-green-dark/10">
        {/* <!-- Background Circles --> */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-green-islamic/10 rounded-full pulse-circle"></div>
        <div className="absolute bottom-20 left-0 w-48 h-48 bg-gold/10 rounded-full pulse-circle"></div>

        <div className="container mx-auto relative z-10 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-islamic mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-xl text-black-rich mb-8">{t("hero.subtitle")}</p>
          <div className="flex justify-center space-x-4">
            <Button
              theme=""
              title={t("common:ourHistory")}
              handleClick={() =>
                (location.href = location.pathname + "#history")
              }
            />
            <Button
              theme="other"
              title={t("common:ourLeadership")}
              handleClick={() =>
                (location.href = location.pathname + "#leadership")
              }
            />
          </div>
        </div>
      </div>

      {/* <!-- Mission and Vision --> */}
      <div className="py-16 bg-gradient-to-b from-cream to-gold-light/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <MissionCard
              icon={<FaBullseye />}
              title={t("mission.title")}
              text={t("mission.statement")}
            />

            <MissionCard
              icon={<FaEye />}
              title={t("vision.title")}
              text={t("vision.statement")}
            />
          </div>
        </div>
      </div>

      {/* <!-- History Timeline --> */}
      <History />

      {/* <!-- Governance Structure --> */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-islamic mb-4">
              {/* <span className="font-arabic text-4xl block mb-4">
                هيكل الحوكمة
              </span> */}
              {t("governance.title")}
            </h2>
            <p className="text-xl text-black-rich max-w-3xl mx-auto">
              {t("governance.subtitle")}
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* <!-- Board of Trustees --> */}
            <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-islamic to-green-dark py-6 px-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold flex items-center justify-center text-3xl text-white mb-4">
                  <FaUserShield />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("governance.trustee.title")}
                </h3>
                <p className="text-gold-light font-medium">
                  {t("governance.trustee.subtitle")}
                </p>
              </div>
              <div className="p-8">
                <p className="text-black-rich mb-6">
                  {t("governance.trustee.brief")}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-islamic mb-3 flex items-center">
                    <FaTasks className="text-gold mr-2" />
                    {t("governance.trustee.responsibilities.title")}:
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {responsibilities.map((responsibility, key) => (
                      <li
                        key={key}
                        className="relative before:content-['•'] before:text-gold before:absolute before:-left-4"
                      >
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cream p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-black-rich">
                    <FaInfoCircle className="text-gold mr-2" />
                    {t("governance.trustee.quote")}
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Board of Management --> */}
            <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-gradient-to-r from-green-dark to-green-islamic py-6 px-8 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold-light flex items-center justify-center text-3xl text-green-islamic mb-4">
                  <FaUsersGear />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("governance.management.title")}
                </h3>
                <p className="text-gold-light font-medium">
                  {t("governance.management.subtitle")}
                </p>
              </div>
              <div className="p-8">
                <p className="text-black-rich mb-6">
                  {t("governance.management.brief")}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-islamic mb-3 flex items-center">
                    <i className="fas fa-users text-gold mr-2"></i>
                    {t("governance.management.composition.title")}:
                  </h4>
                  <ul className="space-y-2 pl-6">
                    {managementComposition.map((member, key) => (
                      <li
                        key={key}
                        className="relative before:content-['•'] before:text-gold before:absolute before:-left-4"
                      >
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-cream p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-black-rich">
                    <FaInfoCircle className="text-gold mr-2" />
                    {t("governance.management.quote")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Relationship Note --> */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-gold-light/30 px-6 py-3 rounded-full">
              <div className="crescent bg-gold mr-3 before:bg-green-islamic"></div>
              <p className="font-bold text-green-islamic">
                {t("governance.relationshipNote")}
              </p>
            </div>
            <Link
              to="/constitution"
              className="text-gold hover:underline block"
            >
              {t("governance.readFull")}
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- Leadership Section --> */}
      <div
        id="leadership"
        className="py-16  bg-gradient-to-b from-cream/20 to-black-rich/40"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-islamic mb-4">
            {t("leadership.title")}
          </h2>
          <p className="text-xl text-center text-black-rich mb-12 max-w-3xl mx-auto">
            {t("leadership.subtitle")}
          </p>

          {/* <!-- Board of Trustees --> */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-islamic mb-8 text-center border-b border-gold-light pb-3">
              {t("governance.trustee.title")}
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {trusteeMembers.map((trustee, i) => (
                <LeaderCard
                  key={i}
                  name={trustee.name}
                  role={trustee.designation}
                  address={trustee.address}
                  email={trustee.email}
                  image={""}
                  trustee
                />
              ))}
            </div>
          </div>

          {/* <!-- Management Team --> */}
          <div>
            <h3 className="text-2xl font-bold text-green-islamic mb-8 text-center border-b-2 border-gold-light pb-3">
              {t("governance.management.title")}
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* <!-- Manager 1 --> */}
              {managementMembers.map((member, i) => (
                <LeaderCard
                  key={i}
                  name={member.name}
                  role={member.designation}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Our Impact --> */}
      <div className="py-16 bg-gradient-to-r from-green-islamic to-green-dark text-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            {t("impact.title")}
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            {t("impact.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {societyImpact.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-5xl font-bold text-gold mb-4">
                  {item.value}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <!-- Call to Action --> */}
      <CTA />

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default About;

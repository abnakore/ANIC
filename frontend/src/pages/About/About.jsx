import React from "react";

// Hooks
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { FaBullseye, FaEye } from "react-icons/fa";
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

function About() {
  const { t, i18n } = useTranslation("about");

  // UseNavigate
  const navigate = useNavigate();

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
            
          </h1>
          <p className="text-xl text-black-rich mb-8">
            
          </p>
          <div className="flex justify-center space-x-4">
            <Button theme="" title={"Our History"} handleClick={() => {}} />
            <Button
              theme="other"
              title={"Our Leadership"}
              handleClick={() => {}}
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
              title={"Our Mission"}
              text={`To establish a vibrant Islamic community that promotes faith,
                knowledge, and service. We strive to be a beacon of Islamic
                values, providing spiritual guidance, educational resources, and
                community support for Muslims in Babura and beyond.`}
            />

            <MissionCard
              icon={<FaEye />}
              title={"Our Vision"}
              text={`To create a sustainable Islamic ecosystem where every Muslim can
                grow spiritually, intellectually, and socially. We envision a
                future where our center serves as a model for Islamic excellence
                and community development throughout Nigeria.`}
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
              <span className="font-arabic text-4xl block mb-4">
                هيكل الحوكمة
              </span>
              Governance Structure
            </h2>
            <p className="text-xl text-black-rich max-w-3xl mx-auto">
              Our organizational structure ensures transparent and effective
              management according to Islamic principles
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
                  Board of Trustees
                </h3>
                <p className="text-gold-light font-medium">
                  Policy & Oversight
                </p>
              </div>
              <div className="p-8">
                <p className="text-black-rich mb-6">
                  The Board of Trustees consists of at least five members of
                  proven integrity, with at least one member from the progeny of
                  the late AN.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-islamic mb-3 flex items-center">
                    <i className="fas fa-tasks text-gold mr-2"></i>
                    Responsibilities:
                  </h4>
                  <ul className="space-y-2 pl-6">
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Make main policy decisions for the Center
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Appoint members to the Board of Management
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Ratify quarterly audit reports
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Replace deceased, dismissed or resigned members
                    </li>
                  </ul>
                </div>

                <div className="bg-cream p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-black-rich">
                    <i className="fas fa-info-circle text-gold mr-2"></i>
                    Members are selected based on proven integrity and
                    commitment to Islamic values
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
                  Board of Management
                </h3>
                <p className="text-gold-light font-medium">
                  Day-to-Day Operations
                </p>
              </div>
              <div className="p-8">
                <p className="text-black-rich mb-6">
                  The Board of Management consists of at least eleven members
                  responsible for daily operations and accountable to the Board
                  of Trustees.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-green-islamic mb-3 flex items-center">
                    <i className="fas fa-users text-gold mr-2"></i>
                    Composition:
                  </h4>
                  <ul className="space-y-2 pl-6">
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Imam
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Head Teacher
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Accountant
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      PTA Chairman
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      AN Family Representatives
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      JIBWIS Representative
                    </li>
                    <li className="relative before:content-['•'] before:text-gold before:absolute before:-left-4">
                      Community Members
                    </li>
                  </ul>
                </div>

                <div className="bg-cream p-4 rounded-lg border-l-4 border-gold">
                  <p className="text-sm text-black-rich">
                    <i className="fas fa-info-circle text-gold mr-2"></i>
                    The Board of Management implements policies set by the Board
                    of Trustees
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
                The Board of Management is responsible to the Board of Trustees
                • No person serves on both boards simultaneously
              </p>
            </div>
            <Link
              href="/constitution.pdf"
              className="text-gold hover:underline block"
            >
              Read Full Constitution →
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
            Our Leadership
          </h2>
          <p className="text-xl text-center text-black-rich mb-12 max-w-3xl mx-auto">
            Dedicated individuals guiding our community with wisdom and
            integrity
          </p>

          {/* <!-- Board of Trustees --> */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-green-islamic mb-8 text-center border-b border-gold-light pb-3">
              Board of Trustees
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* <!-- Trustee 1 --> */}
              <LeaderCard
                name={"Alhaji Musa Abubakar"}
                role={"Chairman"}
                address={"123 Islamic Way, Babura, Nigeria"}
                email={"musa@anic-babura.org"}
                image={""}
                trustee
              />

              {/* <!-- Trustee 2 --> */}
              <LeaderCard
                name={"Dr. Aisha Bello"}
                role={"Vice-Chairman"}
                address={"123 Islamic Way, Babura, Nigeri"}
                email={"musa@anic-babura.org"}
                image={""}
                trustee
              />

              {/* <!-- Trustee 3 --> */}
              <LeaderCard
                name={"Sheikh Ibrahim Musa"}
                role={"Secretary"}
                address={"123 Islamic Way, Babura, Nigeria"}
                email={"musa@anic-babura.org"}
                image={""}
                trustee
              />
            </div>
          </div>

          {/* <!-- Management Team --> */}
          <div>
            <h3 className="text-2xl font-bold text-green-islamic mb-8 text-center border-b-2 border-gold-light pb-3">
              Management Team
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* <!-- Manager 1 --> */}
              <LeaderCard name={"Imam Yusuf Adamu"} role={"Head Imam"} />

              {/* <!-- Manager 2 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Hajiya Fatima Ahmed
                </h4>
                <p className="text-gold text-sm mb-2">Head Teacher</p>
              </div>

              {/* <!-- Manager 3 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Alhaji Kabiru Sani
                </h4>
                <p className="text-gold text-sm mb-2">Accountant</p>
              </div>

              {/* <!-- Manager 4 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Malama Zainab Usman
                </h4>
                <p className="text-gold text-sm mb-2">Women's Programs</p>
              </div>

              {/* <!-- Manager 5 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Brother Ahmed Musa
                </h4>
                <p className="text-gold text-sm mb-2">Youth Coordinator</p>
              </div>

              {/* <!-- Manager 6 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Hajiya Aisha Abdullahi
                </h4>
                <p className="text-gold text-sm mb-2">Community Outreach</p>
              </div>

              {/* <!-- Manager 7 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Sheikh Tukur Bello
                </h4>
                <p className="text-gold text-sm mb-2">JIBWIS Representative</p>
              </div>

              {/* <!-- Manager 8 --> */}
              <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
                <div className="w-20 h-20 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
                </div>
                <h4 className="text-lg font-bold text-green-islamic">
                  Alhaji Suleiman Nuhu
                </h4>
                <p className="text-gold text-sm mb-2">
                  AN Family Representative
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Our Impact --> */}
      <div className="py-16 bg-gradient-to-r from-green-islamic to-green-dark text-cream">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our Impact in the Community
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Transforming lives through faith, education, and service
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gold mb-4">500+</div>
              <h3 className="text-xl font-bold mb-2">Students Educated</h3>
              <p>Children receiving Islamic and secular education annually</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gold mb-4">10,000+</div>
              <h3 className="text-xl font-bold mb-2">Prayers Hosted</h3>
              <p>Daily prayers and Jumu'ah congregations each year</p>
            </div>

            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gold mb-4">200+</div>
              <h3 className="text-xl font-bold mb-2">Families Supported</h3>
              <p>Through our charity and zakat distribution programs</p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Call to Action --> */}
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-green-islamic mb-6">
            Become Part of Our Community
          </h2>
          <p className="text-xl text-black-rich mb-8 max-w-2xl mx-auto">
            Join us in our mission to promote Islamic values and serve our
            community
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              theme=""
              title={"Volunteer With Us"}
              handleClick={() => {}}
            />

            <Button
              theme="tertiary"
              title={"Make a Donation"}
              handleClick={() => {}}
            />
          </div>
        </div>
      </div>

      {/* <!-- Footer --> */}
      <Footer />
    </div>
  );
}

export default About;

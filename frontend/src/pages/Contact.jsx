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
} from "react-icons/fa";
import Input from "../components/Input";
import Button from "../components/Button/Button";

function Contact() {
  const { t } = useTranslation("contact");
  return (
    <section className="bg-cream islamic-pattern">
      <NavBar />

      <div className="container mx-auto px-4 py-20 max-w-6xl">
        <h1 className="text-3xl font-bold text-green-islamic mb-12 text-center">
          {t("title")}
        </h1>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Location Card */}
          <ContactCard
            icon={<FaMapMarkerAlt className="text-xl text-green-islamic" />}
            title={"Our Location"}
            text={"AN Islamic Center Babura, Nigeria"}
            ctaTitle={"Get Directions"}
            ctaIcon={<FaArrowRight className="inline ml-1" />}
            ctaAction={() => {}}
          />
          {/* Phone Card */}
          <ContactCard
            icon={<FaPhoneAlt className="text-xl text-green-islamic" />}
            title={"Call Us"}
            text={"+234 XXX XXX XXXX"}
            subtext={"9:00 AM - 5:00 PM"}
            ctaTitle={"Call Now"}
            ctaIcon={<FaPhone className="inline ml-1" />}
            ctaAction={() => {}}
          />
          {/* Email Card */}
          <ContactCard
            icon={<FaEnvelope className="text-xl text-green-islamic" />}
            title={"Email Us"}
            text={"info@anic.org"}
            subtext={"24/7 Support"}
            ctaTitle={"Email Now"}
            ctaIcon={<FaEnvelope className="inline ml-1" />}
            ctaAction={() => {}}
          />
        </div>

        {/* Contact Form (from Design 1) */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-gold">
            <h2 className="text-2xl font-bold text-green-islamic mb-6">
              <i className="fas fa-paper-plane text-gold mr-2"></i>
              <FaPaperPlane className="inline text-gold mr-2" />
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <Input title={"Full Name"} placeholder="Enter Your Full Name" />
              <Input
                title={"Email Address"}
                placeholder="Enter Your Email Address"
              />

              <Input
                title={"Subject"}
                placeholder="Enter Your Email Address"
                type="dropdown"
                dropdownOptions={[
                  "General Inquiry",
                  "Prayer Times",
                  "Islamic Classes",
                  "Donation Question",
                  "Other",
                ]}
              />

              <Input
                title={"Your Message"}
                placeholder="Write your message"
                type="textarea"
              />
              <Button
                title={"Submit Message"}
                handleClick={() => {}}
                otherClasses={"w-full"}
              />
            </form>
          </div>

          {/* Right: Additional Info */}
          <div className="bg-gradient-to-br from-green-islamic/5 to-green-dark/5 p-8 rounded-xl border border-gold-light">
            <h3 className="text-xl font-bold text-green-islamic mb-4">
              Visiting Hours
            </h3>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between border-b border-gold-light pb-2">
                <span>Monday - Thursday</span>
                <span className="font-medium">8:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-light pb-2">
                <span>Friday</span>
                <span className="font-medium">8:00 AM - 12:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-gold-light pb-2">
                <span>Saturday - Sunday</span>
                <span className="font-medium">9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-green-islamic mb-6 flex items-center">
            <i className="fas fa-map-marked-alt text-gold mr-3"></i>
            Our Location on Map
          </h2>

          {/* Map Placeholder */}
          <div className="bg-gray-200 h-96 rounded-lg flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-islamic/20 to-green-dark/20 z-10"></div>
            <i className="fas fa-map-marker-alt text-5xl text-gold z-20 animate-bounce"></i>
            <div className="z-20 mt-4 text-center px-4">
              <h3 className="text-xl font-bold text-green-islamic">
                AN Islamic Center
              </h3>
              <p className="text-black-rich">Babura, Nigeria</p>
              <Button title={"Open in Google Maps"} />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <i className="fas fa-bus text-2xl text-gold mr-4"></i>
              <div>
                <h4 className="font-bold text-green-islamic">
                  Public Transport
                </h4>
                <p className="text-sm">Bus routes 12, 45 stop nearby</p>
              </div>
            </div>
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <i className="fas fa-car text-2xl text-gold mr-4"></i>
              <div>
                <h4 className="font-bold text-green-islamic">Parking</h4>
                <p className="text-sm">Free parking available onsite</p>
              </div>
            </div>
            <div className="bg-cream p-4 rounded-lg flex items-center">
              <i className="fas fa-wheelchair text-2xl text-gold mr-4"></i>
              <div>
                <h4 className="font-bold text-green-islamic">Accessibility</h4>
                <p className="text-sm">Wheelchair accessible facility</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

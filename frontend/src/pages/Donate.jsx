import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import { useTranslation } from "react-i18next";
import SecondaryHero from "../containers/SecondaryHero";
import DonationOption from "../components/DonationOption";
import {
  FaCcPaypal,
  FaCcStripe,
  FaCcVisa,
  FaCreditCard,
  FaDonate,
  FaGem,
  FaGraduationCap,
  FaMobileAlt,
  FaMosque,
  FaPaypal,
  FaStripe,
  FaUniversity,
  FaUtensils,
} from "react-icons/fa";

import Input from "../components/Input";
import IconTextCard from "../components/IconTextCard";
import DonationImpactCard from "../components/DonationImpactCard";
import Footer from "../containers/Footer/Footer";

function Donate() {
  const { t } = useTranslation("donate");

  const bankOptions = [
    {
      title: "Local Account (NGN)",
      subtitle: [
        "Bank: First Bank Nigeria",
        "Account: 1234567890",
        "Name: AN Islamic Center",
      ],
    },
    {
      title: "International Account (USD)",
      subtitle: [
        "Bank: Standard Chartered",
        "IBAN: GB33BUKB20201555555555",
        "SWIFT: BUKBGB22",
      ],
    },
    {
      title: "For Zakat Payments",
      subtitle: ["Special account: 0987654321", "Reference: ZAKAT2023"],
    },
  ];

  const onlineOptions = [
    {
      icon: <FaPaypal className="text-3xl text-link mx-3" />,
      title: "PayPal",
      subtitle: "For international donors",
    },
    {
      icon: <FaMobileAlt className="text-3xl text-green-success mx-3" />,
      title: "Mobile Money",
      subtitle: "+234 123 456 7890",
    },
    {
      icon: <FaStripe className="text-3xl text-purple-600 mx-3" />,
      title: "Credit/Debit Card",
      subtitle: "Secure online payment",
    },
  ];

  const specialOptions = [
    {
      title: "Waqf Properties",
      subtitle: "Land, buildings, or assets for perpetual charity",
    },
    {
      title: "Educational Grants",
      subtitle: "Scholarships or institutional partnerships",
    },
    {
      title: "Corporate Sponsorships",
      subtitle: "For businesses and organizations",
    },
    {
      title: "Diploma Certifications",
      subtitle: "Academic partnerships with institutions",
    },
  ];

  return (
    <div className="islamic-pattern">
      {/*  Navbar  */}
      <NavBar />

      {/* Hero */}
      <SecondaryHero
        title={"Your Sadaqah Builds Our Future"} //   {t("hero.title")}
        subtitle={
          <p className="text-xl text-black-rich">
            Those who spend (in the cause of Allah) privately or publicly, by
            night and day, have their reward with their Lord. And (on the Day of
            Resurrection) they shall neither fear nor grieve.{" "}
            <span className="text-gold">(Al-Baqarah 2:274).</span>
          </p>
        } // {t("hero.subtitle")}
        otherContent={
          <div className="flex justify-center items-center flex-col">
            <p className="text-xl text-black-rich mb-8 text-center">
              "The believer's shade on the Day of Resurrection will be his
              charity." <span className="text-gold">(Al-Tirmidhi)</span>
            </p>
            <Button title={"Donate Now"} />
          </div>
        }
      />

      {/*  Donation Options  */}
      <div className="px-4 py-16 bg-gradient-to-b from-cream to-gold-light/30">
        <h2 className="text-3xl font-bold text-green-islamic mb-12 text-center">
          {/* <span className="font-arabic block text-4xl mb-4">طرق التبرع</span> */}
          Ways to Give
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/*  Online Donations  */}
          <DonationOption
            icon={<FaCreditCard className="text-2xl text-green-islamic" />}
            title={"Online Donations"}
            options={onlineOptions}
          />

          {/*  Bank Transfers  */}
          <DonationOption
            icon={<FaUniversity className="text-2xl text-green-islamic" />}
            title={"Bank Transfers"}
            options={bankOptions}
          />
          {/*  Special Donations  */}
          <DonationOption
            icon={<FaGem className="text-2xl text-green-islamic" />}
            title={"Special Contributions"}
            options={specialOptions}
          />
        </div>
      </div>

      {/* Donation Form  */}
      <div className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-gold">
          <h2 className="text-2xl font-bold text-green-islamic mb-6 flex items-center">
            <FaDonate className="inline text-gold mx-2" />
            Make a Donation
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            Personal Information
            <div className="md:col-span-2 grid md:grid-cols-2 gap-6">
              <Input
                title={"Full Name*"}
                placeholder={"Enter your full Name"}
                required
              />
              <Input
                title={"Email*"}
                placeholder={"Enter your Email"}
                type="email"
                required
              />
            </div>
            {/* Donation Details  */}
            <div>
              <Input
                title={"Donation Type*"}
                type="dropdown"
                dropdownOptions={[
                  "General Sadaqah",
                  "Zakat",
                  "Waqf",
                  "Ramadan Fund",
                  "Mosque Construction",
                  "Educational Grant",
                  "Diploma Program",
                ]}
                required
              />
            </div>
            <div>
              <Input
                title={"Amount (NGN)*"}
                placeholder={"Enter Amount you want to donate (in Naira)"}
                type="number"
                required
              />
            </div>
            {/* Payment Method  */}
            <div className="md:col-span-2">
              <label className="block text-black-rich mb-2">Payment Method*</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <IconTextCard
                  icon={<FaCcVisa className="text-blue-600 mx-2 text-2xl" />}
                  title={"Card"}
                  handleClick={() => {}}
                />
                <IconTextCard
                  icon={
                    <FaMobileAlt className="text-green-600 mx-2 text-2xl" />
                  }
                  title={"Mobile"}
                  handleClick={() => {}}
                />
                <IconTextCard
                  icon={
                    <FaUniversity className="text-purple-600 mx-2 text-2xl" />
                  }
                  title={"Bank"}
                  handleClick={() => {}}
                />
                <IconTextCard
                  icon={<FaPaypal className="text-link mx-2 text-2xl" />}
                  title={"PayPal"}
                  handleClick={() => {}}
                />
              </div>
            </div>
            {/* Additional Information  */}
            <div className="md:col-span-2">
              <Input
                title={"Special Instructions"}
                type="textarea"
                placeholder={
                  "For Waqf, educational grants, or diploma programs, please specify details here..."
                }
              />
            </div>
            <div className="md:col-span-2">
              <Button title={"Complete Donation"} handleClick={() => {}} />
            </div>
          </form>
        </div>
      </div>

      {/* Impact Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-islamic mb-12 text-center">
            <span className="font-arabic block text-4xl mb-4">أثر تبرعاتكم</span>
            Your Donations in Action
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <DonationImpactCard
              icon={<FaMosque className="text-5xl text-gold" />}
              title={"Mosque Renovation"}
              subtitle={
                "Thanks to your donations, we've completed the women's prayer area expansion."
              }
              ctaText={"See photos →"}
              ctaAction={() => {}}
            />
            <DonationImpactCard
              icon={<FaGraduationCap className="text-5xl text-gold" />}
              title={"Diploma Programs"}
              subtitle={
                "Our partnership with Al-Azhar University has graduated 15 scholars this year."
              }
              ctaText={"Learn more →"}
              ctaAction={() => {}}
            />
            <DonationImpactCard
              icon={<FaUtensils className="text-5xl text-gold" />}
              title={"Ramadan Meals"}
              subtitle={
                "Your Zakat provided 2,400 iftar meals during Ramadan 1444."
              }
              ctaText={"Read stories →"}
              ctaAction={() => {}}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Donate;

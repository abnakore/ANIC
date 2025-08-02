import { useTranslation } from "react-i18next";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { changeLanguage, LANGUAGES } from "../../utils/i18n";

function Footer() {
  const { t, i18n } = useTranslation("common");

  const navLinks = [
    { page: t("navBar.home"), path: "/" },
    { page: t("navBar.about"), path: "/about" },
    // { page: t("navBar.calender"), path: "/calender" },
    { page: t("navBar.contact"), path: "/contact" },
    { page: t("navBar.donate"), path: "/donate" },
  ];

  return (
    <footer className="bg-green-dark text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t("title")}</h3>
            <p className="mb-4">{t("footer.subtitle")}</p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gold hover:text-gold-light text-xl">
                <FaFacebook />
              </Link>
              <Link to="#" className="text-gold hover:text-gold-light text-xl">
                <FaTwitter />
              </Link>
              <Link to="#" className="text-gold hover:text-gold-light text-xl">
                <FaInstagram />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.page}>
                  <Link
                    to={link.path}
                    className="hover:text-gold transition-colors"
                  >
                    {link.page}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.contactUs")}</h3>
            <p className="mb-2">
              <FaMapMarkerAlt className="inline mr-2 text-gold" />{" "}
              {t("address")}
            </p>
            <p className="mb-2">
              <FaPhone className="inline mr-2 text-gold" /> {t("phoneNo")}
            </p>
            <p className="mb-2">
              <FaEnvelope className="inline mr-2 text-gold" /> info@anic.org
            </p>
          </div>

          {/* Language changer */}
          <div className="">
            <h3 className="text-xl font-bold mb-4">{t("language")}</h3>
            <div className="">
              {LANGUAGES.map((language) => (
                <button
                  key={language.key}
                  className={`flex items-center space-x-2 p-2 my-2 rounded-2xl ${
                    i18n.language === language.key
                      ? " bg-gold text-green-islamic"
                      : "hover:text-gold-light hover:bg-cream/5"
                  }`}
                  onClick={() => changeLanguage(language.key)}
                >
                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs ${
                      i18n.language === language.key
                        ? "bg-cream text-gold"
                        : "bg-gold-light text-green-islamic"
                    }`}
                  >
                    {language.key}
                  </span>
                  <span>{language.value}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-cream mt-8 pt-6 text-center ">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

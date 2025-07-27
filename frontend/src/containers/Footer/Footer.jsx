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

function Footer() {
  const { t, i18n } = useTranslation("common");

  const navLinks = [
    { page: t("navBar.home"), path: "/" },
    { page: t("navBar.about"), path: "/about" },
    { page: t("navBar.calender"), path: "/calender" },
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

          {/* <div>
            <h3 className="text-xl font-bold mb-4">{t("footer.newsletter")}</h3>
            <p className="mb-4">{t("footer.newsletterSubtitle")}</p>
            <div className="flex">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="px-4 py-2 rounded-l-lg w-full text-black-rich bg-cream"
              />
              <button className="bg-gold text-green-islamic font-bold px-4 py-2 rounded-r-lg">
                <FaPaperPlane />
              </button>
            </div>
          </div> */}
        </div>
        {/* !!! Add language changer */}

        <div className="border-t border-cream mt-8 pt-6 text-center ">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

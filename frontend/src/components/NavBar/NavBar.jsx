import { FaBars, FaChevronDown, FaGlobe, FaMosque } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./nav-bar.css";
import { changeLanguage, LANGUAGES } from "../../utils/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function NavBar() {
  const { t, i18n } = useTranslation("common");

  const navLinks = [
    { page: t("navBar.home"), path: "/" },
    { page: t("navBar.about"), path: "/about" },
    // { page: t("navBar.calender"), path: "/calender" },
    { page: t("navBar.contact"), path: "/contact" },
    { page: t("navBar.donate"), path: "/donate" },
    // { page: t("navBar."), path: "/" },
  ];

  // Language switcher functionality
  // Change language

  // NavBar Open
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-white/80 backdrop-blur-sm py-4 px-6 shadow-sm sticky top-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center">
          {/* <!-- Title Section --> */}
          <div className="flex items-center">
            <div className="mx-3 text-2xl text-gold">
              <img src="/images/logo_bg.png" alt="" className="w-10" />
              {/* <FaMosque /> */}
            </div>
            <span className="text-xl font-bold text-green-islamic">
              {t("title")}
            </span>
          </div>

          {/* <!-- NavLinks and Animation --> */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.path}
                className="arabic-border text-black-rich hover:text-green-islamic font-medium"
              >
                {link.page}
              </Link>
            ))}

            {/* <!-- Language Option --> */}
            <div className="language-switcher">
              <button className="flex items-center space-x-1">
                <FaGlobe />
                <span>
                  {LANGUAGES.find((lang) => lang.key === i18n.language)?.value}
                </span>
                <FaChevronDown className="ml-1" />
              </button>
              <div
                className={`language-dropdown bg-white text-black-rich rounded-md shadow-lg py-2 ltr:right-0 rtl:left-0`}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.key}
                    className={`block w-full text-left px-4 py-2  ${
                      lang.key === i18n.language
                        ? "text-black-rich/50"
                        : "hover:bg-cream"
                    }`}
                    disabled={lang.key === i18n.language}
                    onClick={() => changeLanguage(lang.key)}
                  >
                    {lang.value}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            className="md:hidden text-black-rich"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? (
              <MdClose className="text-md" />
            ) : (
              <FaBars className="text-md" />
            )}
          </button>

          {/* Mobile nav */}
          <div
            className={`mobile-nav md:hidden absolute left-0 top-20 w-full bg-white/80 backdrop-blur-sm p-6 shadow-sm flex flex-col space-y-2 ${
              !navOpen && "hidden"
            }`}
          >
            {navLinks.map((link) => (
              <Link
                key={link.page}
                to={link.path}
                className="arabic-border text-black-rich hover:text-green-islamic font-medium p-3"
              >
                {link.page}
              </Link>
            ))}

            {/* <!-- Language Option --> */}
            <div className="language-switcher border-t m-1 py-4">
              <button className="flex items-center space-x-1">
                <FaGlobe />
                <span>
                  {/* {LANGUAGES.find((lang) => lang.key === i18n.language)?.value} */}
                  {t("language")}
                </span>
                <FaChevronDown className="ml-1" />
              </button>
              <div className="mobile-language-dropdown text-black-rich rounded-md p-2">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.key}
                    className={`block text-left px-4 py-2  ${
                      lang.key === i18n.language
                        ? "text-black-rich/50"
                        : "hover:bg-cream"
                    }`}
                    disabled={lang.key === i18n.language}
                    onClick={() => changeLanguage(lang.key)}
                  >
                    {lang.value}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

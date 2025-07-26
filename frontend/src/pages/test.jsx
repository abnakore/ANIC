import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

const HomePage = () => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hero slides data
  const slides = [
    {
      title: t("home:hero.title"),
      subtitle: t("home:hero.subtitle1"),
      image: "/images/mosque.jpg",
    },
    {
      title: t("home:hero.title"),
      subtitle: t("home:hero.subtitle2"),
      image: "/images/quran-class.jpg",
    },
    {
      title: t("home:hero.title"),
      subtitle: t("home:hero.subtitle3"),
      image: "/images/charity.jpg",
    },
  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Change language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream text-rich-black font-sans">
      {/* Navigation Bar */}
      <nav className="bg-green-islamic text-cream shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-light-gold w-10 h-10 rounded-full flex items-center justify-center">
              <span className="text-green-islamic font-bold text-lg">ANIC</span>
            </div>
            <span className="text-xl font-bold">{t("common:title")}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-gold transition-colors">
              {t("nav:home")}
            </a>
            <a href="#about" className="hover:text-gold transition-colors">
              {t("nav:about")}
            </a>
            <a href="#services" className="hover:text-gold transition-colors">
              {t("nav:services")}
            </a>
            <a href="#contact" className="hover:text-gold transition-colors">
              {t("nav:contact")}
            </a>

            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gold">
                <span>{i18n.language === "en" ? "English" : "العربية"}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white text-rich-black rounded-md shadow-lg hidden group-hover:block">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`block w-full text-left px-4 py-2 ${
                    i18n.language === "en" ? "bg-light-gold" : "hover:bg-cream"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className={`block w-full text-left px-4 py-2 ${
                    i18n.language === "ar" ? "bg-light-gold" : "hover:bg-cream"
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cream focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-olive overflow-hidden"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                <a
                  href="#home"
                  className="hover:text-gold transition-colors py-1"
                >
                  {t("nav:home")}
                </a>
                <a
                  href="#about"
                  className="hover:text-gold transition-colors py-1"
                >
                  {t("nav:about")}
                </a>
                <a
                  href="#services"
                  className="hover:text-gold transition-colors py-1"
                >
                  {t("nav:services")}
                </a>
                <a
                  href="#contact"
                  className="hover:text-gold transition-colors py-1"
                >
                  {t("nav:contact")}
                </a>
                <div className="flex space-x-4 py-2">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`px-3 py-1 rounded ${
                      i18n.language === "en"
                        ? "bg-gold text-green-islamic"
                        : "bg-light-gold"
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => changeLanguage("ar")}
                    className={`px-3 py-1 rounded ${
                      i18n.language === "ar"
                        ? "bg-gold text-green-islamic"
                        : "bg-light-gold"
                    }`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen max-h-[800px] overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center">
              <div className="container mx-auto px-4 text-center text-cream">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl md:text-6xl font-bold mb-4"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <button className="bg-gold hover:bg-light-gold text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
                    {t("common:learn_more")}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-gold w-6"
                  : "bg-cream bg-opacity-50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Prayer Times Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-green-islamic mb-12"
          >
            {t("prayer_times.title")}
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {Object.entries(
              t("prayer_times.times", { returnObjects: true })
            ).map(([prayer, time], index) => (
              <motion.div
                key={prayer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-cream p-4 rounded-lg shadow-sm text-center border border-light-gold"
              >
                <h3 className="font-bold text-green-dark mb-2">
                  {t(`prayer_times:${prayer}`)}
                </h3>
                <p className="text-xl text-green-islamic">{time}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center text-green-islamic mb-12"
          >
            {t("services.title")}
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t("services.items", { returnObjects: true })).map(
              ([key, service], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-green-islamic text-cream w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-center text-green-islamic mb-2">
                    {service.title}
                  </h3>
                  <p className="text-center text-rich-black">
                    {service.description}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-islamic text-cream">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            {t("cta.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            {t("cta.subtitle")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-gold hover:bg-light-gold text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 mr-4">
              {t("cta.donate")}
            </button>
            <button className="border-2 border-cream hover:bg-cream hover:text-green-islamic font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
              {t("cta.volunteer")}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-olive text-green-islamic py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">
                {t("footer.about_title")}
              </h3>
              <p className="mb-4">{t("footer.about_text")}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">
                {t("footer.quick_links")}
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="hover:text-gold transition-colors">
                    {t("nav:home")}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-gold transition-colors"
                  >
                    {t("nav:about")}
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-gold transition-colors"
                  >
                    {t("nav:services")}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-gold transition-colors"
                  >
                    {t("nav:contact")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.contact")}</h3>
              <p className="mb-2">{t("footer.address")}</p>
              <p className="mb-2">Email: info@anic-babura.org</p>
              <p>Phone: +234 123 456 7890</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">{t("footer.language")}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 rounded ${
                    i18n.language === "en"
                      ? "bg-gold text-green-islamic"
                      : "bg-light-gold"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => changeLanguage("ar")}
                  className={`px-3 py-1 rounded ${
                    i18n.language === "ar"
                      ? "bg-gold text-green-islamic"
                      : "bg-light-gold"
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-green-islamic mt-8 pt-6 text-center">
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

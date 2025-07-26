import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";

function CTA({ theme }) {
  const { t } = useTranslation("home");
  const navigate = useNavigate();

  return (
    <>
      {/* <!-- Call to Action --> */}
      <div
        className={`py-16 bg-gradient-to-r ${
          theme === "primary" && "from-green-islamic to-green-dark text-cream"
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className={`text-3xl font-bold mb-6 ${
              theme !== "primary" && "text-green-islamic"
            }`}
          >
            {t("cta.title")}
          </h2>
          <p
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              theme !== "primary" && "text-black-rich"
            }`}
          >
            {t("cta.subtitle")}
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              title={t("common:volunteer")}
              handleClick={() => navigate("/donate")}
            />
            <Button
              theme={theme === "primary" ? "secondary" : "tertiary"}
              title={t("common:contactUs")}
              handleClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CTA;

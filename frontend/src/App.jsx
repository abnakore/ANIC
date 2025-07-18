import { useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("home");
  return (
    <>
      <h1 class="text-3xl font-bold underline"> {t("hero.title")} </h1>

      <button className="bg-green-islamic text-cream hover:bg-green-dark bg-primary">
        Donate Now
      </button>

      <div className="border-2 border-gold-light p-4">...</div>
    </>
  );
}

export default App;

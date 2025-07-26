import React from "react";
import PrayerCard from "../../components/PrayerCard";
import { FaStarAndCrescent } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function PrayerTimes() {
  const { t, i18n } = useTranslation("home");

  // Get the prayers and times
  const prayers = Object.entries(
    t("prayer_times.items", { returnObjects: true })
  ) // Remove Jumu'ah prayer from the list
    .filter(([key, _]) => key !== "jumu'ah")
    .map(([_, prayer]) => ({
      ...prayer,
    }));

  return (
    <div className="py-16 bg-gradient-to-r from-green-islamic/5 to-green-dark/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-islamic mb-12">
          {t("prayer_times.title")}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {prayers.map((prayer) => (
              <PrayerCard
                key={prayer.title}
                title={prayer.title}
                time={prayer.time}
              />
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-green-islamic font-bold">
              <FaStarAndCrescent className="mr-2 inline" />
              {t("prayer_times.items.jumu'ah.title")}:{" "}
              {t("prayer_times.items.jumu'ah.time")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrayerTimes;

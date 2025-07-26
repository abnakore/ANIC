import React from "react";
import "./history.css";
import TimelineItem from "../../components/TimelineItem";
import { useTranslation } from "react-i18next";

function History() {
  const { t, i18n } = useTranslation("about");

  const historyTimelines = t("history.timelines", { returnObjects: true });

  return (
    <div
      id="history"
      className="py-16 bg-gradient-to-br from-cream/70 to-green-dark/90"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-islamic mb-16">
          {t("history.title")}
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* <!-- Timeline Line --> */}
          <div className="timeline-line absolute left-1/2 h-full bg-gold-light w-1 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {historyTimelines.map((timeline, key) => (
              <TimelineItem
                key={key}
                title={timeline.title}
                text={timeline.text}
                side={key % 2 === 0 ? "right" : "left"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

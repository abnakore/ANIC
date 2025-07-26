import React from "react";
import "./history.css";
import TimelineItem from "../../components/TimelineItem";

function History() {
  return (
    <div
      id="history"
      className="py-16 bg-gradient-to-br from-cream/70 to-green-dark/90"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-islamic mb-16">
          Our Journey
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* <!-- Timeline Line --> */}
          <div className="timeline-line absolute left-1/2 h-full bg-gold-light w-1 hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {/* <!-- Timeline Item 1 --> */}
            <TimelineItem
              title={"1995: Foundation"}
              text={`The AN Islamic Center was established as a small community
                    gathering place by the late Alhaji Nuhu and his family.`}
              side={"right"}
            />
            {/* <!-- Timeline Item 2 --> */}
            <TimelineItem
              title={"2002: Mosque Construction"}
              text={`With community support, we completed construction of our
                    main mosque building, accommodating 500 worshippers.`}
              side={"left"}
            />

            {/* <!-- Timeline Item 3 --> */}
            <TimelineItem
              title={"2008: Islamic School"}
              text={`We established our Islamic school, providing Quranic
                    education and modern academics to over 200 students.`}
              side={"right"}
            />

            {/* <!-- Timeline Item 4 --> */}
            <TimelineItem
              title={"2015: Waqf Establishment"}
              text={`The center was formally dedicated as a perpetual Waqf,
                    ensuring its continuity for future generations.`}
              side={"left"}
            />

            {/* <!-- Timeline Item 5 --> */}
            <TimelineItem
              title={"2023: Expansion"}
              text={`We completed our community center expansion, adding new
                    facilities for youth programs and community events.`}
              side={"right"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;

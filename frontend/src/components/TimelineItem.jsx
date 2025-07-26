import React from "react";

function TimelineItem({ side, title, text }) {
  return (
    <>
      <div className="relative md:flex items-center mb-12">
        {side === "right" && <div className="hidden md:block md:w-1/2"></div>}

        <div
          className={`md:w-1/2 ${
            side === "right" ? "md:pl-12" : "md:pr-12 md:text-right"
          }`}
        >
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-green-islamic mb-2">
              {title}
            </h3>
            <p className="text-black-rich">{text}</p>
          </div>
        </div>

        {side === "left" && <div className="hidden md:block md:w-1/2"></div>}

        <div className="timeline-dot bg-gold hidden md:block"></div>
      </div>

      {/* <div className="relative md:flex items-center mb-12">
        <div className="md:w-1/2 md:pr-12 md:text-right">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-green-islamic mb-2">
              1995: Foundation
            </h3>
            <p className="text-black-rich">
              The AN Islamic Center was established as a small community
              gathering place by the late Alhaji Nuhu and his family.
            </p>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2"></div>
        <div className="timeline-dot bg-gold hidden md:block"></div>
      </div>

      <div className="relative md:flex items-center mb-12">
        <div className="hidden md:block md:w-1/2"></div>
        <div className="md:w-1/2 md:pl-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-green-islamic mb-2">
              2002: Mosque Construction
            </h3>
            <p className="text-black-rich">
              With community support, we completed construction of our main
              mosque building, accommodating 500 worshippers.
            </p>
          </div>
        </div>
        <div className="timeline-dot bg-gold hidden md:block"></div>
      </div> */}
    </>
  );
}

export default TimelineItem;

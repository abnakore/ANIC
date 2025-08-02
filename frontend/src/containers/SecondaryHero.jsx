import React from "react";

function SecondaryHero({ title, subtitle, otherContent }) {
  return (
    <div className="relative py-20 px-4 bg-gradient-to-r from-green-islamic/10 to-green-dark/10">
      {/* <!-- Background Circles --> */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-green-islamic/10 rounded-full pulse-circle"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-gold/10 rounded-full pulse-circle"></div>

      <div className="container mx-auto relative z-10 max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-green-islamic mb-6">
          {title}
        </h1>
        <div className="text-xl text-black-rich mb-8">{subtitle}</div>
      </div>
      {otherContent}
    </div>
  );
}

export default SecondaryHero;

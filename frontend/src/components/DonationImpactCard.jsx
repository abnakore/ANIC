import React from "react";

function DonationImpactCard({ icon, title, subtitle, ctaAction, ctaText }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <div className="h-48 bg-green-islamic/10 rounded-lg mb-4 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-green-islamic mb-2">{title}</h3>
      <p className="text-black-rich mb-4">{subtitle}</p>
      <span
        onClick={ctaAction}
        className="cursor-pointer text-gold hover:text-gold-light font-medium"
      >
        {ctaText}
      </span>
    </div>
  );
}

export default DonationImpactCard;

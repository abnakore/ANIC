import React from "react";

function DonationOption({ icon, title, options }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md donation-card transition-all duration-300">
      <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-green-islamic mb-4 text-center">
        {title}
      </h3>
      <div className="space-y-4">
        {options?.map((option, i) => (
          <div key={i} className="flex items-center p-3 bg-cream rounded-lg">
            {option.icon}
            <div className="">
              <h4 className="font-bold">{option.title}</h4>
              {typeof option.subtitle === "string" ? (
                <p className="text-sm">{option.subtitle}</p>
              ) : (
                option.subtitle.map((item, i) => (
                  <p key={i} className="text-sm">
                    {item}
                  </p>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DonationOption;

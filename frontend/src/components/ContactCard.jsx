import React from "react";

function ContactCard({
  icon,
  title,
  text,
  subtext,
  ctaTitle,
  ctaIcon,
  ctaAction,
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-green-islamic mb-2">{title}</h3>
      <p className="text-black-rich text-wrap">{text}</p>
      <p className="text-sm text-gold mt-2">{subtext}</p>
      <div className="mt-4 flex justify-center items-center">
        <button
          className="text-gold hover:text-green-dark font-medium flex items-center gap-2 justify-evenly"
          onClick={ctaAction}
        >
          {ctaTitle} {ctaIcon}
        </button>
      </div>
    </div>
  );
}

export default ContactCard;

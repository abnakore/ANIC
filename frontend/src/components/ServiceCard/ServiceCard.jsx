import React from "react";
import "./service-card.css";

function ServiceCard({ icon, title, text }) {
  return (
    <div className="service-card bg-white/80 backdrop-blur-xs p-6 rounded-2xl shadow-md border-t-4 border-gold">
      <div className="service-icon w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-green-islamic">
        <i className="fas fa-book-quran"></i>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-green-islamic mb-2 text-center">
        {title}
      </h3>
      <p className="text-black-rich text-center">{text}</p>
    </div>
  );
}

export default ServiceCard;

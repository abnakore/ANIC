import React from "react";

function MissionCard({ icon, title, text }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-md">
      <div className="w-16 h-16 bg-gold-light rounded-full flex items-center justify-center mb-6 text-2xl text-green-islamic mx-auto">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-green-islamic mb-4 text-center">
        {title}
      </h2>
      <p className="text-black-rich text-center">{text}</p>
    </div>
  );
}

export default MissionCard;

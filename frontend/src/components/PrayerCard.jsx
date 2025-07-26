import React from "react";

function PrayerCard({ title, time }) {
  return (
    <div className="bg-white p-6 rounded-xl text-center border border-gold-light shadow-sm">
      <h3 className="font-bold text-green-islamic mb-2">{title}</h3>
      <p className="text-2xl font-bold text-gold">{time}</p>
    </div>
  );
}

export default PrayerCard;

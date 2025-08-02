import React from "react";

function IconTextCard({ icon, title, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
      className="flex justify-center items-center space-x-2 bg-green-dark/2 border border-gray-300 py-3 rounded-lg hover:border-gold transition-colors"
    >
      {icon} {title}
    </button>
  );
}

export default IconTextCard;

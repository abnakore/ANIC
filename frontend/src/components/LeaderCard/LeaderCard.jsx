import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

function LeaderCard({ name, role, address, email, image, trustee = false }) {
  return (
    <div className="leader-card transition-all duration-300 bg-white p-6 rounded-xl shadow-md text-center">
      <div className="w-24 h-24 bg-gold-light rounded-full mx-auto mb-4 overflow-hidden border-4 border-gold">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full"></div>
      </div>
      <h4 className="text-xl font-bold text-green-islamic">{name}</h4>
      <p className="text-gold mb-2">{role}</p>
      {trustee && (
        <div className="space-y-3 text-left bg-cream rounded-xl p-4 mb-4">
          {address && (
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-gold mt-1 mx-3" />
              <p className="text-black-rich">{address}</p>
            </div>
          )}
          {email && (
            <div className="flex items-start">
              <FaEnvelope className="text-gold mt-1 mx-3" />
              <a
                href={`mailto:${email}`}
                className="text-green-islamic hover:underline"
              >
                {email}
              </a>
            </div>
          )}
        </div>
      )}

      {/* <!-- <p className="text-black-rich text-sm">Grandson of the founder, community leader for 25+ years</p> --> */}
    </div>
  );
}

export default LeaderCard;

import { useState } from "react";

function ProfileCard({ photo, name, position, details, buttons }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer w-72
                 transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
    >
      {/* Heart Icon */}
      <span
        className={`absolute top-3 right-3 text-2xl transition-transform duration-200 ${
          liked ? "text-red-500 scale-125" : "text-gray-300 scale-100"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
      >
        ❤️
      </span>

      {/* Profile Photo */}
      <div className="flex justify-center mt-5">
        <img
          src={photo}
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
        />
      </div>

      {/* Name & Position */}
      <div className="text-center p-5">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 mb-4">{position}</p>

        {/* Details */}
        <div className="text-sm text-gray-600 mb-4 space-y-2">
          {details.map((detail, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <span>{detail.icon}</span>
              <span>{detail.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          {buttons.map((btn, idx) => (
            <button
              key={idx}
              className={`px-4 py-2 rounded-xl text-white font-medium ${btn.bgColor} transition-transform duration-200 hover:scale-105 hover:opacity-90`}
              onClick={(e) => {
                e.stopPropagation();
                btn.onClick();
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;

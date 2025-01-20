import React from "react";

const SongTitle = ({ title = "Tidal Drift", artist = "Echoes of the Sea" }) => {
  return (
    <div className="flex flex-col items-start gap-1">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <p className="text-base text-gray-600">{artist}</p>
    </div>
  );
};

export default SongTitle;

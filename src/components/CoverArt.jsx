import React from "react";
import placeholder from "../assets/placeholder.svg";

const CoverArt = ({ imageUrl }) => {
  return (
    <div className="h-48 w-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      <img
        src={imageUrl || placeholder}
        alt="Album Cover"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default CoverArt;

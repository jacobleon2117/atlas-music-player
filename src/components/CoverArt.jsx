import React from "react";
import placeholder from "../assets/placeholder.svg";

const CoverArt = ({ imageUrl }) => {
  return (
    <div className="h-80 w-80 overflow-hidden rounded-lg bg-gray-100">
      <img
        src={imageUrl || placeholder}
        alt="Album Cover"
        className="h-full w-full object-cover"
      />
    </div>
  );
};

export default CoverArt;

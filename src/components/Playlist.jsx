import React from "react";
import songData from "./songs.json";

const Playlist = () => {
  return (
    <div className="space-y-1">
      {songData.map((song, index) => (
        <div
          key={index}
          className={`flex h-[44px] w-[402px] items-center overflow-hidden rounded-md ${
            song.highlighted ? "bg-blue-50" : "bg-transparent hover:bg-gray-50"
          }`}
        >
          <div className="flex h-full flex-grow flex-col justify-between py-[1px] pl-3">
            <div className="flex h-[22px] items-center">
              <span
                className={`truncate text-sm font-medium ${song.highlighted ? "text-blue-700" : "text-gray-900"}`}
              >
                {song.title || "Title"}
              </span>
            </div>
            <div className="flex h-[22px] items-center">
              <span
                className={`truncate text-sm ${song.highlighted ? "text-blue-600" : "text-gray-600"}`}
              >
                {song.artist || "Artist"}
              </span>
            </div>
          </div>
          <div className="flex h-full items-center pr-3">
            <span
              className={`text-xs ${song.highlighted ? "text-blue-500" : "text-gray-500"}`}
            >
              {song.duration || "0:00"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;

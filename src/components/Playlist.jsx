import React from "react";
import songData from "/songs.json";

const Playlist = () => {
  return (
    <div className="w-[402px]">
      <h1 className="mb-2 text-lg font-bold text-black">Playlist</h1>
      {songData.map((song, index) => (
        <div
          key={index}
          className={`flex h-[44px] items-center ${
            song.highlighted ? "rounded-md bg-[#F1F5F9]" : "bg-white"
          }`}
        >
          <div className="flex-grow">
            <div className="text-base font-medium text-black">{song.title}</div>
            <div className="text-playlist-text-color text-sm font-medium">
              {song.artist}
            </div>
          </div>
          <span className="text-playlist-text-color text-sm font-medium">
            {song.duration}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Playlist;

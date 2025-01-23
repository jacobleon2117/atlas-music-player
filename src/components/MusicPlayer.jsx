import React, { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

export default function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSong, setSelectedSong] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex max-w-5xl flex-col items-center gap-8 rounded-lg bg-white px-8 dark:bg-primary-dark md:flex-row">
      <CurrentlyPlaying selectedSong={selectedSong} />
      <div className="hidden h-[566px] w-[1px] bg-primary-sage/20 dark:bg-primary-light/20 md:block" />
      <Playlist selectedSong={selectedSong} onSongSelect={setSelectedSong} />
    </div>
  );
}

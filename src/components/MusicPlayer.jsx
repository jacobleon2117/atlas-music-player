import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

export default function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(true);

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
    <div className="flex flex-col items-center justify-center gap-8 px-8 md:flex-row md:items-start">
      <CurrentlyPlaying />
      <div className="hidden h-[566px] w-[1px] bg-gray-200 md:block" />
      <Playlist />
    </div>
  );
}

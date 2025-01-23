import { useState } from "react";
import { Rewind, FastForward, Play, Pause, Shuffle } from "lucide-react";

export default function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center gap-16">
      <button
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage"
        aria-label="Playback speed"
      >
        <span className="text-lg font-normal">1x</span>
      </button>
      <button
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage"
        aria-label="Rewind"
      >
        <Rewind className="h-6 w-6" />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="rounded-full border-2 border-primary-dark p-2 text-primary-dark transition-colors hover:bg-primary-sage hover:text-white dark:border-white dark:text-white dark:hover:border-primary-sage dark:hover:bg-primary-sage dark:hover:text-white"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" />
        ) : (
          <Play className="h-6 w-6" />
        )}
      </button>
      <button
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage"
        aria-label="Fast forward"
      >
        <FastForward className="h-6 w-6" />
      </button>
      <button
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage"
        aria-label="Shuffle"
      >
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}

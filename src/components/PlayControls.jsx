import { useState } from "react";
import { Rewind, FastForward, Play, Pause, Shuffle } from "lucide-react";

export default function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center gap-16">
      <button
        className="text-primary-dark hover:text-primary-sage transition-colors"
        aria-label="Playback speed"
      >
        <span className="text-lg font-normal">1x</span>
      </button>
      <button
        className="text-primary-dark hover:text-primary-sage transition-colors"
        aria-label="Rewind"
      >
        <Rewind className="h-6 w-6" fill="currentColor" />
      </button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-primary-light rounded-full border-2 p-2 transition-all"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          <Pause className="h-6 w-6" fill="currentColor" />
        ) : (
          <Play className="h-6 w-6" fill="currentColor" />
        )}
      </button>
      <button
        className="text-primary-dark hover:text-primary-sage transition-colors"
        aria-label="Fast forward"
      >
        <FastForward className="h-6 w-6" fill="currentColor" />
      </button>
      <button
        className="text-primary-dark hover:text-primary-sage transition-colors"
        aria-label="Shuffle"
      >
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}

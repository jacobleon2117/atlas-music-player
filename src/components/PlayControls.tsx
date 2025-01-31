import { useState } from "react";
import { Rewind, FastForward, Play, Pause, Shuffle } from "lucide-react";

interface PlayControlsProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  onShuffle?: (index: number) => void;
  playlistLength?: number;
}

export default function PlayControls({
  isPlaying,
  setIsPlaying,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  playbackSpeed,
  setPlaybackSpeed,
  onShuffle,
  playlistLength = 0
}: PlayControlsProps) {
  const [isShuffleOn, setIsShuffleOn] = useState(false);

  const handleSpeedClick = () => {
    const speeds: [0.5, 1, 2] = [0.5, 1, 2];
    const currentIndex = speeds.indexOf(playbackSpeed as 0.5 | 1 | 2);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  const handleNextClick = () => {
    if (isShuffleOn && onShuffle && playlistLength > 0) {
      const randomIndex = Math.floor(Math.random() * playlistLength);
      onShuffle(randomIndex);
    } else {
      onNext();
    }
  };

  return (
    <div className="flex items-center justify-center gap-16">
      <button
        onClick={handleSpeedClick}
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage"
        aria-label={`Current playback speed: ${playbackSpeed}x`}
      >
        <span className="text-lg font-normal">{playbackSpeed}x</span>
      </button>

      <button
        onClick={onPrevious}
        disabled={isFirst}
        className={`text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage
          ${isFirst ? 'cursor-not-allowed opacity-50' : ''}`}
        aria-label="Previous song"
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
        onClick={handleNextClick}
        disabled={isLast && !isShuffleOn}
        className={`text-primary-dark transition-colors hover:text-primary-sage dark:text-white dark:hover:text-primary-sage
          ${isLast && !isShuffleOn ? 'cursor-not-allowed opacity-50' : ''}`}
        aria-label="Next song"
      >
        <FastForward className="h-6 w-6" />
      </button>

      <button
        onClick={() => setIsShuffleOn(!isShuffleOn)}
        className={`transition-colors
          ${isShuffleOn 
            ? 'text-primary-sage dark:text-primary-sage' 
            : 'text-primary-dark hover:text-primary-sage dark:text-white dark:hover:text-primary-sage'
          }`}
        aria-label={isShuffleOn ? "Shuffle on" : "Shuffle off"}
      >
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}
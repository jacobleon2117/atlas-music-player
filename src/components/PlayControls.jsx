import { Rewind, FastForward, Play, Shuffle } from "lucide-react";

export default function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-16">
      <button className="text-black" aria-label="Playback speed">
        <span className="text-lg font-normal">1x</span>
      </button>
      <button className="text-neutral-400" aria-label="Rewind">
        <Rewind className="h-6 w-6" fill="currentColor" />
      </button>
      <button
        className="rounded-md border-2 border-black p-2 text-black"
        aria-label="Play"
      >
        <Play className="h-6 w-6" fill="currentColor" />
      </button>
      <button className="text-black" aria-label="Fast forward">
        <FastForward className="h-6 w-6" fill="currentColor" />
      </button>
      <button className="text-black" aria-label="Shuffle">
        <Shuffle className="h-6 w-6" />
      </button>
    </div>
  );
}

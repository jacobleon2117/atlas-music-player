import React from "react";
import { Play, SkipBack, SkipForward, Shuffle } from "lucide-react";

const PlayControls = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      <button className="text-gray-600">
        <span className="text-sm">1x</span>
      </button>
      <button className="text-gray-600">
        <SkipBack size={24} />
      </button>
      <button className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-400">
        <Play size={24} className="ml-1" />
      </button>
      <button className="text-gray-600">
        <SkipForward size={24} />
      </button>
      <button className="text-gray-600">
        <Shuffle size={20} />
      </button>
    </div>
  );
};

export default PlayControls;

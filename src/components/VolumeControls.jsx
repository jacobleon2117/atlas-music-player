import { Volume2 } from "lucide-react";

export default function VolumeControl() {
  return (
    <div className="flex items-center gap-4" aria-label="Volume controls">
      <Volume2
        className="h-6 w-6 text-black"
        fill="currentColor"
        aria-label="Volume icon"
      />
      <div
        className="bg-slider-bg relative h-2 w-[374px] rounded-lg"
        aria-label="Volume slider track"
      >
        <div
          className="bg-custom-slate absolute h-full w-1/2 rounded-l-lg"
          aria-label="Volume slider progress"
        />
        <div
          className="bg-custom-slate absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-label="Volume slider handle"
        />
      </div>
    </div>
  );
}

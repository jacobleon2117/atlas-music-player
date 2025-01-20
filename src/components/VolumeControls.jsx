import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VolumeControls() {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleVolumeChange = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setVolume(percentage);
    if (isMuted) setIsMuted(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center gap-4" aria-label="Volume controls">
      <button
        onClick={toggleMute}
        className="text-primary-dark hover:text-primary-sage transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" fill="currentColor" />
        ) : (
          <Volume2 className="h-6 w-6" fill="currentColor" />
        )}
      </button>
      <div
        onClick={handleVolumeChange}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={(e) => isDragging && handleVolumeChange(e)}
        className="bg-slider-bg relative h-2 w-[374px] cursor-pointer rounded-lg"
        aria-label="Volume slider track"
      >
        <div
          className="bg-primary-sage absolute h-full rounded-l-lg transition-all"
          style={{ width: `${isMuted ? 0 : volume}%` }}
          aria-label="Volume slider progress"
        />
        <div
          className="bg-primary-sage absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full shadow-md transition-all hover:scale-110"
          style={{
            left: `${isMuted ? 0 : volume}%`,
            transform: "translate(-50%, -50%)",
          }}
          aria-label="Volume slider handle"
        />
      </div>
    </div>
  );
}

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface VolumeControlsProps {
  volume: number;
  setVolume: (volume: number) => void;
}

export default function VolumeControls({ volume, setVolume }: VolumeControlsProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  const calculateVolume = (clientX: number): number => {
    if (!sliderRef.current || !handleRef.current) return 50;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const handleWidth = handleRef.current.offsetWidth;
    const adjustedLeft = rect.left + handleWidth / 2;
    const adjustedWidth = rect.width - handleWidth;
    const x = clientX - adjustedLeft;
    return Math.min(Math.max((x / adjustedWidth) * 100, 0), 100);
  };

  const handleVolumeChange = (clientX: number) => {
    const newVolume = calculateVolume(clientX);
    setVolume(newVolume);
    if (isMuted) setIsMuted(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    handleVolumeChange(e.clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleVolumeChange(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    handleVolumeChange(touch.clientX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    handleVolumeChange(touch.clientX);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex items-center gap-4" aria-label="Volume controls">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="text-primary-dark transition-colors hover:text-primary-sage dark:text-primary-light dark:hover:text-primary-sage"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="h-6 w-6" />
        ) : (
          <Volume2 className="h-6 w-6" />
        )}
      </button>
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="relative h-2 w-[374px] cursor-pointer rounded-lg bg-primary-light dark:bg-primary-sage/30"
        role="slider"
        aria-label="Volume slider"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={isMuted ? 0 : volume}
      >
        <div
          className="absolute h-full rounded-l-lg bg-primary-sage transition-[width] duration-75 dark:bg-primary-light"
          style={{ width: `${isMuted ? 0 : volume}%` }}
        />
        <div
          ref={handleRef}
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-primary-sage shadow-md transition-transform duration-75 hover:scale-110 dark:bg-primary-light"
          style={{
            left: `${isMuted ? 0 : volume}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </div>
  );
}
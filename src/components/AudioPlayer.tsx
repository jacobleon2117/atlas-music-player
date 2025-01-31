import { useRef, useEffect } from 'react';

interface AudioPlayerProps {
  songUrl: string | undefined;
  isPlaying: boolean;
  volume: number;
  playbackSpeed: number;
  onEnded: () => void;
}

export default function AudioPlayer({ 
  songUrl, 
  isPlaying, 
  volume, 
  playbackSpeed, 
  onEnded 
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  }, [songUrl]);

  return (
    <audio
      ref={audioRef}
      src={songUrl}
      onEnded={onEnded}
      style={{ display: 'none' }}
    />
  );
}
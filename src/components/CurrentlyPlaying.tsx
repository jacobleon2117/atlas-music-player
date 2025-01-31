import { useEffect } from 'react';
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import AudioPlayer from "./AudioPlayer";

interface CurrentSong {
  id: string;
  title: string;
  artist: string;
  cover: string;
  song: string;
}

interface CurrentlyPlayingProps {
  song: CurrentSong | null;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  playbackSpeed: number;
  setPlaybackSpeed: (speed: number) => void;
  volume: number;
  setVolume: (volume: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function CurrentlyPlaying({ 
  song,
  isPlaying,
  setIsPlaying,
  playbackSpeed,
  setPlaybackSpeed,
  volume,
  setVolume,
  onNext,
  onPrevious,
  isFirst,
  isLast
}: CurrentlyPlayingProps) {
  useEffect(() => {
    setIsPlaying(false);
  }, [song?.id]);

  if (!song) return null;

  return (
    <div className="flex w-[400px] flex-col">
      <div className="h-[400px] w-[400px]">
        <CoverArt 
          songId={song.id}
          coverUrl={song.cover}
          title={song.title}
        />
      </div>
      <div className="mt-6 h-[62px] w-full">
        <SongTitle 
          title={song.title}
          artist={song.artist}
        />
      </div>
      <div className="h-[62px] w-full">
        <PlayControls 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          onNext={onNext}
          onPrevious={onPrevious}
          isFirst={isFirst}
          isLast={isLast}
          playbackSpeed={playbackSpeed}
          setPlaybackSpeed={setPlaybackSpeed}
        />
      </div>
      <div className="h-[18px] w-full">
        <VolumeControls 
          volume={volume}
          setVolume={setVolume}
        />
      </div>
      <AudioPlayer 
        songUrl={song.song}
        isPlaying={isPlaying}
        volume={volume}
        playbackSpeed={playbackSpeed}
        onEnded={onNext}
      />
    </div>
  );
}
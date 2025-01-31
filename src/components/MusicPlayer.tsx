import { useState, useEffect } from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import LoadingSkeleton from "./LoadingSkeleton";

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface SongDetails extends Song {
  cover: string;
  song: string;
}

export default function MusicPlayer() {
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [currentSongDetails, setCurrentSongDetails] = useState<SongDetails | null>(null);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await fetch('/api/v1/playlist');
        if (!response.ok) throw new Error('Failed to fetch playlist');
        const data = await response.json();
        setPlaylist(data);
        if (data.length > 0) {
          fetchSongDetails(data[0].id);
        }
      } catch (error) {
        console.error('Error fetching playlist:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPlaylist();
  }, []);

  const fetchSongDetails = async (songId: string) => {
    try {
      const response = await fetch(`/api/v1/songs/${songId}`);
      if (!response.ok) throw new Error('Failed to fetch song details');
      const data = await response.json();
      setCurrentSongDetails(data);
    } catch (error) {
      console.error('Error fetching song details:', error);
    }
  };

const handleSongSelect = async (index: number) => {
  const newIndex = index >= playlist.length ? 0 : index;
  setCurrentSongIndex(newIndex);
  const selectedSong = playlist[newIndex];
  if (selectedSong) {
    await fetchSongDetails(selectedSong.id);
  }
};

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="flex max-w-5xl flex-col items-center gap-8 rounded-lg bg-white px-8 dark:bg-primary-dark md:flex-row">
<CurrentlyPlaying 
  song={currentSongDetails}
  isPlaying={isPlaying}
  setIsPlaying={setIsPlaying}
  playbackSpeed={playbackSpeed}
  setPlaybackSpeed={setPlaybackSpeed}
  volume={volume}
  setVolume={setVolume}
  onNext={() => {
    const nextIndex = currentSongIndex + 1;
    handleSongSelect(nextIndex >= playlist.length ? 0 : nextIndex);
  }}
  onPrevious={() => {
    const prevIndex = currentSongIndex - 1;
    handleSongSelect(prevIndex < 0 ? playlist.length - 1 : prevIndex);
  }}
  isFirst={false}
  isLast={false}
/>
      <div className="hidden h-[566px] w-[1px] bg-primary-sage/20 dark:bg-primary-light/20 md:block" />
      <Playlist 
        songs={playlist}
        currentSongIndex={currentSongIndex}
        onSongSelect={handleSongSelect}
      />
    </div>
  );
}
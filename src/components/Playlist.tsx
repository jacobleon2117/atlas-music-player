import PlayListItem from './PlayListItem';

interface Song {
  id: string;
  title: string;
  artist: string;
  genre: string;
  duration: number;
}

interface PlaylistProps {
  songs: Song[];
  currentSongIndex: number;
  onSongSelect: (index: number) => void;
}

export default function Playlist({ songs, currentSongIndex, onSongSelect }: PlaylistProps) {
  return (
    <div className="flex h-[566px] w-[400px] flex-col">
      <h1 className="text-primary-dark mb-2 text-lg font-bold dark:text-white">
        Playlist
      </h1>
      <div className="flex flex-1 flex-col justify-between">
        {songs.map((song, index) => (
          <PlayListItem
            key={song.id}
            song={song}
            isSelected={currentSongIndex === index}
            onSelect={() => onSongSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}
interface PlayListItemProps {
  song: {
    id: string;
    title: string;
    artist: string;
    duration: number;
  };
  isSelected: boolean;
  onSelect: () => void;
}

export default function PlayListItem({ song, isSelected, onSelect }: PlayListItemProps) {
  const formatDuration = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      onClick={onSelect}
      className={`flex h-[44px] cursor-pointer items-center rounded-lg px-2 transition-colors ${
        isSelected
          ? "bg-primary-light dark:bg-primary-sage/30 border-primary-sage mx-[-2px] border dark:border-white"
          : "hover:bg-primary-light/50 dark:hover:bg-primary-sage/20"
      }`}
    >
      <div className="flex-grow">
        <div className="text-primary-dark text-base font-medium dark:text-white">
          {song.title}
        </div>
        <div className="text-primary-sage dark:text-primary-sage/80 text-sm font-medium">
          {song.artist}
        </div>
      </div>
      <span className="text-primary-sage dark:text-primary-sage/80 text-sm font-medium">
        {formatDuration(song.duration)}
      </span>
    </div>
  );
}
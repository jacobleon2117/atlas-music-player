import songData from "/songs.json";

export default function Playlist({ selectedSong, onSongSelect }) {
  return (
    <div className="flex h-[566px] w-[400px] flex-col">
      <h1 className="text-primary-dark mb-2 text-lg font-bold dark:text-white">
        Playlist
      </h1>
      <div className="flex flex-1 flex-col justify-between">
        {songData.map((song, index) => (
          <div
            key={index}
            onClick={() => onSongSelect(index)}
            className={`flex h-[44px] cursor-pointer items-center rounded-lg px-2 transition-colors ${
              selectedSong === index
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
              {song.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

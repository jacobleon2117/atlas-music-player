import songData from "/songs.json";

export default function Playlist() {
  return (
    <div className="flex h-[566px] w-[400px] flex-col">
      <h1 className="text-primary-dark mb-2 text-lg font-bold">Playlist</h1>
      <div className="flex flex-1 flex-col justify-between">
        {songData.map((song, index) => (
          <div
            key={index}
            className={`hover:bg-primary-light flex h-[44px] items-center transition-colors ${
              song.highlighted ? "bg-primary-light" : "bg-white"
            }`}
          >
            <div className="flex-grow">
              <div className="text-primary-dark text-base font-medium">
                {song.title}
              </div>
              <div className="text-primary-sage text-sm font-medium">
                {song.artist}
              </div>
            </div>
            <span className="text-primary-sage text-sm font-medium">
              {song.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

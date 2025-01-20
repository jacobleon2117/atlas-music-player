export default function PlayList({ title, artist, duration }) {
  return (
    <div className="flex h-[44px] w-full items-center overflow-hidden">
      <div className="flex h-full flex-grow flex-col justify-between py-[1px]">
        <div className="flex h-[22px] items-center">
          <span className="truncate text-base font-medium">{title}</span>
        </div>
        <div className="flex h-[22px] items-center">
          <span className="text-playlist-text-color truncate text-sm font-medium">
            {artist}
          </span>
        </div>
      </div>
      <div className="flex h-full items-center">
        <span className="text-playlist-text-color text-sm">{duration}</span>
      </div>
    </div>
  );
}

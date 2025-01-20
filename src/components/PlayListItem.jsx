export default function PlayListitem() {
  return (
    <div className="flex h-[44px] w-full items-center overflow-hidden">
      <div className="flex h-full flex-grow flex-col justify-between py-[1px]">
        <div className="flex h-[22px] items-center">
          <span className="truncate text-base font-medium">Electric Fever</span>
        </div>
        <div className="flex h-[22px] items-center">
          <span className="text-playlist-text-color truncate text-sm font-medium">
            Neon Jungle
          </span>
        </div>
      </div>
      <div className="flex h-full items-center">
        <span className="text-playlist-text-color text-sm">8:41</span>
      </div>
    </div>
  );
}

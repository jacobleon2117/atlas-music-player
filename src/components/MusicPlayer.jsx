import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-8 md:flex-row md:items-start">
      <CurrentlyPlaying />
      <div className="hidden h-[567px] w-[1px] bg-gray-200 md:block" />
      <Playlist />
    </div>
  );
}

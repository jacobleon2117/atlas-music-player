import songData from "/songs.json";

export default function SongTitle({ selectedSong }) {
  return (
    <>
      <h1 className="text-primary-dark text-2xl font-bold dark:text-white">
        {songData[selectedSong].title}
      </h1>
      <p className="text-primary-sage dark:text-primary-sage/80 text-base font-normal">
        {songData[selectedSong].artist}
      </p>
    </>
  );
}

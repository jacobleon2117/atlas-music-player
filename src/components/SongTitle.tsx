interface SongTitleProps {
  title: string;
  artist: string;
}

export default function SongTitle({ title, artist }: SongTitleProps) {
  if (!title || !artist) {
    return (
      <div className="animate-pulse">
        <div className="mb-2 h-8 w-3/4 rounded bg-gray-300 dark:bg-gray-700"></div>
        <div className="h-6 w-1/2 rounded bg-gray-300 dark:bg-gray-700"></div>
      </div>
    );
  }

  return (
    <>
      <h1 className="truncate text-2xl font-bold text-primary-dark dark:text-white">
        {title}
      </h1>
      <p className="truncate text-base font-normal text-primary-dark/80 dark:text-primary-sage">
        {artist}
      </p>
    </>
  );
}
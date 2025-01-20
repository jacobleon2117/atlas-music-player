export default function CoverArt() {
  return (
    <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-lg bg-gray-100">
      <img
        src="/placeholder.svg"
        alt="Album Cover"
        className="h-full w-full rounded-lg object-contain"
      />
    </div>
  );
}

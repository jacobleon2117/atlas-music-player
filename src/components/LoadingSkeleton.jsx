import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-8 md:flex-row md:items-start">
      <div className="flex w-[400px] flex-col">
        <div className="h-[400px] w-[400px] animate-pulse bg-gray-200" />
        <div className="mt-6 h-[62px] w-full">
          <div className="h-6 w-3/4 animate-pulse rounded-md bg-gray-200" />
          <div className="mt-2 h-4 w-1/2 animate-pulse rounded-md bg-gray-200" />
        </div>
        <div className="h-[62px] w-full">
          <PlayControls />
        </div>
        <div className="h-[18px] w-full">
          <VolumeControls />
        </div>
      </div>
      <div className="hidden h-[566px] w-[1px] bg-gray-200 md:block" />
      <div className="flex h-[566px] w-[400px] flex-col">
        <h1 className="mb-2 text-lg font-bold text-black">Playlist</h1>
        <div className="flex flex-1 flex-col space-y-4">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex h-[44px] items-center">
              <div className="flex-grow">
                <div className="h-5 w-3/4 animate-pulse rounded-md bg-gray-200" />
                <div className="mt-2 h-4 w-1/2 animate-pulse rounded-md bg-gray-200" />
              </div>
              <div className="h-4 w-16 animate-pulse rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

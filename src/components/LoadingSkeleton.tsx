export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-8 md:flex-row md:items-start">
      <div className="flex w-[400px] flex-col">
        <div className="bg-primary-light dark:bg-primary-sage/30 h-[400px] w-[400px] animate-pulse" />
        <div className="mt-6 h-[62px] w-full">
          <div className="bg-primary-light dark:bg-primary-sage/30 h-6 w-3/4 animate-pulse rounded-md" />
          <div className="bg-primary-light dark:bg-primary-sage/30 mt-2 h-4 w-1/2 animate-pulse rounded-md" />
        </div>
        <div className="flex h-[62px] w-full items-center justify-center">
          <div className="bg-primary-light dark:bg-primary-sage/30 h-8 w-64 animate-pulse rounded-full" />
        </div>
        <div className="flex h-[18px] w-full items-center gap-4">
          <div className="bg-primary-light dark:bg-primary-sage/30 h-6 w-6 animate-pulse rounded-md" />
          <div className="bg-primary-light dark:bg-primary-sage/30 h-2 flex-1 animate-pulse rounded-full" />
        </div>
      </div>
      <div className="bg-primary-sage/20 dark:bg-primary-light/20 hidden h-[566px] w-[1px] md:block" />
      <div className="h-[566px] w-[400px]">
        <div className="bg-primary-light dark:bg-primary-sage/30 mb-2 h-6 w-24 animate-pulse rounded-md" />
        <div className="space-y-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="bg-primary-light dark:bg-primary-sage/30 h-[44px] animate-pulse rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
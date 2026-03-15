
const DetailPgeSkelton = () => {
  return (
    <div>
      <div className="w-full animate-pulse">
        {/* 1. Hero / Backdrop Skeleton */}
        <div className="relative h-[60vh] md:h-[80vh] bg-base-300 w-full overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-t from-base-100 via-transparent to-transparent" />

          {/* Content Inside Hero */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="container mx-auto flex flex-col md:flex-row gap-10 items-end">
              {/* Poster Skeleton */}
              <div className="hidden md:block w-64 h-96 bg-base-200 rounded-2xl shrink-0 shadow-xl border border-white/5" />

              {/* Title & Meta Skeleton */}
              <div className="flex-1 space-y-4 mb-4">
                <div className="h-12 md:h-20 bg-base-200 rounded-xl w-3/4" />{" "}
                {/* Title */}
                <div className="flex gap-3">
                  <div className="h-6 bg-base-200 rounded-md w-16" />{" "}
                  {/* Rating */}
                  <div className="h-6 bg-base-200 rounded-md w-12" />{" "}
                  {/* Year */}
                  <div className="h-6 bg-base-200 rounded-md w-24" />{" "}
                  {/* Runtime */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Main Content Grid Skeleton */}
        <div className="container mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Overview */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-8 bg-base-300 rounded-lg w-32" /> {/* Heading */}
            <div className="space-y-3">
              <div className="h-4 bg-base-200 rounded w-full" />
              <div className="h-4 bg-base-200 rounded w-full" />
              <div className="h-4 bg-base-200 rounded w-3/4" />
            </div>
            {/* Production Logos Skeleton */}
            <div className="pt-8 flex gap-6">
              <div className="h-12 w-32 bg-base-200 rounded-lg" />
              <div className="h-12 w-32 bg-base-200 rounded-lg" />
            </div>
          </div>

          {/* Right Column: Stats Card Skeleton */}
          <div className="bg-base-200/40 rounded-3xl p-8 space-y-8">
            <div className="h-6 bg-base-300 rounded w-1/2 mx-auto" />
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex justify-between">
                <div className="h-4 bg-base-300/50 rounded w-16" />
                <div className="h-4 bg-base-300 rounded w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPgeSkelton;

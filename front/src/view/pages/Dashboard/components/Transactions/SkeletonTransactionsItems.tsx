export function SkeletonTransactionsItems() {
  return (
    <>
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="flex animate-pulse items-center justify-between gap-4 rounded-2xl bg-white p-4"
        >
          <div className="flex flex-1 items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gray-200" />
            <div className="flex-1">
              <div className="mb-2 h-4 w-24 rounded bg-gray-200" />
              <div className="h-3 w-20 rounded bg-gray-200" />
            </div>
          </div>
          <div className="h-5 w-20 rounded bg-gray-200" />
        </div>
      ))}
    </>
  );
}

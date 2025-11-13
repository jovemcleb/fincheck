export function SkeletonAccounts() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      {/* Header: Total balance */}
      <div className="animate-pulse">
        <span className="block tracking-[-0.5px] text-white">Saldo total</span>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-8 w-32 rounded bg-teal-700" />
          <div className="h-8 w-8 rounded bg-teal-700" />
        </div>
      </div>

      {/* Swiper section */}
      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
        <div>
          {/* Swiper header: "Minhas contas" + navigation buttons */}
          <div className="mb-4 flex animate-pulse items-center justify-between">
            <div className="h-6 w-40 rounded bg-teal-700" />
            <div className="flex gap-2">
              <div className="h-8 w-8 rounded bg-teal-700" />
              <div className="h-8 w-8 rounded bg-teal-700" />
            </div>
          </div>

          {/* Skeleton cards in a grid-like layout */}
          <div className="flex gap-4 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex min-w-max flex-shrink-0 animate-pulse"
                style={{ minWidth: '60%' }}
              >
                <div className="flex h-49 w-full flex-col justify-between rounded-2xl border-b-4 border-teal-950 bg-white p-4">
                  <div>
                    <div className="h-6 w-6 rounded bg-gray-200" />
                    <div className="mt-4 h-4 w-32 rounded bg-gray-200" />
                  </div>
                  <div>
                    <div className="mb-2 h-6 w-40 rounded bg-gray-200" />
                    <div className="h-3 w-20 rounded bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

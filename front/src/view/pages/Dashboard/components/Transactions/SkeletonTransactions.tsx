import { SkeletonTransactionsItems } from './SkeletonTransactionsItems';

export function SkeletonTransactions() {
  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-10 sm:px-8 md:p-10">
      <header>
        <div className="relative mt-6">
          <div className="flex animate-pulse justify-center gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-10 w-28 rounded-full bg-gray-300" />
            ))}
          </div>
        </div>
      </header>

      <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
        <SkeletonTransactionsItems />
      </div>
    </div>
  );
}

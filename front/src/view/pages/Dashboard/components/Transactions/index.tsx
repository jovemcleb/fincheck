import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '../../../../../app/config/constants';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import emptyStateImage from '../../../../../assets/empty-state.svg';
import { CategoryIcon } from '../../../../components/icons/categories/CategoryIcon';
import { FilterIcon } from '../../../../components/icons/FilterIcon';
import { SkeletonTransactions } from './SkeletonTransactions';
import { SkeletonTransactionsItems } from './SkeletonTransactionsItems';
import { SliderOption } from './SliderOption';
import { TransactionsSliderNavigation } from './TransactionsSliderNavigation';
import { TransactionTypeDropdown } from './TransactionTypeDropdown';
import { useTransactionsController } from './useTransactionsController';

export interface TransactionsProps {}

export function Transactions() {
  const { areValuesVisible, isInitialLoading, transactions, isLoading } =
    useTransactionsController();

  if (isInitialLoading) {
    return <SkeletonTransactions />;
  }

  const hasTransactions = transactions.length > 0;
  const showEmpty = !hasTransactions && !isLoading;
  const showSkeleton =
    (hasTransactions && isLoading) || (!hasTransactions && isLoading);

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-gray-100 px-4 py-10 sm:px-8 md:p-10">
      <header className="">
        <div className="flex items-center justify-between">
          <TransactionTypeDropdown />

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="relative mt-6">
          <Swiper slidesPerView={3} centeredSlides>
            <TransactionsSliderNavigation />

            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => (
                  <SliderOption
                    isActive={isActive}
                    month={month}
                    index={index}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 flex-1 space-y-2 overflow-y-auto">
        {showEmpty && (
          <div className="flex h-full flex-col items-center justify-center gap-4">
            <img src={emptyStateImage} alt="Empty state" />
            <p className="text-gray-700">Não encontramos nenhuma transação</p>
          </div>
        )}

        {showSkeleton && <SkeletonTransactionsItems />}

        {hasTransactions && !isLoading && (
          <>
            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <div className="flex flex-1 items-center gap-3">
                <CategoryIcon type="expense" />
                <div>
                  <strong className="block font-bold tracking-[0.5px]">
                    Almoço
                  </strong>
                  <span className="text-sm text-gray-600">04/05/2023</span>
                </div>
              </div>
              <span
                className={cn(
                  'font-medium tracking-[0.5px] text-red-800',
                  areValuesVisible && 'blur-sm',
                )}
              >
                {formatCurrency(1000)}
              </span>
            </div>

            <div className="flex items-center justify-between gap-4 rounded-2xl bg-white p-4">
              <div className="flex flex-1 items-center gap-3">
                <CategoryIcon type="income" />
                <div>
                  <strong className="block font-bold tracking-[0.5px]">
                    Almoço
                  </strong>
                  <span className="text-sm text-gray-600">04/05/2023</span>
                </div>
              </div>
              <span
                className={cn(
                  'font-medium tracking-[0.5px] text-green-800',
                  areValuesVisible && 'blur-sm',
                )}
              >
                {formatCurrency(1000)}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

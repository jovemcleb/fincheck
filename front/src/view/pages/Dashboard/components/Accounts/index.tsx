import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { AccountSliderNavigation } from './AccountSliderNavigation';

import { PlusIcon } from '@radix-ui/react-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { SkeletonAccounts } from './SkeletonAccounts';
import { useAccountController } from './useAccountController';
export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts,
  } = useAccountController();

  if (isLoading) {
    return <SkeletonAccounts />;
  }

  const hasAccounts = accounts.length > 0;

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="block tracking-[-0.5px] text-white">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong
            className={cn(
              'text-2xl tracking-[-1px] text-white',
              areValuesVisible && 'blur-md',
            )}
          >
            {formatCurrency(1000)}
          </strong>

          <button
            className="flex h-8 w-8 items-center justify-center"
            onClick={toggleValuesVisibility}
          >
            <EyeIcon open={areValuesVisible} />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
        <strong className="text-lg font-bold tracking-[-1px] text-white">
          Minhas contas
        </strong>

        {!hasAccounts && (
          <button className="mt-4 flex h-52 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-teal-600 text-white">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-dashed border-white">
              <PlusIcon className="h-6 w-6" />
            </div>
            <span className="block w-32 text-center font-medium tracking-[-0.5px]">
              Cadastre uma nova conta
            </span>
          </button>
        )}

        {hasAccounts && (
          <div>
            <Swiper
              onSlideChange={(swiper) => {
                setSliderState({
                  isBeginning: swiper.isBeginning,
                  isEnd: swiper.isEnd,
                });
              }}
              spaceBetween={16}
              slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
            >
              <div
                slot="container-start"
                className="mb-4 flex items-center justify-between"
              >
                <strong className="text-lg font-bold tracking-[-1px] text-white">
                  Minhas contas
                </strong>

                <AccountSliderNavigation
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              </div>

              <SwiperSlide>
                <AccountCard
                  color="#7950f2"
                  name="Nubank"
                  balance={1234}
                  type="CHECKING"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  color="#333"
                  name="XP"
                  balance={5678}
                  type="INVESTMENT"
                />
              </SwiperSlide>
              <SwiperSlide>
                <AccountCard
                  color="#ffe600"
                  name="XP"
                  balance={752}
                  type="CASH"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}

import { EyeIcon } from '../../../../components/icons/EyeIcon';
import { AccountCard } from './AccountCard';
import { AccountSliderNavigation } from './AccountSliderNavigation';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useAccountController } from './useAccountController';
export function Accounts() {
  const { sliderState, setSliderState, windowWidth } = useAccountController();

  return (
    <div className="flex h-full w-full flex-col rounded-2xl bg-teal-900 px-4 py-8 md:p-10">
      <div>
        <span className="block tracking-[-0.5px] text-white">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>

          <button className="flex h-8 w-8 items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end md:mt-0">
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
              <AccountCard color="#0f0" name="XP" balance={752} type="CASH" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useSwiper } from 'swiper/react';

interface AccountSliderNavigationProps {
  isBeginning: boolean;
  isEnd: boolean;
}
export function AccountSliderNavigation({
  isBeginning,
  isEnd,
}: AccountSliderNavigationProps) {
  const swiper = useSwiper();

  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        disabled={isBeginning}
      >
        <ChevronLeftIcon className="h-6 w-6 text-white" />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="rounded-full py-3 pl-2.5 pr-3.5 transition-colors enabled:hover:bg-black/10 disabled:opacity-40"
        disabled={isEnd}
      >
        <ChevronRightIcon className="h-6 w-6 text-white" />
      </button>
    </div>
  );
}

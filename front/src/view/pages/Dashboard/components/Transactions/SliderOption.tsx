import { useSwiper } from 'swiper/react';
import { cn } from '../../../../../app/utils/cn';

interface SliderOptionProps {
  month: string;
  isActive: boolean;
  index: number;
}

export function SliderOption({ month, isActive, index }: SliderOptionProps) {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideTo(index)}
      className={cn(
        'text-gray-800" h-12 w-full rounded-full text-sm font-medium tracking-[-0.5px]',
        isActive && 'bg-white',
      )}
    >
      {month}
    </button>
  );
}

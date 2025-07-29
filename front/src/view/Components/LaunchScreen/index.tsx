import { Transition } from '@headlessui/react';
import { Logo } from '../Logo';

interface LaunchScreenProps {
  isLoading: boolean;
}

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    <Transition
      show={isLoading}
      enter="transition-opacity duration-75"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed bottom-0 left-0 right-0 top-0 grid h-full w-full place-items-center bg-teal-900">
        <Logo className="h-16 animate-pulse text-white" />
      </div>
    </Transition>
  );
}

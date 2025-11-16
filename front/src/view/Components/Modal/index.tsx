import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cn } from '../../../app/utils/cn';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  rightActions?: React.ReactNode;
}

export function Modal({
  isOpen = false,
  title,
  children,
  rightActions,
  onClose,
}: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            'fixed inset-0 z-40 bg-black/30 backdrop-blur-sm',
            'data-[state=open]:animate-overlay-show',
          )}
        />

        <Dialog.Content
          className={cn(
            'fixed left-1/2 top-1/2 z-50 w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2 space-y-10 rounded-2xl bg-white p-6 shadow-lg outline-none',
            'data-[state=open]:animate-content-show',
          )}
        >
          <header className="flex h-12 items-center justify-between text-gray-800">
            <button
              onClick={onClose}
              className="flex h-12 w-12 items-center justify-center outline-none"
            >
              <Cross2Icon className="h-6 w-6" />
            </button>
            <Dialog.Title>
              <span className="text-lg font-bold tracking-[-0.5px]">
                {title}
              </span>
            </Dialog.Title>
            <div className="flex h-12 w-12 items-center justify-center">
              {rightActions}
            </div>
          </header>
          <Dialog.Description />

          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

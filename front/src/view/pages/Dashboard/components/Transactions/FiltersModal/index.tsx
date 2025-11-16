import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { cn } from '../../../../../../app/utils/cn';
import Button from '../../../../../components/Button';
import { Modal } from '../../../../../components/Modal';
import { useFiltersModal } from './useFiltersModal';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const bankAccounts = [
  { id: '123', name: 'Nubank' },
  { id: '456', name: 'XP' },
  { id: '789', name: 'Dinheiro' },
];

export function FiltersModal({ open, onClose }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  } = useFiltersModal();

  return (
    <Modal isOpen={open} title="Filtros" onClose={onClose}>
      <div>
        <span className="text-lg font-bold tracking-[-0.5px] text-gray-800">
          Conta
        </span>

        <div className="mt-2 space-y-2">
          {bankAccounts.map(({ name, id }) => (
            <button
              key={id}
              onClick={() => handleSelectBankAccount(id)}
              className={cn(
                'w-full rounded-2xl p-2 text-left text-gray-800 transition-colors hover:bg-gray-50',
                id === selectedBankAccountId && '!bg-gray-200',
              )}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <span className="text-lg font-bold tracking-[-0.5px] text-gray-800">
          Ano
        </span>
        <div className="mt-2 flex w-52 items-center justify-between">
          <button
            onClick={() => handleChangeYear(-1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <div className="flex-1 text-center">
            <span className="text-sm font-medium tracking-[-0.5px]">
              {selectedYear}
            </span>
          </div>
          <button
            onClick={() => handleChangeYear(1)}
            className="flex h-12 w-12 items-center justify-center"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <Button className="mt-10 w-full">Aplicar Filtros</Button>
    </Modal>
  );
}

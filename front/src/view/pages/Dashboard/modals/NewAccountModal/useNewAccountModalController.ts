import { useDashBoardStore } from '../../../../../app/stores/dashboardStore';

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashBoardStore();

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
  };
}

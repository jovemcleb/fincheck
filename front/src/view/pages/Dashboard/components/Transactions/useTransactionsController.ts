import { useState } from 'react';
import { useDashBoardStore } from '../../../../../app/stores/dashboardStore';

export function useTransactionsController() {
  const [isFiltersModalOpen, setIsFilterModalOpen] = useState(true);
  const { areValuesVisible } = useDashBoardStore();

  function handleOpenFiltersModal() {
    setIsFilterModalOpen(true);
  }

  function handleCloseFiltersModal() {
    setIsFilterModalOpen(false);
  }

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
    handleOpenFiltersModal,
    handleCloseFiltersModal,
    isFiltersModalOpen,
  };
}

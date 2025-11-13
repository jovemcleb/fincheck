import { useDashBoardStore } from '../../../../../app/stores/dashboardStore';

export function useTransactionsController() {
  const { areValuesVisible } = useDashBoardStore();

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading: false,
    transactions: [],
  };
}

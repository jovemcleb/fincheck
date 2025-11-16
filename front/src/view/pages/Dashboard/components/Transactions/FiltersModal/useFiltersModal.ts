import { useState } from 'react';

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<
    null | string
  >(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function handleChangeYear(step: number) {
    setSelectedYear((prevYear) => prevYear + step);
  }

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) =>
      prevState === bankAccountId ? null : bankAccountId,
    );
  }

  return {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
  };
}

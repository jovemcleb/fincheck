import { Logo } from '../../Components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';

import { Transactions } from './components/Transactions';

export function Dashboard() {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <header className="flex h-12 items-center justify-between border-b border-b-slate-200 p-4 md:p-8">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>

      <main className="flex w-full max-w-screen-2xl flex-1 flex-col gap-4 self-center p-4 md:flex-row md:px-8">
        <div className="w-full md:w-1/2">
          <Accounts />
        </div>
        <div className="w-full md:w-1/2">
          <Transactions />
        </div>
      </main>
    </div>
  );
}

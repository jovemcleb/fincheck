import { Outlet } from 'react-router-dom';
import ilustration from '../../assets/ilustration.png';
import { Logo } from '../Components/Logo';

export function AuthLayout() {
  return (
    <div className="flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center lg:w-1/2">
        <Logo className="h-6 text-gray-500" />
        <div className="mt-16 w-full max-w-[31.5rem] px-8">
          <Outlet />
        </div>
      </div>

      <div className="hidden h-full w-1/2 items-center justify-center p-8 lg:flex">
        <img
          src={ilustration}
          alt="Ilustração do fincheck"
          className="h-full max-h-[60rem] w-full max-w-[41rem] select-none rounded-[32px] object-cover"
        />

        <div className="absolute bottom-8 mx-8 max-w-[41rem] rounded-b-[32px] bg-white p-10">
          <Logo className="h-8 text-teal-900" />

          <p className="mt-6 text-xl font-medium text-gray-700">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}

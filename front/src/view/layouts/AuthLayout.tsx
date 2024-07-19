import { Outlet } from 'react-router-dom';
import ilustration from '../../assets/ilustration.png';
import { Logo } from '../Components/Logo';

export function AuthLayout() {
  return (
    <div className="flex w-full h-full">
      <div className="w-full h-full flex items-center justify-center flex-col lg:w-1/2">
        <Logo className="h-6 text-gray-500" />
        <div className="mt-16 w-full max-w-[31.5rem] px-8">
          <Outlet />
        </div>
      </div>

      <div className="w-1/2 h-full hidden justify-center items-center p-8 lg:flex">
        <img
          src={ilustration}
          alt="Ilustração do fincheck"
          className="object-cover h-full w-full max-w-[41rem] max-h-[60rem] select-none rounded-[32px]"
        />

        <div className="max-w-[41rem] bottom-8 bg-white p-10 absolute rounded-b-[32px]">
          <Logo className="text-teal-900 h-8" />

          <p className="text-gray-700 font-medium text-xl mt-6">
            Gerencie suas finanças pessoais de uma forma simples com o fincheck,
            e o melhor, totalmente de graça!
          </p>
        </div>
      </div>
    </div>
  );
}

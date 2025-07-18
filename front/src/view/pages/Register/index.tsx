import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import { Input } from '../../Components/Input';
import { useRegisterController } from './useRegisterController';

export function Register() {
  const { errors, handleSubmit, register } = useRegisterController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Crie sua conta
        </h1>
        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Já possui uma conta?
          </span>
          <Link
            to="/login"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Fazer login
          </Link>
        </p>
      </header>

      <form className="mt-16 flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          type="text"
          {...register('name')}
          placeholder="Nome"
          error={errors.name?.message}
        />
        <Input
          type="email"
          {...register('email')}
          placeholder="Email"
          error={errors.email?.message}
        />
        <Input
          type="password"
          {...register('password')}
          placeholder="Senha"
          error={errors.password?.message}
        />
        <Button type="submit" className="mt-2">
          Criar conta
        </Button>
      </form>
    </>
  );
}

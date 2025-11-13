import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Input } from '../../components/Input';
import { useLoginController } from './useLoginController';

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold tracking-[-1px] text-gray-900">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="tracking-[-0.5px] text-gray-700">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="font-medium tracking-[-0.5px] text-teal-900"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-16 flex flex-col gap-4" onSubmit={handleSubmit}>
        <Input
          error={errors.email?.message}
          type="email"
          placeholder="Email"
          {...register('email')}
        />

        <Input
          error={errors.password?.message}
          type="password"
          placeholder="Senha"
          {...register('password')}
        />

        <Button isLoading={isPending} type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}

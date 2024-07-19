import { Link } from 'react-router-dom';
import Button from '../../Components/Button';
import { Input } from '../../Components/Input';

export function Login() {
  return (
    <>
      <header className="flex flex-col items-center gap-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">
          Entre em sua conta
        </h1>
        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">
            Novo por aqui?
          </span>
          <Link
            to="/register"
            className="text-teal-900 tracking-[-0.5px] font-medium"
          >
            Crie uma conta
          </Link>
        </p>
      </header>

      <form className="mt-16 flex flex-col gap-4">
        <Input type="email" name="email" placeholder="Email" />
        <Input type="password" name="password" placeholder="Senha" />
        <Button type="submit" className="mt-2">
          Entrar
        </Button>
      </form>
    </>
  );
}

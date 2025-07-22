import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { AuthService } from '../../../app/services/authService';
import { SigninParams } from '../../../app/services/authService/signin';

const loginSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve ter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof loginSchema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(loginSchema) });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => AuthService.signin(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      toast.error('Credenciais inválidas');
    }
  });

  return { handleSubmit, register, errors, isPending };
}

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from 'zod';
import { AuthService } from '../../../app/services/authService';
import { SignupParams } from '../../../app/services/authService/signup';

const registerSchema = z.object({
  email: z
    .string()
    .nonempty('E-mail é obrigatório')
    .email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve ter pelo menos 8 dígitos'),
  name: z.string().nonempty('Nome é obrigatório'),
});

type FormData = z.infer<typeof registerSchema>;

export function useRegisterController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(registerSchema) });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SignupParams) => AuthService.signup(data),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      toast.error('Erro ao cadastrar usuário');
    }
  });

  return { handleSubmit, register, errors, isPending };
}

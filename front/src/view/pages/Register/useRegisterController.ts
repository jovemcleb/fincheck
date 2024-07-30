import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

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

  const handleSubmit = hookFormSubmit((data) => console.log(data));

  return { handleSubmit, register, errors };
}

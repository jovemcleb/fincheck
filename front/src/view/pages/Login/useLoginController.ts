import { useForm } from 'react-hook-form';
import { z } from 'zod';

type FormData = {
  email: string;
  password: string;
};

const loginSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty().min(8),
});

export function useLoginController() {
  const { handleSubmit: hookFormHandleSubmit, register } = useForm<FormData>();

  const handleSubmit = hookFormHandleSubmit((data) => {
    const result = loginSchema.safeParse(data);
    console.log(result);
  });

  return { handleSubmit, register };
}

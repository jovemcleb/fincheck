import { useQuery } from '@tanstack/react-query';
import { ReactNode, useEffect } from 'react';
import toast from 'react-hot-toast';
import { LaunchScreen } from '../../view/components/LaunchScreen';
import { UsersService } from '../services/usersService';
import { useAuthStore } from '../stores/authStore';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { signedIn, signout, setSignedIn } = useAuthStore();

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => UsersService.me(),
    enabled: signedIn,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou');
      signout();
    }
  }, [isError, signout]);

  useEffect(() => {
    if (isSuccess && !signedIn) {
      setSignedIn(true);
    }
  }, [isSuccess, signedIn, setSignedIn]);

  return (
    <>
      <LaunchScreen isLoading={isFetching} />
      {!isFetching && children}
    </>
  );
}

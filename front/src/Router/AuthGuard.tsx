import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStore } from '../app/stores/authStore';

interface AuthGuardProps {
  isPrivate: boolean;
}

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuthStore();

  if (!signedIn && isPrivate) {
    return <Navigate to={'/login'} replace />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to={'/'} replace />;
  }
  return <Outlet />;
}

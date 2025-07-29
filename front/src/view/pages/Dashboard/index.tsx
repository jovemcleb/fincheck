import { useAuthStore } from '../../../app/stores/authStore';
import Button from '../../Components/Button';

export function Dashboard() {
  const { signout } = useAuthStore();
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={signout}>Sair</Button>
    </>
  );
}

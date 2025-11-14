import { ExitIcon } from '@radix-ui/react-icons';
import { useAuthStore } from '../../../app/stores/authStore';
import { DropdownMenu } from '../DropdownMenu';

export function UserMenu() {
  const { signout } = useAuthStore();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-teal-100 bg-teal-50">
          <span className="text-sm font-medium tracking-[-0.5px] text-teal-900">
            CA
          </span>
        </div>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="w-32">
        <DropdownMenu.Item
          onSelect={signout}
          className="flex items-center justify-between"
        >
          Sair
          <ExitIcon className="h-6 w-6" />
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

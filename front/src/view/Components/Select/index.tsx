import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RdxSelect from '@radix-ui/react-select';
import { cn } from '../../../app/utils/cn';

// const SelectItem = React.forwardRef(
//   ({ children, className, ...props }, forwardedRef) => {
//     return (

//     );
//   },
// );
// SelectItem.displayName = 'SelectItem';

export default function Select() {
  return (
    <RdxSelect.Root>
      <RdxSelect.Trigger
        className={cn(
          'relative h-12 w-full rounded-lg border border-gray-500 bg-white px-3 text-left text-gray-800 outline-none transition-all focus:border-gray-800',
          // className,
          // error && '!border-red-900',
        )}
      >
        <RdxSelect.Value />
        <RdxSelect.Icon className="absolute right-3 top-1/2 -translate-y-1/2">
          <ChevronDownIcon className="h-6 w-6 text-gray-800" />
        </RdxSelect.Icon>
      </RdxSelect.Trigger>

      <RdxSelect.Portal>
        <RdxSelect.Content className="z-50 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg">
          <RdxSelect.ScrollUpButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
            <ChevronUpIcon />
          </RdxSelect.ScrollUpButton>

          <RdxSelect.Viewport className="p-2">
            <RdxSelect.Item
              className="cursor-pointer p-2 text-sm text-gray-800 outline-none"
              value="banana"
            >
              <RdxSelect.ItemText>Banana</RdxSelect.ItemText>
            </RdxSelect.Item>
            <RdxSelect.Item
              className="cursor-pointer p-2 text-sm text-gray-800 outline-none"
              value="apple"
            >
              <RdxSelect.ItemText>Apple</RdxSelect.ItemText>
            </RdxSelect.Item>
            <RdxSelect.Item
              className="cursor-pointer p-2 text-sm text-gray-800 outline-none"
              value="orange"
            >
              <RdxSelect.ItemText>Orange</RdxSelect.ItemText>
            </RdxSelect.Item>
          </RdxSelect.Viewport>

          <RdxSelect.ScrollDownButton className="flex h-[25px] cursor-default items-center justify-center bg-white text-gray-800">
            <ChevronDownIcon />
          </RdxSelect.ScrollDownButton>
        </RdxSelect.Content>
      </RdxSelect.Portal>
    </RdxSelect.Root>
  );
}

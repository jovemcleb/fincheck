import { CrossCircledIcon } from '@radix-ui/react-icons';
import { ComponentProps, forwardRef } from 'react';
import { cn } from '../../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, error, className, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="relative">
        <input
          ref={ref}
          name={name}
          {...props}
          id={inputId}
          className={cn(
            'peer h-12 w-full rounded-lg border border-gray-500 bg-white px-3 pt-3.5 text-gray-800 outline-none transition-all placeholder-shown:pt-0 focus:border-gray-800',
            className,
            error && '!border-red-900',
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="pointer-events-none absolute left-3 top-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base"
        >
          {placeholder}
        </label>

        {error && (
          <div className="mt-2 flex items-center gap-1 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

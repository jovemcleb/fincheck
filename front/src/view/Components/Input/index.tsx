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
            'bg-white w-full rounded-lg border border-gray-500 px-3 h-12 text-gray-800 pt-3.5 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none',
            className,
            error && '!border-red-900',
          )}
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="absolute text-xs top-1 left-3 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all"
        >
          {placeholder}
        </label>

        {error && (
          <div className="flex gap-1 items-center mt-2 text-red-900">
            <CrossCircledIcon />
            <span className="text-xs">{error}</span>
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

import { ComponentProps, forwardRef } from 'react';

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, name, id, ...props }, ref) => {
    const inputId = id || name;

    return (
      <div className="relative">
        <input
          ref={ref}
          name={name}
          {...props}
          id={inputId}
          className="bg-white w-full rounded-lg border border-gray-500 px-3 h-12 text-gray-800 pt-3.5 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none"
          placeholder=" "
        />
        <label
          htmlFor={inputId}
          className="absolute text-xs top-1 left-3 pointer-events-none text-gray-700 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 transition-all"
        >
          {placeholder}
        </label>
      </div>
    );
  },
);

Input.displayName = 'Input';

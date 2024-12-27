import { cva, VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export const buttonStyle = cva(
  ['hover:bg-secondary-hover', 'transition-colors'],
  {
    variants: {
      variant: {
        default: ['bg-secondary', 'hover:bg-secondary-hover'],
        ghost: ['hover:bg-transparent'],
        dark: [
          'bg-secondary-dark',
          'hover:bg-secondary-dark-hover',
          'text-secondary',
        ],
      },
      size: {
        default: [],
        icon: ['flex', 'item-center', 'justify-center', 'p-0'],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = VariantProps<typeof buttonStyle> & ComponentProps<'button'>;

const Button = ({ variant, size, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={twMerge(buttonStyle({ variant, size }), 'border-0', className)}
    />
  );
};

export default Button;

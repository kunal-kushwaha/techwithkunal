import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const iconVariants = cva('flex justify-center items-center', {
  variants: {
    variant: {
      circle:
        'rounded-full text-primary bg-primary-100 border-[10px] border-primary-50 w-14 h-14',
      square: 'text-white bg-primary-500 rounded-xl w-12 h-12',
    },
  },
  defaultVariants: {
    variant: 'circle',
  },
});

export interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {}

const Icon = React.forwardRef<HTMLDivElement, IconProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = 'div';
    return (
      <Comp
        className={cn(iconVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Icon.displayName = 'Icon';

export { Icon, iconVariants };

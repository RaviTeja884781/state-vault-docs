import { cn } from '@/utils';
import * as React from 'react';

/**
 * `CardFooter` is a React functional component that renders a `div` element with a set of default
 * class names and any additional class names passed via the `className` prop. It also forwards a ref
 * to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} The rendered `div` element with the specified props and class names.
 */
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex text-sm text-muted-foreground items-center p-4 pt-0', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';

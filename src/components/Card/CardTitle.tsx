import { cn } from '@/utils';
import * as React from 'react';

/**
 * `CardTitle` is a React component that renders a `div` element with a set of predefined
 * class names for styling. It uses `React.forwardRef` to forward the ref to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} The rendered `div` element with the specified class names and props.
 */
export const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-2xl font-semibold leading-none tracking-tight', className)} {...props} />
  )
);
CardTitle.displayName = 'CardTitle';

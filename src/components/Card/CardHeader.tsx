import { cn } from '@/utils';
import * as React from 'react';

/**
 * `CardHeader` is a React component that renders a `div` element with a flexible layout.
 * It uses `React.forwardRef` to pass a ref to the `div` element.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The HTML attributes to be passed to the `div` element.
 * @param {string} [props.className] - Additional class names to be applied to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} A `div` element with the specified class names and props.
 */
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-4', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

import { cn } from '@/utils';
import * as React from 'react';

/**
 * `CardContent` is a React functional component that forwards its ref to a `div` element.
 * It accepts all standard HTML `div` attributes and an optional `className` prop.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 *
 * @returns {JSX.Element} A `div` element with the specified props and forwarded ref.
 */
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('p-4 pt-0 text-sm', className)} {...props} />
);
CardContent.displayName = 'CardContent';

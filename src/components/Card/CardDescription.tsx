import { cn } from '@/utils';
import * as React from 'react';

/**
 * `CardDescription` is a React functional component that renders a `div` element with a forwarded ref.
 * It accepts all standard HTML attributes for a `div` element and an optional `className` prop.
 * The component applies default styling classes and merges them with any additional classes provided via the `className` prop.
 *
 * @param {React.HTMLAttributes<HTMLDivElement>} props - The props for the `div` element.
 * @param {string} [props.className] - Additional class names to apply to the `div` element.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the `div` element.
 * @returns {JSX.Element} The rendered `div` element with the applied classes and forwarded ref.
 */
export const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
CardDescription.displayName = 'CardDescription';

import { cn } from '@/utils';
import * as React from 'react';
import { CardHeader } from './CardHeader';
import { CardTitle } from './CardTitle';
import { CardDescription } from './CardDescription';
import { CardContent } from './CardContent';
import { CardFooter } from './CardFooter';
type CardProps = React.PropsWithChildren<React.ComponentProps<'div'>>;

/**
 * `Card` is a React functional component that renders a styled div element.
 * It uses `React.forwardRef` to forward a ref to the underlying div element.
 *
 * @param {CardProps} props - The properties passed to the component.
 * @param {string} [props.className] - Additional class names to apply to the card.
 * @param {React.ReactNode} props.children - The content to be rendered inside the card.
 * @param {React.Ref<HTMLDivElement>} ref - The ref to be forwarded to the div element.
 *
 * @returns {JSX.Element} A styled div element containing the children.
 */
const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border bg-card dark:bg-card/10 dark:border-gray-200/10 text-card-foreground shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
Card.displayName = 'Card';

export default Object.assign(Card as React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>, {
  Header: CardHeader,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
});
export { CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

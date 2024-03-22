import { cn } from '@/lib/utils';
import {
  CardDescriptionProps,
  CardImageProps,
  CardProps,
  CardTitleProps,
} from '@/types';
import Image from 'next/image';

// TODO: Style this section accordingly

const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div className={cn(className, '')} {...props}>
      {children}
    </div>
  );
};

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
  return (
    <h2 className={cn(className, '')} {...props}>
      {children}
    </h2>
  );
};

const CardDescription = ({
  className,
  children,
  ...props
}: CardDescriptionProps) => {
  return (
    <p className={cn(className, '')} {...props}>
      {children}
    </p>
  );
};

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => {
  return <Image src={src} alt={alt} {...props} className={cn(className, '')} />;
};

export { Card, CardTitle, CardDescription, CardImage };

import {
  HeaderCtaProps,
  HeaderDescriptionProps,
  HeaderImageProps,
  HeaderProps,
  HeaderTitleProps,
} from '@/types';
import { ViewContainer } from './ui/view-container';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Header = ({ className, children, ...props }: HeaderProps) => {
  return (
    <header className={cn(className, 'my-12 lg:my-20')} {...props}>
      <ViewContainer className="">{children}</ViewContainer>
    </header>
  );
};

const HeaderTitle = ({ className, children, ...props }: HeaderTitleProps) => {
  return (
    <h1
      className={cn(
        className,
        'max-[360px]:text-[27px] text-[31px] leading-tight md:text-[46px] lg:text-[54px] lg:leading-tight font-medium lg:max-w-[90%]'
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

const HeaderDescription = ({
  className,
  children,
  ...props
}: HeaderDescriptionProps) => {
  return (
    <p
      className={cn(
        className,
        'text-base lg:text-lg text-gray-500 md:max-w-[72%] mt-4 md:mt-5 lg:mt-6'
      )}
      {...props}
    >
      {children}
    </p>
  );
};

const HeaderCta = ({ className, children, ...props }: HeaderCtaProps) => {
  return (
    <div
      className={cn(
        className,
        'flex gap-3 flex-col-reverse md:flex-row mt-7 md:mt-9 lg:mt-11'
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const HeaderImage = ({ className, src, alt, ...props }: HeaderImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={cn(
        className,
        'mt-10 lg:mt-16 min-h-64 object-cover rounded-md'
      )}
      {...props}
    />
  );
};

export { Header, HeaderTitle, HeaderDescription, HeaderCta, HeaderImage };

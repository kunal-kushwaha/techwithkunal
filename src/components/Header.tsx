import { cn } from '@/lib/utils';
import { HeaderProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { buttonVariants } from './ui/button';
import Image from 'next/image';
import { headerImage, headerUnderline } from '@/assets';

const Header = ({ className, ...props }: HeaderProps) => {
  return (
    <header className={cn(className, 'my-12 lg:my-20')} {...props}>
      <ViewContainer className="">
        <h1 className="relative -z-10 max-[360px]:text-[27px] text-[31px] leading-tight md:text-[46px] lg:text-[54px] lg:leading-tight font-medium lg:max-w-[90%]">
          I craft transformative learning journeys to empower developers
          worldwide.
          <Image
            src={headerUnderline}
            alt="Underline in the title"
            className="absolute -z-20 max-[360px]:w-48 w-52 md:w-72 lg:w-auto max-[360px]:top-6 max-[360px]:left-20 top-6 left-24 md:top-10 md:left-40 lg:top-11 lg:left-44"
          />
        </h1>
        <p className="text-base lg:text-lg text-gray-500 md:max-w-[50%] mt-4 md:mt-5 lg:mt-6">
          — A simple two line subtitle would be enough for this description.
          Anything works as long as it makes some sense.
        </p>
        <div className="flex gap-3 flex-col-reverse md:flex-row mt-7 md:mt-9 lg:mt-11">
          <Link
            href="#about"
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}
          >
            <ArrowDown /> Know more
          </Link>
          <Link
            href="mailto:kunalkushwaha@wemakedevs.org"
            className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
          >
            Get in touch
          </Link>
        </div>
        <Image
          src={headerImage}
          alt="Kunal Kushwaha"
          className="mt-10 lg:mt-16 min-h-64 object-cover rounded-md"
        />
      </ViewContainer>
    </header>
  );
};

export default Header;

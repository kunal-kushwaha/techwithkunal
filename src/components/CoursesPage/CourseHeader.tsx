import { cn } from '@/lib/utils';
import { CourseHeaderProps } from '@/types';
import { ViewContainer } from '../ui/view-container';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { buttonVariants } from '../ui/button';

const CourseHeader = ({
  className,
  title,
  description,
  introVideoEmbedLink,
  ...props
}: CourseHeaderProps) => {
  return (
    <header id="#" className={cn(className, 'py-12 lg:py-20')} {...props}>
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="max-[360px]:text-2xl text-[31px] leading-tight md:text-[40px] lg:text-[50px] lg:leading-tight font-semibold">
            {title}
          </h1>
          <p className="text-base lg:text-lg text-gray-500 md:max-w-[72%] mt-4 md:mt-5 lg:mt-6">
            {description}
          </p>
          <Link
            href="#resources"
            className={cn(
              buttonVariants({ variant: 'default', size: 'lg' }),
              'mt-6 md:mt-8'
            )}
          >
            Resources <ArrowDown />
          </Link>
        </div>
        <div>
          <iframe
            src={introVideoEmbedLink}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="aspect-video w-full"
          ></iframe>
        </div>
      </ViewContainer>
    </header>
  );
};

export default CourseHeader;

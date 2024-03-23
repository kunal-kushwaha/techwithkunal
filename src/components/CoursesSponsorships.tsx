import { cn } from '@/lib/utils';
import { CoursesSponsorshipsProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { buttonVariants } from './ui/button';

const CoursesSponsorships = ({
  className,
  ...props
}: CoursesSponsorshipsProps) => {
  return (
    <section className={cn(className, 'py-12 md:py-16 lg:py-20')} {...props}>
      <ViewContainer className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center">
          A course crafted for your product.
        </h2>
        <p className="w-full md:max-w-[80%] lg:max-w-[70%] text-gray-500 text-lg md:text-[20px] mt-3 md:mt-4 lg:mt-5 text-center">
          I partner with developer technologies and tech products to teach my
          developer audience about those technologies. Do you want a course
          created for your product? Let&apos;s partner.
        </p>
        <Link
          href="/#sponsorships"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-5 md:mt-8 lg:mt-10'
          )}
        >
          Explore sponsorships <ArrowUpRight />
        </Link>
      </ViewContainer>
    </section>
  );
};

export default CoursesSponsorships;

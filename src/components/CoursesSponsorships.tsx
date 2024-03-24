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
    <section
      className={cn(className, 'py-12 md:py-16 lg:py-20')}
      id="sponsorships"
      {...props}
    >
      <ViewContainer className="flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center">
          Elevate your product through tailored courses
        </h2>
        <p className="w-full md:max-w-[80%] lg:max-w-[70%] text-gray-500 text-lg md:text-[20px] mt-3 md:mt-4 lg:mt-5 text-center">
          Unlock the full potential of your product with tailored courses
          designed to empower developers and users alike. By partnering with me,
          you gain access to a dynamic platform where your product can be
          showcased, explored, and mastered by a vast audience of eager
          learners. Together, we can create impactful educational experiences
          that drive engagement, foster innovation, and solidify your
          brand&apos;s position as a leader in the industry.{' '}
        </p>
        <Link
          href="/#sponsorships"
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mt-5 md:mt-8 lg:mt-10'
          )}
          target="_blank"
          rel="noreferrer noopener"
        >
          Explore sponsorships <ArrowUpRight />
        </Link>
      </ViewContainer>
    </section>
  );
};

export default CoursesSponsorships;

import { cn } from '@/lib/utils';
import { CoursesProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import { Icon } from './ui/icon';
import { ArrowUpRight, Box, Star, Zap } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const Courses = ({ className, ...props }: CoursesProps) => {
  return (
    <section
      id="courses"
      className={cn(className, 'py-16 md:py-20 lg:py-24 bg-gray-50')}
      {...props}
    >
      <ViewContainer className="space-y-10 md:space-y-12 lg:space-y-16">
        <div className="text-center">
          <p className="text-primary-700 font-semibold text-sm md:text-base">
            Courses
          </p>
          <h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
            Teaching developers to upskill themselves.
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] lg:max-w-[60%] mx-auto">
            Concise, explanatory and trendy tech based courses to help you grow,
            upskill and get a job. Trusted by over 576K subscribers on YouTube.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 mt-10 md:mt-12 lg:mt-16">
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
            <Icon>
              <Star />
            </Icon>
            <div className="text-center space-y-1 md:space-y-2">
              <h3 className="text-lg md:text-[20px] font-medium">
                Top rated courses
              </h3>
              <p className="text-gray-500 text-base">
                Whether you are a beginner or a seasoned developer, my courses
                help everyone upskill according to industry trends.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
            <Icon>
              <Zap />
            </Icon>
            <div className="text-center space-y-1 md:space-y-2">
              <h3 className="text-lg md:text-[20px] font-medium">
                Keeping up with latest trends
              </h3>
              <p className="text-gray-500 text-base">
                I regularly host webinars and sessions talking about latest
                technological trends so that you can keep learning and growing!
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
            <Icon>
              <Box />
            </Icon>
            <div className="text-center space-y-1 md:space-y-2">
              <h3 className="text-lg md:text-[20px] font-medium">
                Some title here
              </h3>
              <p className="text-gray-500 text-base">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drilldown on the data in a couple
                clicks.
              </p>
            </div>
          </div>
        </div>
        <Link
          className={cn(
            buttonVariants({ variant: 'default', size: 'lg' }),
            'mx-auto flex md:w-fit'
          )}
          href="/courses"
        >
          Check out courses <ArrowUpRight />
        </Link>
      </ViewContainer>
    </section>
  );
};

export default Courses;

import { cn } from '@/lib/utils';
import { CourseResourcesProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { ArrowUpRight } from 'lucide-react';

const CourseResources = ({
  className,
  resources,
  ...props
}: CourseResourcesProps) => {
  return (
    <section
      id="resources"
      className={cn(className, 'py-10 md:py-12 lg:py-20')}
      {...props}
    >
      <ViewContainer className="">
        <h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3 text-center">
          Resources
        </h2>
        <p className="text-center text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
          Here are all the resources you need to excel in this course!
        </p>
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap mt-8 md:mt-10 lg:mt-12">
          {resources.map((resource, key) => (
            <Link
              href={resource.url}
              key={key}
              className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
            >
              {resource.title} <ArrowUpRight />
            </Link>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default CourseResources;

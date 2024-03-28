import { cn } from '@/lib/utils';
import { CourseResourcesProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import Link from 'next/link';
import { buttonVariants } from './ui/button';

const CourseResources = ({
  className,
  resources,
  ...props
}: CourseResourcesProps) => {
  return (
    <section
      id="resources"
      className={cn(className, 'pb-6 md:pb-8 lg:pb-10')}
      {...props}
    >
      <ViewContainer className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
        {resources.map((resource, key) => (
          <Link
            href={resource.url}
            key={key}
            className={cn(buttonVariants({ variant: 'default', size: 'lg' }))}
          >
            {resource.title}
          </Link>
        ))}
      </ViewContainer>
    </section>
  );
};

export default CourseResources;

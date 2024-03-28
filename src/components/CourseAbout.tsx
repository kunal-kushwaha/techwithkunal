import { cn } from '@/lib/utils';
import { CourseAboutProps } from '@/types';
import { ViewContainer } from './ui/view-container';

const CourseAbout = ({ className, about, ...props }: CourseAboutProps) => {
  return (
    <section
      id="about"
      className={cn(className, 'bg-gray-50 py-10 md:py-12 lg:py-20')}
      {...props}
    >
      <ViewContainer className="">
        <h2 className="text-3xl font-semibold">About the course</h2>
        <p className="w-full md:max-w-[70%] lg:max-w-[75%] text-sm md:text-base mt-8 md:mt-10 lg:mt-12">
          {about}
        </p>
      </ViewContainer>
    </section>
  );
};

export default CourseAbout;

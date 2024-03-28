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
        <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%]">
          {about}
        </p>
      </ViewContainer>
    </section>
  );
};

export default CourseAbout;

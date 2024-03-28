import { cn } from '@/lib/utils';
import { CourseSyllabusProps } from '@/types';
import { ViewContainer } from './ui/view-container';
import CourseSyllabusCard from './CourseSyllabusCard';

const CourseSyllabus = ({
  className,
  syllabus,
  ...props
}: CourseSyllabusProps) => {
  return (
    <section
      id="syllabus"
      className={cn(className, 'py-16 md:py-20 lg:py-24')}
      {...props}
    >
      <ViewContainer className="">
        <div className="text-center">
          <p className="text-primary-700 font-semibold text-sm md:text-base">
            Syllabus
          </p>
          <h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
            Detailed syllabus design meeting industry standard
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
            Here&apos;s a detailed overview of the course. Each topic is taught
            with great emphasis and precision to make sure you meet the industry
            standards.
          </p>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7 lg:gap-8">
          {syllabus.map((point, key) => (
            <CourseSyllabusCard syllabus={point} key={key} number={key + 1} />
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default CourseSyllabus;

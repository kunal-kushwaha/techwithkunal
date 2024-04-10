import { cn } from '@/lib/utils';
import { CourseSyllabusProps } from '@/types';
import { ViewContainer } from '../ui/view-container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
            Detailed syllabus design meeting industry standards
          </h2>
          <p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
            Here&apos;s a detailed overview of the course. Each topic is taught
            with great emphasis and precision to make sure you meet the industry
            standards.
          </p>
        </div>
        {syllabus && (
          <Accordion
            type="single"
            collapsible
            className="mt-8 md:mt-10 lg:mt-12 w-full md:max-w-[80%] lg:max-w-[75%] mx-auto"
          >
            {syllabus.map((point, key) => (
              <AccordionItem
                value={point.title}
                key={key}
                className="bg-gray-50 border-gray-500 px-5 md:px-8 hover:bg-gray-100"
              >
                <AccordionTrigger className="text-base md:text-lg font-medium hover:no-underline text-left">
                  {point.title}
                </AccordionTrigger>
                <AccordionContent>
                  {typeof point.points == 'string' ? (
                    <p>{point.points}</p>
                  ) : (
                    <ul className="list-disc list-inside space-y-1 mt-4 text-base">
                      {point.points.map((item, key) => (
                        <li key={key}>{item}</li>
                      ))}
                    </ul>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </ViewContainer>
    </section>
  );
};

export default CourseSyllabus;

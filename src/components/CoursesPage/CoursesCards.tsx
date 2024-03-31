import { COURSES } from '@/constants';
import { ViewContainer } from '../ui/view-container';
import { Card, CardCta, CardDescription, CardImage, CardTitle } from '../Card';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CoursesCardsProps } from '@/types';
import { cn } from '@/lib/utils';

const CoursesCards = ({ className, ...props }: CoursesCardsProps) => {
  return (
    <section
      id="courses"
      className={cn(className, 'py-12 md:py-16 lg:py-20')}
      {...props}
    >
      <ViewContainer className="">
        <h2 className="text-3xl font-semibold text-center">
          Empower your development journey
        </h2>
        <p className="mx-auto text-gray-500 text-lg md:text-[20px] mt-3 md:mt-4 lg:mt-5 text-center w-full md:max-w-[75%] lg:max-w-[70%]">
          Unlock your potential with expert-led courses designed to enhance your
          skills and propel your career forward.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-8 mt-8 md:mt-10 lg:mt-12">
          {COURSES.map((course, key) => (
            <Card key={key} className="bg-white">
              <CardImage src={course.image} alt={course.title} />
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
              <CardCta>
                <Link
                  href={
                    course.hasPage
                      ? `/courses/${course.slug}`
                      : course.link
                        ? course.link
                        : ''
                  }
                  className="flex gap-2 text-primary font-medium group w-fit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View course{' '}
                  <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardCta>
            </Card>
          ))}
        </div>
      </ViewContainer>
    </section>
  );
};

export default CoursesCards;

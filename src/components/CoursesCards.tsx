import { COURSES } from '@/constants';
import { ViewContainer } from './ui/view-container';
import { Card, CardCta, CardDescription, CardImage, CardTitle } from './Card';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CoursesCardsProps } from '@/types';
import { cn } from '@/lib/utils';

const CoursesCards = ({ className, ...props }: CoursesCardsProps) => {
  return (
    <section
      id="courses"
      className={cn(className, ' py-12 md:py-14 lg:py-16 ')}
      {...props}
    >
      <ViewContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 lg:gap-8">
        {COURSES.map((course, key) => (
          <Card key={key}>
            <CardImage src={course.image} alt={course.title} />
            <CardTitle>{course.title}</CardTitle>
            <CardDescription>{course.description}</CardDescription>
            <CardCta>
              <Link
                href={`/courses/${course.slug}`}
                className="flex gap-2 text-primary font-medium group w-fit"
              >
                View course{' '}
                <ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardCta>
          </Card>
        ))}
      </ViewContainer>
    </section>
  );
};

export default CoursesCards;

import CoursesCards from '@/components/CoursesCards';
import {
  Header,
  HeaderCta,
  HeaderDescription,
  HeaderTitle,
} from '@/components/Header';
import SocialProof from '@/components/SocialProof';
import FAQs from '@/components/FQAs';
import { buttonVariants } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { COURSES_FAQS, TESTIMONIALS_COURSES } from '@/constants';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

const Courses = () => {
  return (
    <div>
      <Header className="bg-gray-50">
        <HeaderTitle>Courses to empower budding developers</HeaderTitle>
        <HeaderDescription>
          — A simple two line subtitle would be enough for this description.
          Anything works as long as it makes some sense.
        </HeaderDescription>
        <HeaderCta>
          <Link
            href="#courses"
            className={buttonVariants({ variant: 'default', size: 'lg' })}
          >
            Check out courses <ArrowDown />
          </Link>
        </HeaderCta>
      </Header>
      <CoursesCards />
      <SocialProof />
      <FAQs
        title="Frequently asked questions"
        description="Everything you need to know about the courses and resources."
        items={COURSES_FAQS}
      />
      <Testimonials testimonials={TESTIMONIALS_COURSES} />
      <Newsletter />
    </div>
  );
};

export default Courses;

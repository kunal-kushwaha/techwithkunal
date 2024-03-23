import CoursesCards from '@/components/CoursesCards';
import SocialProof from '@/components/SocialProof';
import FAQs from '@/components/FQAs';
import { COURSES_FAQS, TESTIMONIALS_COURSES } from '@/constants';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import CoursesSponsorships from '@/components/CoursesSponsorships';

const Courses = () => {
  return (
    <div>
      <Testimonials testimonials={TESTIMONIALS_COURSES} />
      <SocialProof />
      <CoursesCards />
      <FAQs
        title="Frequently asked questions"
        description="Everything you need to know about the courses and resources."
        items={COURSES_FAQS}
      />
      <CoursesSponsorships />
      <Newsletter />
    </div>
  );
};

export default Courses;

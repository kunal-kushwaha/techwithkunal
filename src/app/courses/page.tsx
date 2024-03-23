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
      <Testimonials
        title="Courses that inspire"
        description="My courses have been viewed by 350K+ developers on YouTube and have recieved over 20K+ reviews. I make courses not to teach, but to inspire."
        testimonials={TESTIMONIALS_COURSES}
      />
      <SocialProof />
      <CoursesCards className="bg-gray-50" />
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

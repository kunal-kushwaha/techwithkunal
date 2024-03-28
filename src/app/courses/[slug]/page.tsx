import CourseHeader from '@/components/CourseHeader';
import { COURSES } from '@/constants';

const CoursePage = ({ params }: { params: { slug: string } }) => {
  const course = COURSES.find((course) => course.slug == params.slug);

  if (!course) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          No such course
        </div>
      </>
    );
  }

  return (
    <div>
      <CourseHeader
        title={course.title}
        introVideoLink={course.link}
        description={course.description}
      />
    </div>
  );
};

export default CoursePage;

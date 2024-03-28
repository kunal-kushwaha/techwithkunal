import CourseAbout from '@/components/CourseAbout';
import CourseHeader from '@/components/CourseHeader';
import CourseResources from '@/components/CourseResources';
import CourseSyllabus from '@/components/CourseSyllabus';
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
      <CourseResources resources={course.resources} />
      <CourseAbout about={course.about} />
      <CourseSyllabus syllabus={course.syllabus} />
    </div>
  );
};

export default CoursePage;

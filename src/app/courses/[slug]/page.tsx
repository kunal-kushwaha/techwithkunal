import CourseAbout from '@/components/CourseAbout';
import CourseHeader from '@/components/CourseHeader';
import CourseRegister from '@/components/CourseRegister';
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
        introVideoEmbedLink={course.introVideoEmbedLink}
        description={course.description}
      />
      <CourseAbout about={course.about} />
      <CourseResources resources={course.resources} />
      <CourseSyllabus syllabus={course.syllabus} />
      <CourseRegister slug={course.slug} />
    </div>
  );
};

export default CoursePage;

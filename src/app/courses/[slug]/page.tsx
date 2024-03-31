import { CourseAbout } from '@/components/CoursesPage';
import { CourseHeader } from '@/components/CoursesPage';
import { CourseRegister } from '@/components/CoursesPage';
import { CourseResources } from '@/components/CoursesPage';
import { CourseSyllabus } from '@/components/CoursesPage';
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

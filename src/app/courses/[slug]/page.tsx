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

  return <div>{course.title}</div>;
};

export default CoursePage;

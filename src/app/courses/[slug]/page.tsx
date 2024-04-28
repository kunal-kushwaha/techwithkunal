import { CourseAbout } from '@/components/CoursesPage';
import { CourseHeader } from '@/components/CoursesPage';
import { CourseRegister } from '@/components/CoursesPage';
import { CourseResources } from '@/components/CoursesPage';
import { CourseSyllabus } from '@/components/CoursesPage';
import { COURSES } from '@/constants';
import Script from 'next/script';

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
      {params.slug == 'genai-rag-singlestore' && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=AW-995442209"
          ></Script>
          <Script id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-995442209');
            `}
          </Script>
        </>
      )}
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

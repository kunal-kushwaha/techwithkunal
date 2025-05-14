import { CoursesCards } from "@/components/CoursesPage";
import { CoursesSponsorships } from "@/components/CoursesPage";
import FAQs from "@/components/FQAs";
import Newsletter from "@/components/Newsletter";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import { COURSES_FAQS, TESTIMONIALS_COURSES } from "@/constants";

const Courses = () => {
	return (
		<div>
			<Testimonials
				title="Educating thousands, one course at a time"
				description="Experience the transformative power of my courses, meticulously crafted to provide hands-on learning and propel you towards your professional aspirations. Join thousands of successful learners who have achieved their goals through my proven curriculum."
				testimonials={TESTIMONIALS_COURSES}
			/>
			<SocialProof />
			<CoursesCards className="bg-gray-50" />
			<FAQs
				title="Frequently asked questions"
				description="Find solutions to common queries"
				items={COURSES_FAQS}
			/>
			<CoursesSponsorships />
			<Newsletter />
		</div>
	);
};

export default Courses;

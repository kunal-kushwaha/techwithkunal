import { cn } from "@/lib/utils";
import type { CourseAboutProps } from "@/types";
import { ViewContainer } from "../ui/view-container";

const CourseAbout = ({ className, about, ...props }: CourseAboutProps) => {
	return (
		<section
			id="about"
			className={cn(className, "bg-gray-50 py-10 md:py-12 lg:py-20")}
			{...props}
		>
			<ViewContainer className="">
				<div className="text-center">
					<p className="text-primary-700 font-semibold text-sm md:text-base">
						About
					</p>
					<h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
						What you will learn
					</h2>
					<p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
						{about}
					</p>
				</div>
			</ViewContainer>
		</section>
	);
};

export default CourseAbout;

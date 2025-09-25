import { cn } from "@/lib/utils";
import type { CoruseRegisterProps } from "@/types";
import { ViewContainer } from "../ui/view-container";

const CourseRegister = ({
	className,
	title,
	...props
}: CoruseRegisterProps) => {
	return (
		<section
			id="register"
			className={cn("py-16 bg-gray-50", className)}
			{...props}
		>
			<ViewContainer>
				<div className="text-center">
					<p className="text-primary-700 font-semibold text-sm md:text-base">
						Register
					</p>
					<h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
						{title ?? "Enrol for free to never miss an update!"}
					</h2>
				</div>
				<div className="flex justify-center items-center py-4">
					<iframe
						src={
							"https://techwithkunal-register.vercel.app/main.html"
						}
						width="100%"
						scrolling="no"
						className="border-none overflow-hidden"
						height={400}
						title="Register in the course now!"
					/>
				</div>
			</ViewContainer>
		</section>
	);
};

export default CourseRegister;

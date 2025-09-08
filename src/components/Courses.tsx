import { CourseRegister } from "@/components/CoursesPage";
import { cn } from "@/lib/utils";
import type { CoursesProps } from "@/types";
import { ArrowUpRight, Box, Star, Zap } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Icon } from "./ui/icon";
import { ViewContainer } from "./ui/view-container";

const Courses = ({ className, ...props }: CoursesProps) => {
	return (
		<>
			<section
				id="courses"
				className={cn(className, "py-16 md:py-20 lg:py-24 bg-gray-50")}
				{...props}
			>
				<ViewContainer className="space-y-10 md:space-y-12 lg:space-y-16">
					<div className="text-center">
						<p className="text-primary-700 font-semibold text-sm md:text-base">
							Courses
						</p>
						<h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
							Teaching developers to upskill themselves.
						</h2>
						<p className="text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
							Join me as we break down the essentials of AI,
							DevOps, and modern development tools. Whether you're
							just starting out or looking to level up, these
							courses are built to help you navigate real-world
							tech challenges with confidence.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-14 mt-10 md:mt-12 lg:mt-16">
						<div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
							<Icon>
								<Star />
							</Icon>
							<div className="text-center space-y-1 md:space-y-2">
								<h3 className="text-lg md:text-[20px] font-medium">
									Widely acclaimed courses
								</h3>
								<p className="text-gray-500 text-base">
									Join thousands who have benefitted from my
									courses, backed by thousands of positive
									reviews.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
							<Icon>
								<Zap />
							</Icon>
							<div className="text-center space-y-1 md:space-y-2">
								<h3 className="text-lg md:text-[20px] font-medium">
									Latest tech trends webinars
								</h3>
								<p className="text-gray-500 text-base">
									Regular webinars and sessions to keep you
									updated with the latest technological
									advancements.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-5">
							<Icon>
								<Box />
							</Icon>
							<div className="text-center space-y-1 md:space-y-2">
								<h3 className="text-lg md:text-[20px] font-medium">
									Free access to knowledge
								</h3>
								<p className="text-gray-500 text-base">
									All courses are completely free to watch,
									making quality education accessible to
									everyone.
								</p>
							</div>
						</div>
					</div>
					<Link
						className={cn(
							buttonVariants({ variant: "default", size: "lg" }),
							"mx-auto flex md:w-fit",
						)}
						href="/courses"
						target="_blank"
						rel="noopener noreferrer"
					>
						Explore courses <ArrowUpRight />
					</Link>
				</ViewContainer>
			</section>
			<CourseRegister
				title="Stay updated about my courses"
				className="py-10 md:py-10 lg:py-10"
			/>
		</>
	);
};

export default Courses;

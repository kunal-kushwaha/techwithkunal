import { cn } from "@/lib/utils";
import type { AboutProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const About = ({ className, ...props }: AboutProps) => {
	return (
		<section
			id="about"
			className={cn(className, "pt-10 lg:pt-0 pb-20")}
			{...props}
		>
			<ViewContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10">
				<div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
					<h3 className="text-lg md:text-[20px] font-medium">
						Educator and mentor
					</h3>
					<p className="text-gray-500 text-base mt-2">
						Has educated thousands of developers, sharing in-depth
						knowledge and expertise in tech.
					</p>
				</div>
				<div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
					<h3 className="text-lg md:text-[20px] font-medium">
						Cloud consultant
					</h3>
					<p className="text-gray-500 text-base mt-2">
						Provides insightful consultancy to companies embarking
						on their cloud journeys.
					</p>
				</div>
				<div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
					<h3 className="text-lg md:text-[20px] font-medium">
						Community leader &{" "}
						<Link
							href="https://www.credly.com/users/kunalkushwaha/badges"
							className="group underline hover:no-underline inline-flex gap-2 items-center"
							target="_blank"
							rel="noreferrer noopener"
						>
							keynote speaker{" "}
							<ArrowUpRight className="group-hover:translate-x-1 transition-transform" />
						</Link>
					</h3>
					<p className="text-gray-500 text-base mt-2">
						Renowned for exceptional community leadership and
						engaging as a speaker at global tech conferences.
					</p>
				</div>
				<div className="px-14 py-10 border-2 border-gray-100 bg-gray-50 rounded-xl">
					<h3 className="text-lg md:text-[20px] font-medium">
						Empathy and professionalism
					</h3>
					<p className="text-gray-500 text-base mt-2">
						Known for a unique blend of empathetic understanding and
						professional acumen in his approach to work and life.
					</p>
				</div>
			</ViewContainer>
		</section>
	);
};

export default About;

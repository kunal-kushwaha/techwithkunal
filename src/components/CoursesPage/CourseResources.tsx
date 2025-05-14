import { cn } from "@/lib/utils";
import type { CourseResourcesProps } from "@/types";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ViewContainer } from "../ui/view-container";

const CourseResources = ({
	className,
	resources,
	...props
}: CourseResourcesProps) => {
	return (
		<section
			id="resources"
			className={cn(
				className,
				"pt-10 md:pt-12 lg:pt-20 pb-6 md:pb-10 lg:pb-14",
			)}
			{...props}
		>
			<ViewContainer className="">
				<h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3 text-center">
					Resources
				</h2>
				<p className="text-center text-gray-500 text-lg md:text-[20px] mt-3 md:mt-5 max-w-full md:max-w-[75%] mx-auto">
					Here are all the resources you need to excel in this course!
				</p>
				<ul className="text-lg md:text-[20px] space-y-4 md:space-y-6 lg:space-y-8 mt-8 md:mt-10 lg:mt-12 list-disc list-inside w-full md:max-w-[75%] mx-auto">
					{resources.map((resource, key) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<li key={key}>
							<Link
								href={resource.url}
								className="text-primary font-semibold hover:text-primary-800 transition-color group"
								target="_blank"
								rel="noreferrer noopener"
							>
								{resource.title}{" "}
								<ArrowUpRight
									className="inline group-hover:-translate-y-0.5 transition-transform"
									size={22}
									strokeWidth={2}
								/>
							</Link>
							{resource.description && (
								<>: &nbsp;&nbsp;{resource.description}</>
							)}
						</li>
					))}
				</ul>
			</ViewContainer>
		</section>
	);
};

export default CourseResources;

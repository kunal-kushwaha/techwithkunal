"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { CoruseRegisterProps } from "@/types";
import { ViewContainer } from "../ui/view-container";

const CourseRegister = ({ className, slug, ...props }: CoruseRegisterProps) => {
	const [iFrameHeight, setIFrameHeight] = useState(650);

	useEffect(() => {
		const windowWidth = window.innerWidth;

		if (windowWidth < 350) {
			setIFrameHeight(1000);
		} else if (windowWidth < 400) {
			setIFrameHeight(900);
		} else if (windowWidth < 500) {
			setIFrameHeight(800);
		} else {
			setIFrameHeight(700);
		}
	}, []);

	return (
		<section
			id="register"
			className={cn(className, "py-16 md:py-20 lg:py-24 bg-gray-50")}
			{...props}
		>
			<ViewContainer>
				<div className="text-center">
					<p className="text-primary-700 font-semibold text-sm md:text-base">
						Register
					</p>
					<h2 className="text-3xl font-semibold mt-1 md:mt-2 lg:mt-3">
						Enrol for free to never miss an update!
					</h2>
				</div>
				<div className="flex justify-center items-center py-8 md:py-9 lg:py-10">
					<iframe
						src={`https://techwithkunal-register.vercel.app/${slug}.html`}
						width="100%"
						scrolling="no"
						className="border-none overflow-hidden"
						height={iFrameHeight}
						title="Register in the course now!"
					/>
				</div>
			</ViewContainer>
		</section>
	);
};

export default CourseRegister;

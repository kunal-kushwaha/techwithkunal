"use client";

import { cn } from "@/lib/utils";
import type { NewsletterProps } from "@/types";
import { ViewContainer } from "./ui/view-container";

const Newsletter = ({ className, ...props }: NewsletterProps) => {
	return (
		<section
			id="newsletter"
			className={cn(
				className,
				"py-10 md:py-16 lg:py-20 before:w-full before:h-1/2 relative z-0 bg-accent before:-z-10 before:absolute before:bottom-0 before:left-0 before:bg-gray-800",
			)}
			{...props}
		>
			<ViewContainer className="p-10 md:p-12 lg:p-16 bg-white shadow-xl rounded-lg">
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<div className="flex-1 w-full">
						<h2 className="text-2xl md:text-[28px] font-semibold">
							Join the newsletter
						</h2>
						<p className="text-gray-500 text-lg md:text-[20px] mt-2 md:mt-3">
							Get the latest insights and updates straight to your
							inbox.
						</p>
					</div>
					<div className="flex-1 w-full">
						<iframe
							src="https://techwithkunal.substack.com/embed"
							width="100%"
							style={{ background: "white" }}
							frameBorder="0"
							scrolling="no"
							title="Newsletter subscription form"
						/>
					</div>
				</div>
			</ViewContainer>
		</section>
	);
};

export default Newsletter;

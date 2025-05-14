import { logoTypeLight } from "@/assets";
import { FOOTER_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import type { FooterProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer
			className={cn(
				className,
				"pt-10 md:pt-12 lg:pt-14 pb-6 md:pb-8 lg:pb-10 bg-gray-800 text-gray-200",
			)}
			{...props}
		>
			<ViewContainer className="">
				<div className="flex justify-between items-start gap-20 md:10 flex-col md:flex-row">
					<div className="">
						<Image
							src={logoTypeLight}
							alt="Kunal Kushwaha"
							className="w-40 md:48 lg:w-52"
						/>
						<Link
							href="mailto:contact@techwithkunal.com"
							className="text-gray-400 mt-4 block"
						>
							contact@techwithkunal.com
						</Link>
					</div>
					<div className="grid gap-5 grid-cols-2 md:grid-cols-3 w-full md:w-[70%] lg:w-[60%]">
						{FOOTER_LINKS.map((section, key) => (
							// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
							<div key={key} className="space-y-4">
								<h3 className="text-gray-400 font-semibold text-sm">
									{section.name}
								</h3>
								<ul className="space-y-3">
									{section.links.map((link, key) => (
										<li
											// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
											key={key}
											className="font-medium text-base"
										>
											<Link
												href={link.url}
												className="relative z-0 before:absolute before:z-10 before:w-full before:h-[1px] before:bg-gray-200 before:bottom-0 before:left-0 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:origin-left"
												target={
													link.openInNewPage
														? "_blank"
														: ""
												}
												rel={
													link.openInNewPage
														? "noreferrer noopener"
														: ""
												}
											>
												{link.name}
											</Link>
											{link.isNew && (
												<p className="inline-block rounded-full py-0.5 px-2 border border-white/30 bg-white/20 text-white text-xs font-medium ml-2">
													New
												</p>
											)}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
				<div className="border-t border-gray-600 pt-8 mt-12">
					<p className="text-gray-400 text-center">
						© 2024 Kunal Kushwaha. All rights reserved.
					</p>
				</div>
			</ViewContainer>
		</footer>
	);
};

export default Footer;

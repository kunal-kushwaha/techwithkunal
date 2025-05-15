import { cn } from "@/lib/utils";
import type {
	HeaderCtaProps,
	HeaderDescriptionProps,
	HeaderImageProps,
	HeaderProps,
	HeaderTitleProps,
} from "@/types";
import Image from "next/image";
import { ViewContainer } from "./ui/view-container";

const Header = ({ className, children, ...props }: HeaderProps) => {
	return (
		<header className={cn(className, "py-6 md:py-12 lg:py-20")} {...props}>
			<ViewContainer className="relative lg:pr-[450px]">
				<div className="lg:min-h-[400px] flex flex-col lg:block">
					{children}
				</div>
			</ViewContainer>
		</header>
	);
};

const HeaderTitle = ({ className, children, ...props }: HeaderTitleProps) => {
	return (
		<h1
			className={cn(
				className,
				"max-[360px]:text-[27px] text-[31px] leading-tight md:text-[46px] lg:text-[54px] xl:text-[60px] lg:leading-tight font-semibold tracking-tight lg:max-w-[650px]",
			)}
			{...props}
		>
			{children}
		</h1>
	);
};

const HeaderDescription = ({
	className,
	children,
	...props
}: HeaderDescriptionProps) => {
	return (
		<p
			className={cn(
				className,
				"text-base lg:text-lg text-gray-500 mt-4 md:mt-5 lg:mt-6",
			)}
			{...props}
		>
			{children}
		</p>
	);
};

const HeaderCta = ({ className, children, ...props }: HeaderCtaProps) => {
	return (
		<div
			className={cn(
				className,
				"flex gap-3 flex-col-reverse md:flex-row mt-7 md:mt-9 lg:mt-11",
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const HeaderImage = ({ className, src, alt, ...props }: HeaderImageProps) => {
	return (
		<Image
			src={src}
			alt={alt}
			width={500}
			height={500}
			className={cn(
				className,
				"mt-6 lg:mt-0 mb-8 lg:mb-0 rounded-full object-cover aspect-square w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] mx-auto lg:mx-0 lg:absolute lg:right-0 lg:top-0 shadow-2xl shadow-black/10 hover:shadow-3xl hover:shadow-black/20 transition-shadow duration-300 order-first lg:order-none",
			)}
			{...props}
		/>
	);
};

export { Header, HeaderTitle, HeaderDescription, HeaderCta, HeaderImage };

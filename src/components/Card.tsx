import { cn } from "@/lib/utils";
import type {
	CardCtaProps,
	CardDescriptionProps,
	CardImageProps,
	CardProps,
	CardTitleProps,
} from "@/types";
import Image from "next/image";

const Card = ({ className, children, ...props }: CardProps) => {
	return (
		<div
			className={cn(
				className,
				"rounded-lg border border-gray-200 overflow-clip",
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const CardTitle = ({ className, children, ...props }: CardTitleProps) => {
	return (
		<h2
			className={cn(
				className,
				"text-xl md:text-[22px] lg:text-2xl font-semibold px-4 md:px-5 lg:px-6 mt-6 md:mt-7 lg:mt-8",
			)}
			{...props}
		>
			{children}
		</h2>
	);
};

const CardDescription = ({
	className,
	children,
	...props
}: CardDescriptionProps) => {
	return (
		<p
			className={cn(
				className,
				"text-sm md:text-base text-gray-500 px-4 md:px-5 lg:px-6 mt-2 md:mt-3",
			)}
			{...props}
		>
			{children}
		</p>
	);
};

const CardImage = ({ className, src, alt, ...props }: CardImageProps) => {
	return (
		<Image
			src={src}
			alt={alt}
			{...props}
			className={cn(className, "aspect-video w-full")}
		/>
	);
};

const CardCta = ({ className, children, ...props }: CardCtaProps) => {
	return (
		<div
			className={cn(
				className,
				"px-4 md:px-5 lg:px-6 mt-10 md:mt-12 lg:mt-14 my-6 md:my-7 lg:my-8",
			)}
			{...props}
		>
			{children}
		</div>
	);
};

export { Card, CardTitle, CardDescription, CardImage, CardCta };

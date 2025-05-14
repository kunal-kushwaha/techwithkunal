"use client";
import { usePathname } from "next/navigation";
import { type Dispatch, type SetStateAction, useState } from "react";

import { logoType } from "@/assets";
import { NAV_LINKS, NAV_LINKS_COURSE, NAV_LINKS_COURSES } from "@/constants";
import { cn } from "@/lib/utils";
import type { NavLinksType, NavbarProps } from "@/types";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ViewContainer } from "./ui/view-container";

const NavLinks = ({
	navLinks,
	isOpen,
	setIsOpen,
}: {
	navLinks: NavLinksType;
	isOpen: boolean;
	setIsOpen: Dispatch<SetStateAction<boolean>>;
}) => (
	<ul
		className={cn(
			"flex flex-col md:flex-row gap-1.5 justify-center items-center transition-[left] absolute md:static w-screen md:w-auto nav-h-mobile md:h-auto top-20",
			"bg-background transition-[left] ease-in-out duration-300 px-5 md:px-0",
			isOpen && "left-0",
			!isOpen && "left-full",
		)}
	>
		{navLinks.links.map((link, key) => (
			// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
			<li key={key} className="w-full md:w-auto">
				<Link
					href={link.url}
					className={cn(
						buttonVariants({ variant: "ghost", size: "default" }),
						"w-full md:w-auto",
					)}
					onClick={() => {
						setIsOpen(prev => !prev);
					}}
					target={link.openInNewPage ? "_blank" : ""}
					rel={link.openInNewPage ? "noreferrer noopener" : ""}
				>
					{link.name}
				</Link>
			</li>
		))}
		{navLinks.cta && (
			<li className="w-full md:w-auto">
				<Link
					href={navLinks.cta.url}
					className={cn(
						buttonVariants({ variant: "default", size: "default" }),
						"w-full md:w-auto",
					)}
				>
					{navLinks.cta.name}
				</Link>
			</li>
		)}
	</ul>
);

const Navbar = ({ className, ...props }: NavbarProps) => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav
			className={cn(
				className,
				"border-b bg-background",
				"sticky top-0 left-0 z-50",
			)}
			{...props}
		>
			<ViewContainer className="flex justify-between items-center h-20 relative overflow-x-clip">
				<Link href="/">
					<Image
						src={logoType}
						alt="Kunal Kushwaha"
						className="w-40 md:w-48 lg:w-52"
					/>
				</Link>
				<Button
					variant="outline"
					size="icon"
					onClick={() => {
						setIsOpen(prev => !prev);
					}}
					className="md:hidden"
					aria-label="Toggle menu button"
				>
					{isOpen ? <Cross2Icon /> : <HamburgerMenuIcon />}
				</Button>
				{pathname === "/courses" ? (
					<NavLinks
						navLinks={NAV_LINKS_COURSES}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				) : /^\/courses\/.*/.test(pathname) ? (
					<NavLinks
						navLinks={NAV_LINKS_COURSE}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				) : (
					<NavLinks
						navLinks={NAV_LINKS}
						isOpen={isOpen}
						setIsOpen={setIsOpen}
					/>
				)}
			</ViewContainer>
		</nav>
	);
};

export default Navbar;

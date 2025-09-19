import { header, headerUnderline } from "@/assets";
import About from "@/components/About";
import Courses from "@/components/Courses";
import {
	Header,
	HeaderCta,
	HeaderDescription,
	HeaderImage,
	HeaderTitle,
} from "@/components/Header";
import Newsletter from "@/components/Newsletter";
import Partners from "@/components/Partners";
import Sponsorships from "@/components/Sponsorships";
// import Testimonials from '@/components/Testimonials';
import { buttonVariants } from "@/components/ui/button";
// import { TESTIMONIALS_HOME } from '@/constants';
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div>
			<Header>
				<HeaderTitle>
					Teaching millions how to{" "}
					<span className="relative inline-block">
						code
						{/* <Image
							src={headerUnderline}
							alt="Header underline"
							className="absolute -bottom-1 md:-bottom-2 lg:-bottom-3 left-0 w-full"
						/> */}
					</span>{" "}
					and helping businesses{" "}
					<span className="relative inline-block">
						scale
						{/* <Image
							src={headerUnderline}
							alt="Header underline"
							className="absolute -bottom-1 md:-bottom-2 lg:-bottom-3 left-0 w-full scale-x-[-1] opacity-80"
						/> */}
					</span>
					.
				</HeaderTitle>
				<HeaderDescription>
					Kunal Kushwaha is a Senior Developer Advocate at{" "}
					<Link
						href="https://cast.ai/"
						className="underline hover:no-underline"
						target="_blank"
						rel="noreferrer noopener"
					>
						CAST AI
					</Link>
					, where he leads developer relations in the EMEA region,
					focusing on cloud-native technologies and AI, helping
					companies modernize their infrastructure and adopt
					innovative solutions. He is also the founder of{" "}
					<Link
						href="https://www.wemakedevs.org"
						className="underline hover:no-underline"
						target="_blank"
						rel="noreferrer noopener"
					>
						WeMakeDevs
					</Link>
					, a community initiative where he mentors individuals in
					tech. His educational content on{" "}
					<Link
						href="https://www.youtube.com/@KunalKushwaha"
						className="underline hover:no-underline"
						target="_blank"
						rel="noreferrer noopener"
					>
						YouTube
					</Link>{" "}
					has been watched by millions. A passionate advocate for open
					source, Kunal regularly speaks at industry conferences on
					cloud, AI, and developer growth.
				</HeaderDescription>
				<HeaderCta>
					<Link
						href="#about"
						className={cn(
							buttonVariants({ variant: "outline", size: "lg" }),
						)}
					>
						<ArrowDown /> Know more
					</Link>
					<Link
						href="mailto:contact@techwithkunal.com"
						className={cn(
							buttonVariants({ variant: "default", size: "lg" }),
						)}
					>
						Get in touch
					</Link>
				</HeaderCta>
				<HeaderImage src={header} alt="Kunal Kushwaha" />
			</Header>
			<About />
			<Courses />
			<Sponsorships />
			<Partners />
			{/* <Testimonials testimonials={TESTIMONIALS_HOME} /> */}
			<Newsletter />
		</div>
	);
}

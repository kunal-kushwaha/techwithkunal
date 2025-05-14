import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
// import { ThemeProvider } from '@/components/theme-provider';
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "sonner";

const fontSans = Inter({ subsets: ["latin"], variable: "--font-sans" });
const fontSerif = Source_Serif_4({
	subsets: ["latin"],
	style: ["italic", "normal"],
	variable: "--font-serif",
});

export const metadata: Metadata = {
	title: "Kunal Kushwaha",
	description:
		"Kunal is DevRel manager at Civo, CNCF Ambassador and a GitHub star.",
	metadataBase: new URL("https://techwithkunal.com"),
	openGraph: {
		title: "Kunal Kushwaha",
		description:
			"Kunal is DevRel manager at Civo, CNCF Ambassador and a GitHub star.",
		url: "https://techwithkunal.com",
		siteName: "Kunal Kushwaha",
		images: {
			url: "/opengraph-image.png",
			width: 1920,
			height: 960,
			alt: "Driving Innovation, Educating Minds, and Strengthening Developer Relations",
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth scroll-py-20">
			<body
				className={cn(
					"font-sans antialiased",
					fontSans.variable,
					fontSerif.variable,
				)}
			>
				{
					//<ThemeProvider               Keep it here for future use
					// attribute="class"
					// defaultTheme="light"
					// enableSystem
					// disableTransitionOnChange
					//>
				}
				<Navbar />
				{children}
				<Footer />
				{
					//</ThemeProvider>
				}
				<Toaster richColors />
				<Analytics />
			</body>
		</html>
	);
}

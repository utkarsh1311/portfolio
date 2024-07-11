import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Utkarsh Maurya",
	description: "Home page for Utkarsh Maurya portfolio website",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/gif" />
				<meta
					name="google-site-verification"
					content="T1wRFIfvEePSaYspISPTOf8EeR05JF2XjtRT7ilL-DQ"
				/>
				{/* <!-- Primary Meta Tags --> */}
				<title>Utkarsh Maurya </title>
				<meta name="title" content="Utkarsh Maurya " />
				<meta
					name="description"
					content="I'm a full-stack developer who thrives on crafting seamless websites. Coding isn't just a job—it's my creative outlet to bring ideas to life, from frontend to backend.

Beyond the screen, I find joy in animated worlds, indulging my passion for animes during leisure hours.

In my downtime, you'll catch me immersed in a good book. Reading is my cherished pastime, allowing me to unwind, broaden my perspectives, and explore worlds beyond the lines of code."
				/>

				{/* <!-- Open Graph / Facebook --> */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://metatags.io/" />
				<meta property="og:title" content="Utkarsh Maurya " />
				<meta
					property="og:description"
					content="I'm a full-stack developer who thrives on crafting seamless websites. Coding isn't just a job—it's my creative outlet to bring ideas to life, from frontend to backend.

Beyond the screen, I find joy in animated worlds, indulging my passion for animes during leisure hours.

In my downtime, you'll catch me immersed in a good book. Reading is my cherished pastime, allowing me to unwind, broaden my perspectives, and explore worlds beyond the lines of code."
				/>
				<meta
					property="og:image"
					content="https://drive.google.com/file/d/1p6We5YKoasCQqeJiZjFZAAF9DY_tBbkN/view?usp=sharing"
				/>

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://metatags.io/" />
				<meta property="twitter:title" content="Utkarsh Maurya " />
				<meta
					property="twitter:description"
					content="I'm a full-stack developer who thrives on crafting seamless websites. Coding isn't just a job—it's my creative outlet to bring ideas to life, from frontend to backend.

Beyond the screen, I find joy in animated worlds, indulging my passion for animes during leisure hours.

In my downtime, you'll catch me immersed in a good book. Reading is my cherished pastime, allowing me to unwind, broaden my perspectives, and explore worlds beyond the lines of code."
				/>
				<meta
					property="twitter:image"
					content="https://drive.google.com/file/d/1p6We5YKoasCQqeJiZjFZAAF9DY_tBbkN/view?usp=sharing"
				/>
			</head>
			<body className={`${poppins.className} bg-primary dark:bg-dark-primary`}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}

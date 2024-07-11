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
				<meta name="google-site-verification" content="T1wRFIfvEePSaYspISPTOf8EeR05JF2XjtRT7ilL-DQ" />
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

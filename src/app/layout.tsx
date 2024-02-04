import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
				<link rel="shortcut icon" href="db.ico" type="image/gif" />
			</head>
			<body className={`${poppins.className} bg-primary dark:bg-dark-primary`}>
				<Providers>
					<Navbar />
					{children}
				</Providers>
				<SpeedInsights />
			</body>
		</html>
	);
}

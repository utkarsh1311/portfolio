import type { Metadata } from "next";
import { Inter, Poppins, Patua_One } from "next/font/google";

import "./globals.css";

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
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="favicon.ico" type="image/gif" />
			</head>
			<body className={poppins.className}>{children}</body>
		</html>
	);
}

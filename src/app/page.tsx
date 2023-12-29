"use client";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center overflow-y-scroll scrollbar-hide snap-y snap-mandatory h-screen">
			<div className="">
				<Navbar />
			</div>
			<div className="w-3/4 snap-center">
				<Hero />
			</div>
			<div className="w-3/4 snap-center ">
				<AboutMe />
			</div>
		</div>
	);
}

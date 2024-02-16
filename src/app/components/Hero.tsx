import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";
import pattern from "../../../public/download.png"


const Hero = () => {
	return (
		<div style={{ background: `url(${pattern.src})`, objectFit: "contain"}} className="h-screen ">
			<div className="flex flex-col justify-center items-center h-full gap-4 ">
				<Fade direction="up" triggerOnce cascade damping={0.4}>
					<h1 className=" text-8xl font-bold text-gray-900 mb-4 text-center sm:text-6xl dark:text-dark-primary">
						Utkarsh Maurya
					</h1>
					<p className="text-center text-gray-500 w-1/2 mx-auto md:w-full dark:text-dark-secondary">
						A full stack developer, who loves all things web and anime.
					</p>
					<div className="flex gap-2 sm:flex-col ">
						<a href="mailto:itsutkarsh123@gmail.com">
							<button className="bg-black py-2 px-8 rounded text-white dark:dark-filter">
								Get in touch
							</button>
						</a>
						<a href="/resume.pdf" target="blank">
							<button className="bg-black py-2 px-12 rounded text-white dark:dark-filter">
								Resume
							</button>
						</a>
					</div>
				</Fade>
				<Image
					src="/arrow-down.svg"
					width={50}
					height={50}
					alt="arrow"
					className="relative  animate-bounce -bottom-48 sm:-bottom-36 dark:dark-filter"
				/>
			</div>
		</div>
	);
};

export default Hero;

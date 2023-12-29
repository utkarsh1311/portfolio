import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
	return (
		<div className="h-screen">
			<div className="flex flex-col justify-center items-center h-full gap-4">
				<Fade direction="up" triggerOnce cascade damping={0.4}>
					<h1 className=" text-8xl font-bold text-gray-900 mb-4 text-center sm:text-6xl">
						Utkarsh Maurya
					</h1>
					<p className="text-center text-gray-500 w-1/2 mx-auto">
						A full stack developer, who loves all things web and anime.
					</p>
					<div className="flex gap-2 sm:flex-col">
						<button className="bg-black py-2 px-8 rounded text-white sm:py-2 md:px-4">
							Get in touch
						</button>
						<button className="bg-black py-2 px-12 rounded text-white">
							Resume
						</button>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default Hero;

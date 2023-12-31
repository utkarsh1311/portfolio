import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
	return (
		<div className="flex py-36 h-fit items-center sm:flex-col-reverse sm:py-8 ">
			<div className=" basis-2/3 flex flex-col gap-4  md:p-0">
				<Fade triggerOnce cascade damping={0.4} delay={1000}>
					<h3 className="text-6xl font-bold leading md:text-4xl ">
						a little bit <br /> about me 
					</h3>
					<div className="flex flex-col gap-4 w-2/3 text-secondary md:w-2/3 md:text-sm sm:w-full dark:text-dark-secondary ">
						<p>
							I&apos;m a full-stack developer who thrives on crafting seamless
							websites. Coding isn&apos;t just a job—it&apos;s my creative
							outlet to bring ideas to life, from frontend to backend.
						</p>
						<p>
							Beyond the screen, I find joy in animated worlds, indulging my
							passion for animes during leisure hours.
						</p>
						<p>
							In my downtime, you&apos;ll catch me immersed in a good book.
							Reading is my cherished pastime, allowing me to unwind, broaden my
							perspectives, and explore worlds beyond the lines of code.
						</p>
						<div>
							{/* social icons */}
							<div className="flex gap-8 mt-4 dark:dark-filter">
								<a href="https://github.com/utkarsh1311">
									<Image
										src="/github.svg"
										width={30}
										height={30}
										alt="github icon"
									/>
								</a>
								<a href="https://linkedin.com/in/utkarsh-maurya">
									<Image
										src="/linkedin.svg"
										width={30}
										height={30}
										alt="linkedin icon"
										className=""
									/>
								</a>
								<a href="https://x.com/coder_utkarsh">
									<Image
										src="/twitter.svg"
										width={30}
										height={30}
										alt="twitter icon"
									/>
								</a>
								<a href="https://instagram.com/iam.utkarsh">
									<Image
										src="/instagram.svg"
										width={30}
										height={30}
										alt="instagram icon"
									/>
								</a>
								<a href="mailto:itsutkarsh123@gmail.com">
									<Image
										src="/mail.svg"
										width={30}
										height={30}
										alt="email icon"
									/>
								</a>
							</div>
						</div>
					</div>
				</Fade>
			</div>
			<Fade triggerOnce cascade damping={0.8} delay={500}>
				<div className="p-16 basis-1/3 grid grid-cols-1 grid-rows-1 md:p-0 sm:mb-16">
					<Image
						src="/anime.jpg"
						className=" aspect-square rounded-lg col-start-1 row-start-1 object-cover rotate-12 sm:w-2/3 sm:mx-auto dark:sepia backdrop-grayscale"
						width={400}
						height={400}
						alt="anime boy"
					/>

					<Image
						src="/profile.jpg"
						className=" aspect-square rounded-lg object-cover col-start-1 row-start-1 z-10 sm:w-2/3 sm:mx-auto dark:sepia"
						width={400}
						height={400}
						alt="Image of the author"
					/>
				</div>
			</Fade>
		</div>
	);
};

export default AboutMe;

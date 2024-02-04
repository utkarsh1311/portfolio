import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Skills = () => {
	return (
		<section id="skills" className="h-screen items-center flex ">
			<div className="w-full">
				<h2 className="text-6xl font-bold sm:text-4xl mb-6">
					skills I have 💪
				</h2>

				{/* Languages */}
				<div className="grid grid-cols-2  sm:grid-cols-1">
					<Fade triggerOnce cascade damping={0.4}>
						<div className="mt-6 ">
							<h4 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1">
								Languages
							</h4>
							<ul className="flex gap-x-4  flex-wrap dark:text-dark-secondary">
								{[
									"JavaScript",
									"TypeScript",
									"Java",
									"Python",
									"Bash",
									"C",
								].map(lang => (
									<li key={lang} className="">
										{lang}
									</li>
								))}
							</ul>
						</div>

						{/* Frontend */}
						<div className="mt-6">
							<h4 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1">
								Frontend
							</h4>
							<ul className="flex gap-x-4  flex-wrap dark:text-dark-secondary">
								{[
									"Next.js",
									"React",
									"React Router Dom",
									"TailwindCSS",
									"Bootstrap",
									"HTML",
									"CSS",
								].map(lang => (
									<li key={lang} className="">
										{lang}
									</li>
								))}
							</ul>
						</div>

						{/* Backend */}
						<div className="mt-6">
							<h4 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1">
								Backend
							</h4>
							<ul className="flex gap-x-4  flex-wrap dark:text-dark-secondary">
								{["Node.js", "Express.js", "JWT"].map(lang => (
									<li key={lang} className="">
										{lang}
									</li>
								))}
							</ul>
						</div>

						{/* Databases */}
						<div className="mt-6">
							<h4 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1">
								Databases
							</h4>
							<ul className="flex gap-x-4  flex-wrap dark:text-dark-secondary">
								{["PostgreSQL", "MySQL", "MongoDB", "Redis"].map(lang => (
									<li key={lang} className="">
										{lang}
									</li>
								))}
							</ul>
						</div>

						{/* Dev tools and Platforms */}
						<div className="mt-6">
							<h4 className="text-3xl font-bold mb-2 sm:text-2xl sm:mb-1">
								Dev tools and Platforms
							</h4>
							<ul className="flex gap-x-4  flex-wrap dark:text-dark-secondary">
								{["Git", "GitHub", "VS Code", "Docker", "WSL", "Postman"].map(
									lang => (
										<li key={lang} className="">
											{lang}
										</li>
									)
								)}
							</ul>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
};

export default Skills;

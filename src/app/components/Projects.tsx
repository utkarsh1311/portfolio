import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
	const projects = [
		{
			name: "Feedback App",
			unfinished: false,
			description:
				"A feedback app built to provide feedbacks from teachers and students. Provides a dashboard for teachers to view the feedbacks and a portal for students to submit feedbacks.",
			techStack: [
				"React",
				"React AG Grid",
				"Prisma",
				"PostgreSQL",
				"TailwindCSS",
				"Express.js",
				"Node.js",
			],
			github: "https://github.com/utkarsh1311/feedback-app",
			website: "https://feedback-app-utkarsh1311.vercel.app/",
		},
		{
			name: "Pokedex",
			unfinished: false,
			description:
				"Pokedex app, where Pokémon enthusiasts can effortlessly explore detailed profiles, adopt their favorite companions, and engage in easygoing care activities.",
			techStack: [
				"React",
				"TailwindCSS",
				"Express.js",
				"Node.js",
				"Redis",
				"MongoDB",
			],
			github: "https://github.com/utkarsh1311/pokedex",
			website: "ttps://pokedex-blue-delta.vercel.app/",
		},
		{
			name: "make-project",
			unfinished: true,
			description:
				"An NPX CLI to generate a boilerplate for a project. Bootstrap your project with a single command.",
			techStack: ["Node.js", "Typescript", "Inquirer.js"],
			github: "https://github.com/utkarsh1311/make-project",
			website: "https://www.npmjs.com/package/make-project",
		},
		{
			name: "wordle-clone",
			unfinished: false,
			description: "A clone of the popular game Wordle.",
			techStack: ["HTML", "CSS", "Javascript"],
			github: "https://github.com/utkarsh1311/wordle-clone",
			website: "https://utkarsh1311.github.io/wordle-clone/",
		},
	];

	return (
		<section
			id="projects"
			className="h-screen flex flex-col justify-center py-8 pt-14  sm:h-fit sm:py-16"
		>
			<div className="w-full">
				<h2 className="text-6xl font-bold sm:text-4xl">my projects 🛠️</h2>
				<div className="grid grid-cols-2 mt-8 md:grid-cols-1 gap-14 sm:gap-8">
					<Fade triggerOnce cascade damping={0.4}>
						{projects.map(project => (
							<div
								className="p-8 flex-col flex gap-4 border-2 shadow rounded "
								key={project.name}
							>
								<div className="flex w-full  gap-4 items-center">
									<h3 className="text-3xl font-bold sm:text-2xl">
										{project.name}
									</h3>

									<a href="" className="ml-auto">
										<Image
											src="/github.svg"
											width={30}
											height={30}
											alt="link to the github repo of project"
											className="dark:dark-filter"
										/>
									</a>
									<a href="">
										<Image
											src="/link.svg"
											width={30}
											height={30}
											alt="link to the github repo of project"
											className="dark:dark-filter"
										/>
									</a>
								</div>
								<div>
									<p className="text-sm text-gray-500">{project.description}</p>
								</div>
								<div className="flex gap-x-4 flex-wrap mt-auto">
									{project.techStack.map(skill => (
										<span key={skill} className="text-sm font-semibold">
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</Fade>
				</div>
			</div>
			<a
				href="https://github.com/utkarsh1311"
				className="flex justify-center w-full"
			>
				<button className="bg-black py-2 px-8 rounded text-white mt-8 dark:dark-filter">
					More projects
				</button>
			</a>
		</section>
	);
};

export default Projects;

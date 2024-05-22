const Experience = () => {
	return (
		<div className=" flex flex-col justify-center sm:justify-normal mt-20">
			<div className="">
				<div className="mb-16">
					<h2 className="text-6xl font-bold  sm:text-4xl">
						my work experience 🧑🏻‍💻🗃️
					</h2>
				</div>
				<div className="flex flex-col gap-10">
					<div>
						<div className="flex justify-between">
							<h3 className="text-3xl font-semibold">Frontend Intern</h3>
							<p className="font-semibold">March 2024 - Present</p>
						</div>
						<p>Sumatak Technologies</p>
						<ul className=" list-disc list-inside mt-3 text-gray-600 dark:text-dark-secondary flex flex-col gap-3 ">
							<li>
								Engineered a Chrome extension with React, TypeScript, and Vite
								to evaluate website risk scores with 95% accuracy, providing
								real-time threat analysis.{" "}
							</li>
							<li>
								Implemented various LLM-based chatbots using Chainlit and
								Langchain with Retrieval-Augmented Generation (RAG) for context
								awareness, supporting models like Llama2, Gemini, OpenAI, and
								Mistral via Ollama to improve user interaction and query
								handling.
							</li>
							<li>
								Created a web application for document signing with
								certificates, utilizing libraries such as pdf-lib, react-pdf,
								and signpdf, streamlining the signing process and ensuring
								secure and efficient document handling.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;

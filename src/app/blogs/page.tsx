import BlogList from "../components/BlogList";

const Blogs = () => {
	return (
		<div className="min-h-screen my-14 flex justify-center w-full bg-primary dark:bg-dark-primary">
			<div className="w-3/4 mt-14 text-primary dark:text-dark-primary sm:w-full sm:p-8">
				<h1 className="text-6xl font-bold sm:text-4xl">my blogs 📝</h1>
				<BlogList />
			</div>
		</div>
	);
};

export default Blogs;

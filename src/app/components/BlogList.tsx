import getBlogsMetaData from "@/lib/getBlogsMetadata";
import Link from "next/link";

const BlogList = () => {
	const blogsMetaData = getBlogsMetaData();

	return (
		<div className="mt-14">
			<ul className="grid grid-cols-2 gap-x-12 gap-y-8 mt-8 sm:grid-cols-1">
				{blogsMetaData.map((blog, index) => (
					<li
						key={index}
						className="border-2 border-gray-400 p-8 rounded shadow"
					>
						<Link
							href={`/blogs/${blog.id}`}
							className="flex flex-col gap-4 h-full"
						>
							<h2 className="text-3xl font-bold text-primary dark:text-dark-primary mb-4">
								{blog.title}
							</h2>
							<p className="text-gray-600 text-sm">{blog.description}</p>
							<p className="flex gap-2 flex-wrap mt-auto">
								{blog.tags.map((tag, index) => (
									<span
										key={index}
										className="font-semibold text-sm text-primary dark:text-dark-primary "
									>
										{tag}
									</span>
								))}
							</p>
							<p className="text-gray-600 ">{blog.date}</p>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogList;

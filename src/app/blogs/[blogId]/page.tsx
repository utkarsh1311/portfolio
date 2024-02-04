import path from "path";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getBlogsMetaData from "@/lib/getBlogsMetadata";
import Link from "next/link";

const getBlogContent = (blogId: string) => {
	const blogsFolder = path.join(process.cwd(), "blog_posts");
	const filePath = path.join(blogsFolder, `${blogId}.md`);
	const fileContents = fs.readFileSync(filePath, "utf8");
	const matterResult = matter(fileContents);

	return {
		title: matterResult.data.title,
		date: matterResult.data.date,
		tags: matterResult.data.tags,
		body: matterResult.content,
	};
};

export const generateStaticParams = async () => {
	const blogs = getBlogsMetaData();
	return blogs.map(blog => ({
		id: blog.id,
	}));
};

const BlogPostPage = (props: any) => {
	const id = props.params.blogId;
	const { title, date, tags, body } = getBlogContent(id);

	const formattedDate = new Date(date).toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<div className="mt-14">
			<article
				className="prose prose-xl sm:prose-sm max-w-none w-3/4 sm:w-full   prose-gray mx-auto p-6 dark:prose-headings:text-dark-primary dark:prose-p:text-dark-secondary dark:prose-strong:text-dark-primary dark:prose-invert 
				"
			>
				<div className="py-6 border-b-2 border-gray-500">
					<h1 className="font-bold">{title}</h1>
					<p className="text-base">Published at: {formattedDate}</p>
					<div className="flex gap-4 flex-wrap">
						{tags.map((tag: string, index: number) => (
							<span
								key={index}
								className="font-semibold text-sm text-primary dark:text-dark-primary"
							>
								#{tag}
							</span>
						))}
					</div>
				</div>
				<Markdown>{body}</Markdown>
				<Link className="font-bold" href={`/blogs`}>
					Get back to blogs
				</Link>
			</article>
		</div>
	);
};

export default BlogPostPage;

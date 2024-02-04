import path from "path";
import { BlogMetaData } from "../../types";
import fs from "fs";
import matter from "gray-matter";

const getBlogsMetaData = (): BlogMetaData[] => {
	const blogsFolder = path.join(process.cwd(), "blog_posts");

	const fileNames = fs.readdirSync(blogsFolder);
	const markdownFiles = fileNames.filter(file => file.endsWith(".md"));

	const blogMetaData = markdownFiles.map(fileName => {
		const filePath = path.join(blogsFolder, fileName);
		const fileContents = fs.readFileSync(filePath, "utf8");
		const matterResult = matter(fileContents);
		return {
			id: fileName.replace(/\.md$/, ""),
			title: matterResult.data.title,
			description: matterResult.data.description,
			date: matterResult.data.date,
			tags: matterResult.data.tags,
		};
	});

	return blogMetaData.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export default getBlogsMetaData;

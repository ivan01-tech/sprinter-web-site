import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  contentHtml: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory).map((file) => ({
    slug: file.replace(/\.md$/, ""),
  }));
}

export function getSortedPostsData(): Omit<BlogPost, "contentHtml">[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPosts = fileNames.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const fileContents = fs.readFileSync(path.join(postsDirectory, filename), "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      image: data.image,
    };
  });
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    image: data.image,
    contentHtml,
  };
}

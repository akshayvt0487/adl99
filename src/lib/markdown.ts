import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  content?: string;
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as Omit<BlogPost, 'slug'>),
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // Debug: Log the first image line from markdown
  const imageMatch = content.match(/!\[.*?\]\(.*?\)/);
  if (imageMatch) {
    console.log('[markdown.ts] Found markdown image:', imageMatch[0]);
  }

  // Convert markdown to HTML with proper options
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .process(content);
  const contentHtml = processedContent.toString();

  // Debug: Log the converted HTML for the first image
  const imgMatch = contentHtml.match(/<img[^>]*>/);
  if (imgMatch) {
    console.log('[markdown.ts] Converted to HTML img:', imgMatch[0]);
  } else {
    console.log('[markdown.ts] WARNING: No <img> tags found in converted HTML!');
    console.log('[markdown.ts] First 500 chars of HTML:', contentHtml.substring(0, 500));
  }

  return {
    slug,
    content: contentHtml,
    ...(data as Omit<BlogPost, 'slug' | 'content'>),
  };
}

export function getAllBlogSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
}

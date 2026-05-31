import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatInlineMarkdown = (value: string) => {
  const escaped = escapeHtml(value);

  return escaped
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" />')
    .replace(
      /\[([^\]]+)\]\((https?:\/\/[^)]+|\/[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    )
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
};

const parseFrontMatter = (fileContent: string) => {
  const frontMatterMatch = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!frontMatterMatch) {
    return {
      data: {},
      content: fileContent,
    };
  }

  const data = frontMatterMatch[1].split("\n").reduce<Record<string, string>>(
    (acc, line) => {
      const separatorIndex = line.indexOf(":");
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim().replace(/^["']|["']$/g, "");
      acc[key] = value;
      return acc;
    },
    {}
  );

  return {
    data,
    content: frontMatterMatch[2],
  };
};

const calculateReadTime = (content: string) => {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
};

export const markdownToHtml = (markdown: string) => {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let list: string[] = [];
  let orderedList: string[] = [];
  let inCode = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${formatInlineMarkdown(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushLists = () => {
    if (list.length) {
      html.push(`<ul>${list.map((item) => `<li>${formatInlineMarkdown(item)}</li>`).join("")}</ul>`);
      list = [];
    }

    if (orderedList.length) {
      html.push(
        `<ol>${orderedList.map((item) => `<li>${formatInlineMarkdown(item)}</li>`).join("")}</ol>`
      );
      orderedList = [];
    }
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCode) {
        html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
        codeLines = [];
        inCode = false;
      } else {
        flushParagraph();
        flushLists();
        inCode = true;
      }
      continue;
    }

    if (inCode) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushLists();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushLists();
      html.push(`<h3>${formatInlineMarkdown(line.replace("### ", ""))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushLists();
      html.push(`<h2>${formatInlineMarkdown(line.replace("## ", ""))}</h2>`);
      continue;
    }

    if (line.startsWith("> ")) {
      flushParagraph();
      flushLists();
      html.push(`<blockquote>${formatInlineMarkdown(line.replace("> ", ""))}</blockquote>`);
      continue;
    }

    if (/^- /.test(line)) {
      flushParagraph();
      orderedList = [];
      list.push(line.replace(/^- /, ""));
      continue;
    }

    if (/^\d+\. /.test(line)) {
      flushParagraph();
      list = [];
      orderedList.push(line.replace(/^\d+\. /, ""));
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushLists();

  return html.join("\n");
};

export const getPostSlugs = () => {
  if (!fs.existsSync(postsDirectory)) return [];

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
};

export const getPostBySlug = (slug: string): BlogPost => {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontMatter(fileContent);

  return {
    slug,
    title: data.title ?? slug.replace(/-/g, " "),
    excerpt: data.excerpt ?? "",
    date: data.date ?? new Date().toISOString(),
    readTime: data.readTime ?? calculateReadTime(content),
    coverImage: data.coverImage ?? "/media/news0.jpeg",
    tags: data.tags ? data.tags.split(",").map((tag) => tag.trim()) : [],
    contentHtml: markdownToHtml(content),
  };
};

export const getAllPosts = (): BlogPostMeta[] =>
  getPostSlugs()
    .map((slug) => {
      const post = getPostBySlug(slug);
      const meta: BlogPostMeta = {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        readTime: post.readTime,
        coverImage: post.coverImage,
        tags: post.tags,
      };
      return meta;
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

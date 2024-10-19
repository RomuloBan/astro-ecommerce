import type { AstroConfig } from "astro";
import { getCollection } from "astro:content";
import rss from '@astrojs/rss';
import sanitizeHtm from "sanitize-html"
import MarkdownIt from "markdown-it"

const parser = new MarkdownIt();

export async function GET(context: AstroConfig) {
  const posts = await getCollection("blog");
  return rss({
    title: 'The sndwch blog',
    description: 'All sandwich news. All the time.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/posts/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
    }))
  });
}

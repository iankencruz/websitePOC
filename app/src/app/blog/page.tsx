import directus from "../lib/directus";
import BlogCard from "@/components/BlogCard";

async function getPosts() {
	const posts = await directus.items("posts").readByQuery({
		fields: ["slug", "title", "publish_date", "author.name"],
        sort: ['-publish_date'],
	});

	return posts.data;
}

export default async function DynamicPage() {
	const posts = await getPosts();
	return (
		<div className="py-10 mx-auto justify-items-center">
			<ul>
				{posts.map((post) => {
					return (
						<div className="py-10 mx-auto  ">
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`}>
                                    <h2>{post.title}</h2>
                                </a>
                                <span>
                                    {post.publish_date}
                                </span>
                            </li>
                        </div>
					);
				})}
			</ul>
		</div>
	);
}

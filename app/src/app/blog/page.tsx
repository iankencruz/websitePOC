import directus from "../lib/directus";
import BlogCard from "@/components/BlogCard";

// //@ts-ignore
// async function getPosts() {
// 	const posts : any  = await directus.items("posts").readByQuery({
// 		fields: ["slug", "title", "publish_date", "author.name"],
//         sort: ['-publish_date'],
// 	});

// 	return posts.data;
// }
type d = {
	slug : string,
	title : string,
	publish_data: any,
	author: {
		name : string
	},
};
async function getPosts(){
	const { data } : any = await directus.graphql.items('query{posts{slug title publish_date author{name}}}');
	return data.posts
}
// NEEED TO RESEARCH INTO MAP AND HOW IT WORKS FOR SET TYPES!!
//@ts-ignore
export default async function DynamicPage() {
	const posts : any = await getPosts();
	console.log(posts);
	return (
		<div className="py-10 mx-auto justify-items-center">
			<ul>
				{posts.map((post : any) => {
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

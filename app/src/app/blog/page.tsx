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
	const { data } : any = await directus.graphql.items('query{posts(sort:["-publish_date"]){slug title publish_date hero{id} author{name}}}');
	//@ts-ignore
	return data.posts
}
// NEEED TO RESEARCH INTO MAP AND HOW IT WORKS FOR SET TYPES!!
//@ts-ignore
export default async function DynamicPage() {
	const posts : any = await getPosts();

	let x = "" + directus.url + "assets/";

	

	return (
		<div className="py-10 mx-auto justify-items-center">
			<ul>
				{posts.map((post : any) => {
					return (
						<div className="py-10 mx-auto container flex justify-center ">
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`}>
								<img src={x + post.hero.id} alt="sadw" height={512} width={512} />
                                    <h2 className="text-3xl">{post.title}</h2>
                                <span>
                                    {post.publish_date}
                                </span>
                                </a>
								
                            </li>
                        </div>
					);
				})}
			</ul>
		</div>
	);
}

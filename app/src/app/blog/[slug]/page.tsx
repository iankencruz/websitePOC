import directus from "@/app/lib/directus";
import { notFound } from "next/navigation";

async function getPost(slug : any) {
	try {
		const post : any = await directus.items("posts").readOne(slug, {
			fields: ["*.*"],
		});
		return post;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params } : any) {
	const post : any = await getPost(params.slug);
	return (
		<>
			<div className="flex flex-wrap w-full h-full">
				<div className="container mx-auto w-1/2 text-left">
					<img
                        className="mx-auto my-10 bg-cover"
						src={`${directus.url}assets/${post.hero.filename_disk}?width=600`}
						alt=""
                        width={1080}
					/>
					<h1 className="font-bold text-6xl">{post.title}</h1>
					<div className="w-full mx-auto my-10 mb-20 text-xl " dangerouslySetInnerHTML={{ __html: post.content }}></div>
					<div className="w-full mx-auto my-10 mb-40 text-xl"><span>{post.publish_date} &bull; {post.author.name}</span> </div>
				</div>
			</div>
		</>
	);
}

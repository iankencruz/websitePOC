import directus from "@/app/lib/directus";
import { notFound } from "next/navigation";
import { draftMode } from 'next/headers'; 

async function getPost(slug) {
	try {
		const post = await directus.items("posts").readOne(slug, {
			fields: ["*.*"],
		});
		return post;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params }) {
	const post = await getPost(params.slug);
	const { isEnabled } = draftMode(); 
	return (
		<>
			<div className="flex flex-wrap w-full h-full">
				<div className="container mx-auto w-1/2 text-left">
					<img
                        className="mx-auto mb-10 bg-cover"
						src={`${directus.url}assets/${post.image.filename_disk}?width=600`}
						alt=""
                        width={1080}
					/>
					<h1 className="font-bold text-6xl">{post.title}</h1>
					<div className="w-full mx-auto my-10 mb-20 text-xl " dangerouslySetInnerHTML={{ __html: post.content }}></div>
					<div className="w-full mx-auto my-10 mb-40 text-xl"><span>{post.publish_date} &bull; {post.author.name}</span> </div>
				</div>
				{isEnabled && <p>(Draft Mode)</p>} 
			</div>
		</>
	);
}

import ContentBlock from "@/components/ContentBlock";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import directus from "../lib/directus";

export const metadata: Metadata = {
	title: "about.js",
	description: "test",
};

async function getData(){ // this uses graphql api to retrive data for this page
	const { data } = await directus.graphql.items('query{About{isLeft title body hero{id}}}');
	  //@ts-ignore
	return data.About; // the data we need is nested within ({x:{}}) so this call will just send the data needed (x:{})
}

async function getPosts(){ // this uses graphql api to retrive data for this page
	const { data } : any = await directus.graphql.items('query{posts(sort:["-publish_date"]){slug title publish_date hero{id} author{name}}}');
	//@ts-ignore
	return data.posts
}


// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
	const data = await getData();
	const posts = await getPosts();
	let x = "" + directus.url + "assets/" + data.hero.id;


	let y = "" + directus.url + "assets/";



	return(
	<>
		<h1 className="text-red-500 text-center align-middle">
			Hello, About Page! This is inserted to children
		</h1>
        <Hero title={data.title} />

    {/* Use props to render content on left or right  */}
      <ContentBlock srcImage={"" + directus.url + "assets/" + data.hero.id} textLeft={data.isLeft} textInput={data.body}/>

		<div className="flex mx-32 gap-x-4">
		{posts.map((post : any) => {
					return (
						<div className="py-10 mx-auto flex justify-center ">
                            <li key={post.slug}>
                                <a href={`/blog/${post.slug}`}>
								<img className="h-1/2" src={y + post.hero.id} alt="sadw" height={512} width={512} />
                                    <h2 className="text-sm">{post.title}</h2>
                                <span>
                                    {post.publish_date}  &bull; {post.author.name}
                                </span>
                                </a>
								
                            </li>
                        </div>
					);
				})}
		</div>

	</>)
}
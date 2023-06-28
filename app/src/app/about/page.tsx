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

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
	const data = await getData();
	let x = "" + directus.url + "assets/" + data.hero.id  ;
	return(
	<>
		<h1 className="text-red-500 text-center align-middle">
			Hello, About Page! This is inserted to children
		</h1>
        <Hero title={data.title} />

    {/* Use props to render content on left or right  */}
      <ContentBlock srcImage={x} textLeft={data.isLeft} textInput={data.body}/>

	</>)
}
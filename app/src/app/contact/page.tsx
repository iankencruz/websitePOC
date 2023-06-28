import ContentBlock from "@/components/ContentBlock";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "contact.js",
	description: "test",
};

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
	return(
	<>
		<h1 className="text-red-500 text-center align-middle">
			Hello, Contact Page! This is inserted to children
		</h1>
        <Hero title='Hero Component' />

    {/* Use props to render content on left or right  */}
      <ContentBlock srcImage={""} textLeft={data.isLeft} useImage={true} textInput={data.body}/>

	</>)
}

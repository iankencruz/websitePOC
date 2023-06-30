import ContentBlock from "@/components/ContentBlock";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import directus from "../lib/directus";
import ContactForm from "@/components/ContactFrom";


export const metadata: Metadata = {
	title: "contact.js",
	description: "test",
};

async function getData() { // this uses graphql api to retrive data for this page
	const { data } = await directus.graphql.items('query{Contact{isLeft title body hero{id}}}');
	//@ts-ignore
	return data.Contact; // the data we need is nested within ({x:{}}) so this call will just send the data needed (x:{})
}


const handleSubmit = () => {
	console.log("hello there");
}

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default async function Page() {
	const data = await getData();
	let x = "" + directus.url + "assets/" + data.hero.id;
	return (
		<>
			<h1 className="text-red-500 text-center align-middle">
				Hello, Contact Page! This is inserted to children
			</h1>
			<Hero title={data.title} />

			{/* Use props to render content on left or right  */}
			<ContentBlock srcImage={x} textLeft={data.isLeft} textInput={data.body} />
			<ContactForm></ContactForm>


			{/* <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<form className="mt-8 space-y-6" noValidate onSubmit={() => handleSubmit()}>
						<div className="rounded-md shadow-sm -space-y-px">
							<div>
								<label htmlFor="email-address" className="sr-only">
									Email address
								</label>
								<input
									id="email-address"
									name="email"
									type="email"
									autoComplete="email"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Email address"
								/>
							</div>
							<div>
								<label htmlFor="password" className="sr-only">
									Password
								</label>
								<input
									id="password"
									name="password"
									type="password"
									autoComplete="current-password"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Password"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div> */}

		</>)
}

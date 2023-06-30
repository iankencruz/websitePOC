'use client'
import directus from "@/app/lib/directus";
import { useMutation } from "react-query";


//@ts-ignore
async function handleSubmit(e) {
	e.preventDefault();
	// const contact = directus.items('Contact');
	const contact = directus.graphql.items('mutation{create_ContactForm_item(data:{name: "ff", email: "gg@tt.com", number : "4546", subject :"higg", message: "gg this work1})}');
	console.log("hello there");
	// const { data } = directus.graphql.items('mutation{create_ContactForm_item(data:{name: "ff", email: "gg@tt.com", number : "4546", subject :"higg", message: "gg this work1})}');
	// console.log(data);
	// const a = await contact.readOne(1);
	console.log(contact);
}

// const setData = async (mutation, data = {}, additionalPath = '') => {
// 	const query = JSON.stringify({
// 	  query: mutation,
// 	  variables: data
// 	});
  
// 	const response = await fetch(`http://10.10.25.169:8055/graphql`, {
// 	  headers: {'content-type': 'application/json'},
// 	  method: 'POST',
// 	  body: query,
// 	});
  
// 	const responseJson = await response.json();
// 	return responseJson.data;
//   };


// Setup a GraphQL client to use the endpoint





//@ts-ignore
export default function ContactForm() {
	// const createContact = useMutation((newUser) => {
	// 	setData(createNewUser, { data: newUser }, '/system').then((response) => {
	// 	  console.log(response);
	// 	});
	//   });
	
	//   const handleSubmit = (e) => {
	// 	e.preventDefault();
	
	// 	console.log(e.target.password.value);
	
	// 	signUpMutation.mutate({
	// 	  email: e.target.email.value,
	// 	  password: e.target.password.value,
	// 	  role: '49645f56-c6ec-434d-ae13-091c545d00f2',
	// 	  status: 'active',
	// 	  provider: '',
	// 	})
	
	//   }

	// const client = new client("http://10.10.25.169:8055/graphql");


// Now, send your query as a string (Note that ` is used to create a multi-line
// string in javascript).

// client.query(`
//   query {
//     user {
//       id
//       name
//     }
//   }`);
//   console.log(client);



	return (
		<div className="mx-auto">
			<h2 className="text-blue mx-auto text-center text-5xl font-bold my-20">
				Contact us form
			</h2>
			<div className="min-h-full flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
				<div className="max-w-md w-full space-y-8">
					<form className="mt-8 space-y-6" noValidate onSubmit={(e) => handleSubmit(e)}>
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
								<label htmlFor="name" className="sr-only">
									Name
								</label>
								<input
									id="name"
									name="name"
									type="name"
									autoComplete="user-name"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Name"
								/>
							</div>
							<div>
								<label htmlFor="subject" className="sr-only">
									subject
								</label>
								<input
									id="subject"
									name="subject"
									type="subject"
									autoComplete="current-subject"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Subject"
								/>
							</div>
							<div>
								<label htmlFor="message" className="sr-only">
									Message
								</label>
								<input
									id="message"
									name="message"
									type="message"
									autoComplete="current-message"
									required
									className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
									placeholder="Message"
								/>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							>
								Contact
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>

	);
}
'use client'
import directus from "@/app/lib/directus";

async function handleSubmit(e : any){
    e.preventDefault(); 
	console.log("hello there");
    const { data } =  await directus.graphql.items('mutation{create_ContactUs_item(data:{name: "ff", email: "gg@tt.com", number : "4546", subject :"higg", message: "gg this work1"})}');
	console.log(data);
}

export default function ContactForm() {

   

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
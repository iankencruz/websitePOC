import directus from '../lib/directus';
import { notFound } from 'next/navigation';


async function getPage(slug : any) {
	try {
		const page : any = await directus.items('pages').readOne(slug);
		return page;
	} catch (error) {
		notFound();
	}
}

export default async function DynamicPage({ params } : any) {
	const page : any = await getPage(params.slug);
	return (
		<div>
			<h1>{page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: page.content }}></div>
		</div>
	);
}
import { draftMode } from 'next/headers';
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const secret = searchParams.get('secret');
	const slug = searchParams.get('slug');

	if (secret !== '123') {
		return new Response('Invalid token 1', { status: 401 });
	}

	if (!id) {
		return new Response('Missing id', { status: 401 });
	}

	const post = await getPostBySlug(slug)

	if (!post) {
		return new Response('Invalid slug', { status: 401 });
	}

	draftMode().enable();
	// redirect(blog.slug)

	return new Response(null, {
		status: 307,
		headers: {
			Location: `/blog/${post.slug}`,
		},
	});
}
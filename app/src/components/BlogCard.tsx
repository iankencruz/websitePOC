import Link from "next/link";








type BlogProp = {
	slug: any;
	title: string;
	publish_date: string;
};

export default function BlogCard(props: BlogProp) {
	return (
		<>
			<a href={`/blog/${props.slug}`}>
                <div className="bg-slate-400 flex mx-auto w-1/4 h-auto">
                    <div className="my-auto mx-auto text-center pt-10">
                        <h2>{props.title}</h2>
                        <h3>{props.slug}</h3>
                        <h4>{toString(props.publish_date)}</h4>
                        <div className="py-20">
                            <Link href={props.slug}> <button className="bg-blue-500 w-32 h-12 ">Read More</button></Link>
                        </div>
                    </div>
                </div>
            </a>
		</>
	);
}

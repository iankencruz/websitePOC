import * as React from "react";

type HeroProp = {
    title: string
}

export default function Hero(props:HeroProp) {

    let title = props.title

	return (
		<>
			<div className="w-full bg-purple-200 h-[320px]">
				<h1 className="mx-auto text-4xl text-black flex flex-row justify-center py-32 font-black">
					Home Page {title}
				</h1>
			</div>
		</>
	);
}

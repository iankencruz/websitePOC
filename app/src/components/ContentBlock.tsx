import * as React from "react";
import Image from "next/image";

type contentProp = {
	useImage: boolean;
	textLeft: boolean;
	textInput: string;
};

export default function ContentBlock(props: contentProp) {
	// let contentImage = props.useImage
	let textLeft = props.textLeft;
	let textInput = props.textInput;
	let useImage = props.useImage;

	return (
		<>
			<div className="mx-auto">
				<h2 className="text-white mx-auto text-center text-5xl font-bold my-20">
					Component Title
				</h2>
			</div>

			{textLeft == true ? (
				<>
					<div className="flex    mx-auto mr-64 my-20 w-full">
						<div className="flex flex-wrap ml-80 my-20">
							<div className="my-20 w-96">
								<h4>txt left = {textLeft}</h4>
								<p>{textInput}</p>
							</div>
						</div>
						{useImage && (
							<Image
								className="justify-end ml-auto flex mx-auto"
								src="/Picture1.jpg"
								width={350}
								height={350}
							/>
						)}
					</div>
				</>
			) : (
				<div className="flex justify-end    mx-auto mr-64 my-20 w-full">
                    {useImage && (
							<Image
								className="justify-start mr-auto flex mx-auto"
								src="/Picture1.jpg"
								width={350}
								height={350}
							/>
						)}
				    <div className="flex flex-wrap mr-40 my-20">
				        <div className=" my-20 mr-64 w-96">
        					<h4>txt left = {textLeft}</h4>
        					<p>{textInput}</p>
        				</div>
				    </div>
                    

				</div>
			)}
		</>
	);
}

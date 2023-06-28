import * as React from "react";
import Image from "next/image";
import { type } from "os";

type contentProp = {
	useImage: boolean;
	textLeft: boolean;
	textInput: string;
	srcImage: string;
};

export default function ContentBlock(props: contentProp) {
	// let contentImage = props.useImage
	let textLeft = props.textLeft;
	let textInput = props.textInput;
	let useImage = props.useImage;
	let srcImage = props.srcImage;

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
								<div dangerouslySetInnerHTML={{ __html: textInput }}></div>
							</div>
						</div>
						{useImage && (
							<img
								className="justify-end ml-auto flex mx-auto"
								src={srcImage}
								width={500}
							/>
							// 				<Image
							// 				className="w-full h-full"
							// 					src={srcImage}
							// 					width={200}
							// 					height={160}
							// 					alt="alt image"
							// 					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,
							//   33vw"
							// 				/>
						)}
					</div>
				</>
			) : (
				<div className="flex justify-end    mx-auto mr-64 my-20 w-full">
					{useImage && (
						<img className="justify-end ml-auto flex mx-auto" src={srcImage} />
					)}
					<div className="flex flex-wrap mr-40 my-20">
						<div className=" my-20 mr-64 w-96">
							<div dangerouslySetInnerHTML={{ __html: textInput }}></div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

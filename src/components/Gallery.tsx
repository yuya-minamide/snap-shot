import React from "react";
import { Image, NoImages } from "./index";

interface ImageData {
	farm: number;
	server: string;
	id: string;
	secret: string;
	title: string;
}

interface GalleryProps {
	data: ImageData[];
}

export const Gallery: React.FC<GalleryProps> = ({ data }) => {
	let images;
	let noImages;

	if (data.length > 0) {
		images = data.map((image) => {
			const { farm, server, id, secret, title } = image;
			const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
			return <Image url={url} key={id} title={title} />;
		});
	} else {
		noImages = <NoImages />;
	}

	return (
		<div>
			<ul>{images}</ul>
			{noImages}
		</div>
	);
};

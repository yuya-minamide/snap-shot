import React from "react";

interface ImageProps {
	url: string;
	title: string;
}

const Image: React.FC<ImageProps> = ({ url, title }) => (
	<li>
		<img src={url} alt={title} />
	</li>
);

export default Image;

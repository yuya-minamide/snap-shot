import React from "react";
import { AiOutlineDownload } from "react-icons/ai";

interface ImageProps {
	url: string;
	title: string;
}

const Image: React.FC<ImageProps> = ({ url, title }) => {
	const handleDownload = async () => {
		try {
			const response = await fetch(url);
			const blob = await response.blob();
			const objectURL = URL.createObjectURL(blob);

			// Put temporary anchor element to trigger the download
			const link = document.createElement("a");
			link.href = objectURL;
			link.download = title;
			document.body.appendChild(link);
			link.click();

			// Clean up the temporary anchor
			document.body.removeChild(link);
			URL.revokeObjectURL(objectURL);
		} catch (error) {
			console.error("Error downloading image:", error);
		}
	};

	return (
		<li className="img-container">
			<img src={url} alt={title} />
			<div className="download-icon" onClick={handleDownload}>
				<AiOutlineDownload />
			</div>
		</li>
	);
};

export default Image;

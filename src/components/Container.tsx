import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import { Gallery, Loader } from "./index";

interface ContainerProps {
	searchTerm: string;
}

export const Container: React.FC<ContainerProps> = ({ searchTerm }) => {
	const { images, loading, runSearch } = useContext(PhotoContext);
	useEffect(() => {
		runSearch(searchTerm);
	}, [searchTerm]);

	return <div className="photo-container">{loading ? <Loader /> : <Gallery data={images} />}</div>;
};

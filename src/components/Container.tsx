import React, { useContext, useEffect } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Loader from "./Loader";

interface ContainerProps {
	searchTerm: string;
}

const Container: React.FC<ContainerProps> = ({ searchTerm }) => {
	const { images, loading, runSearch } = useContext(PhotoContext);
	useEffect(() => {
		runSearch(searchTerm);
	}, [searchTerm]);

	return <div className="photo-container">{loading ? <Loader /> : <Gallery data={images} />}</div>;
};

export default Container;

import React from "react";
import { Container } from "./index";
import { useParams } from "react-router-dom";

export const Search: React.FC = () => {
	const { searchInput } = useParams<{ searchInput: string }>();

	return (
		<div>
			{searchInput ? (
				<>
					<h2>{searchInput} Images</h2>
					<Container searchTerm={searchInput} />
				</>
			) : (
				<h2>No Search Term</h2>
			)}
		</div>
	);
};

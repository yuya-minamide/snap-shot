import React from "react";
import { Container } from "./index";

interface ItemProps {
	searchTerm: string;
}

export const Item: React.FC<ItemProps> = ({ searchTerm }) => {
	return (
		<div>
			<h2>{searchTerm} Pictures</h2>
			<Container searchTerm={searchTerm} />
		</div>
	);
};

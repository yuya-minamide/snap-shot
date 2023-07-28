import React from "react";
import Container from "./Container";

interface ItemProps {
	searchTerm: string;
}

const Item: React.FC<ItemProps> = ({ searchTerm }) => {
	return (
		<div>
			<h2>{searchTerm} Pictures</h2>
			<Container searchTerm={searchTerm} />
		</div>
	);
};

export default Item;

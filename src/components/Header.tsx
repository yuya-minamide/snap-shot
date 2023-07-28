import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

interface HeaderProps {
	handleSubmit: (searchInput: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSubmit }) => {
	console.log(handleSubmit);
	return (
		<div>
			<h1>SnapShot</h1>
			<Form handleSubmit={handleSubmit} />
			<Navigation />
		</div>
	);
};

export default Header;

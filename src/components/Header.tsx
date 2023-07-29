import React from "react";
import { Form, Navigation } from "./index";

interface HeaderProps {
	handleSubmit: (searchInput: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ handleSubmit }) => {
	console.log(handleSubmit);
	return (
		<div>
			<h1>SnapShot</h1>
			<Form handleSubmit={handleSubmit} />
			<Navigation />
		</div>
	);
};

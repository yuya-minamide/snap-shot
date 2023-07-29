import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotoContextProvider from "./context/PhotoContext";
import { Header, Item, NotFound, Search } from "./components";

class App extends Component {
	handleSubmit = (searchInput: string) => {
		let url = `/search/${searchInput}`;
		window.location.href = url;
	};

	render() {
		return (
			<PhotoContextProvider>
				<Router>
					{" "}
					<div className="container">
						<Header handleSubmit={this.handleSubmit} />

						<Routes>
							<Route path="/" element={<Item searchTerm="mountain" />} />
							<Route path="/mountain" element={<Item searchTerm="mountain" />} />
							<Route path="/beach" element={<Item searchTerm="beach" />} />
							<Route path="/bird" element={<Item searchTerm="bird" />} />
							<Route path="/food" element={<Item searchTerm="food" />} />
							<Route path="/search/:searchInput" element={<Search />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</Router>
			</PhotoContextProvider>
		);
	}
}

export default App;

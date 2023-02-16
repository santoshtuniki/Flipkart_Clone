import React from "react";
import "./Header.css";

import Category from "./Category/Category";
import Carousel from "./Carousel/Carousel";

const Header = () => {
	return (
		<div id="headerDiv">
			<Category/>
			<Carousel/>
		</div>
	);
};

export default Header;
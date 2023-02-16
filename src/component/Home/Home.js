import React from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import HiddenBar from "./HiddenBar";
import Header from "./Header/Header";
import CategoryFields from "./CategoryFields/CategoryFields";
import Destination from "./Destination";

const Home = () => {
	return (
		<>
			<Navbar/>
			<div id="main" className="mywhite">
				<HiddenBar/>
				<Header/>
				<CategoryFields/>
				<Destination/>
			</div>
			<Footer/>
		</>
	)
}

export default Home;

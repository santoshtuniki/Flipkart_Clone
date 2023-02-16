import React from "react";
import "./Carousel.css";

import CarInner from "./CarInner";

const Carousel = () => {
	return (
		<>
			<div id="devCarousel" className="carousel slide" data-bs-ride="carousel">
				<CarInner/>
				<button className="carousel-control-prev btn-light" id="carousel-btn" type="button" data-bs-target="#devCarousel" data-bs-slide="prev">
					<i className="fa-solid fa-angle-left slide-btn"></i>
				</button>
				<button className="carousel-control-next btn-light" id="carousel-btn" type="button" data-bs-target="#devCarousel" data-bs-slide="next">
					<i className="fa-solid fa-angle-right slide-btn"></i>
				</button>
			</div>
			<div className="break"></div>
		</>
	);
};

export default Carousel;
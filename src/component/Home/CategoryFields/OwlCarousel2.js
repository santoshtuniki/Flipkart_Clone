import React from "react";
import { Link } from "react-router-dom";
import options from "./OwlOptions";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const OwlCarousel2 = (props) => {
	return (
		<OwlCarousel className="owl-theme" {...options}>
			{
				props.arr.map((item) => {
					return (
						<div className="item owlTile" key={item.Product_id}>
							<Link to={`/listing/${item.Category_id}`}>
								<div>
									<div className="owlComponent3">
										<img src={item.Image} alt={item.Product_name}/>
									</div>
									<div className="owlComponent4">
										<span className="name">{item.Product_name}</span>
										<span className="cost">For {item.Selling_price}</span>
									</div>
								</div>
							</Link>
						</div>
					)
				})
			}
		</OwlCarousel>
	)
}

export default OwlCarousel2;
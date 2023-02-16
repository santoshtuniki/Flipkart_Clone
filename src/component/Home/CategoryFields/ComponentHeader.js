import React from "react";
import { Link } from "react-router-dom";
 
const ComponentHeader = (props) => {
	return (
		<>
			<div className="componentsHeader">
				<div className="title-box">
					<h4 className="title">{props.title}</h4>
					<p className="subtitle">{props.subtitle}</p>
				</div>
				<div className="view-box">
					<button type="button" className="btn btn-primary box-btn">
						<Link to={`/listing/${props.catId}`} className="plus">VIEW ALL</Link>
					</button>
				</div>
			</div>
			<div className="break"></div>
		</>
	);
};

export default ComponentHeader;
import React from "react";

import CarItems from "./CarItems";

const CarInner = () => {
	return (
		<div className="carousel-inner">
			{
				CarItems.map((item) => {
					return (
						<div className={item.CarClass} key={item.CarId}>
							<img src={item.CarLink} alt={item.CarName}/>
						</div>
					)
				})
			}
		</div>
	);
};

export default CarInner;

// Give href to the images Later -- 10/12/22
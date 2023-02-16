import React from "react";
import "./Category.css";

import CatItems from "./CategoryItems";

const Category = () => {
	return (
		<>
			<div id="category-Icons">
				{
					CatItems.map((item) => {
						return (
							<div className={item.Catclass.display} key={item.CatId}>
								<div className={item.Catclass.top}>
									<img src={item.CatImage} alt={item.CatName}/>
								</div>
								<div className={item.Catclass.bottom}>
									{item.CatName}
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="break"></div>
		</>
	);
};

export default Category;
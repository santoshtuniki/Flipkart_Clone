import React from "react";

const HiddenBar = () => {
	return (
		<div id="hiddenBar">
			<form className="d-flex" role="search" id="searchBar-2">
				<input className="form-control" type="search" placeholder="Search for products, brands and more" aria-label="Search" id="search-2" />
				<button className="btn btn-light" id="btn-search-2" type="button">
					<span><i className="bi bi-search"></i></span>
				</button>
			</form>
		</div>
	);
};

export default HiddenBar;
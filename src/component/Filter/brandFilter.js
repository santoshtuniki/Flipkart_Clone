import React, { Component } from 'react';
import axios from 'axios';

import { parentUrl } from '../Urls';

class BrandFilter extends Component {

	BrandFilter = (event) => {
		let catId = this.props.catId;
		let brandName = event.target.value;
		let brandUrl = "";
		if (brandName === "") {
			brandUrl = `${parentUrl}/filter/${catId}`
		} else {
			brandUrl = `${parentUrl}/filter/${catId}?brand=${brandName}`
		}
		axios.get(brandUrl)
			.then((res) => { this.props.productPerBrand(res.data) })
	}

	render() {
		return (
			<>
				<div className="filterDiv">
					<h2 className="subHeading">BRAND</h2>
					<div onChange={this.BrandFilter}>
						<label className="filterItem">
							<input type="radio" name="brand" value="" />
							ALL
						</label>
						{
							this.props.brand?.length > 0 && this.props.brand.map((item, index) => {
								return (
									<label className="filterItem" key={index}>
										<input type="radio" name="brand" value={item} />
										{item}
									</label>
								)
							})
						}
					</div>
				</div>
				<hr />
			</>
		)
	}
}

export default BrandFilter;
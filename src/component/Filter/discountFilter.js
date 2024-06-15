import React, { Component } from 'react';
import axios from 'axios';

import { parentUrl } from '../Urls';

class DiscountFilter extends Component {

	DiscountFilter = (event) => {
		let catId = this.props.catId;
		let discount = event.target.value;
		let discountUrl = "";
		if (discount === "") {
			discountUrl = `${parentUrl}/filter/${catId}`
		} else {
			discountUrl = `${parentUrl}/filter/${catId}?discount=${discount}`
		}
		axios.get(discountUrl)
			.then((res) => { this.props.productPerDiscount(res.data) })
	}

	render() {
		return (
			<>
				<div className="filterDiv">
					<h2 className="subHeading">DISCOUNT</h2>
					<div onChange={this.DiscountFilter}>
						<label className="filterItem">
							<input type="radio" name="discount" value="" />
							ALL
						</label>
						<label className="filterItem">
							<input type="radio" name="discount" value="50" />
							50% or more
						</label>
						<label className="filterItem">
							<input type="radio" name="discount" value="40" />
							40% or more
						</label>
						<label className="filterItem">
							<input type="radio" name="discount" value="30" />
							30% or more
						</label>
						<label className="filterItem">
							<input type="radio" name="discount" value="20" />
							20% or more
						</label>
						<label className="filterItem">
							<input type="radio" name="discount" value="10" />
							10% or more
						</label>
					</div>
				</div>
				<hr />
			</>
		)
	}
}

export default DiscountFilter;
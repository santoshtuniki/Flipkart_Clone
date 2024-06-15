import React, { Component } from 'react';
import axios from 'axios';

import { parentUrl } from '../Urls';

class RatingFilter extends Component {

	RatingFilter = (event) => {
		let catId = this.props.catId;
		let rating = event.target.value;
		let ratingUrl = "";
		if (rating === "") {
			ratingUrl = `${parentUrl}/filter/${catId}`
		} else {
			ratingUrl = `${parentUrl}/filter/${catId}?rating=${rating}`
		}
		axios.get(ratingUrl)
			.then((res) => { this.props.productPerRating(res.data) })
	}

	render() {
		return (
			<>
				<div className="filterDiv">
					<h2 className="subHeading">CUSTOMER RATING</h2>
					<div onChange={this.RatingFilter}>
						<label className="filterItem">
							<input type="radio" name="rating" value="" />
							ALL
						</label>
						<label className="filterItem">
							<input type="radio" name="rating" value="4" />
							4★ & Above
						</label>
						<label className="filterItem">
							<input type="radio" name="rating" value="3" />
							3★ & Above
						</label>
					</div>
				</div>
				<hr />
			</>
		)
	}
}

export default RatingFilter;
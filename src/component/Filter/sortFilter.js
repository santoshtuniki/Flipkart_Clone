import React, { Component } from 'react';
import axios from 'axios';

import { parentUrl } from '../Urls';

class SortFilter extends Component {

	SortFilter = (event) => {
		let catId = this.props.catId;
		let sortId = event.target.value;
		let sortUrl = `${parentUrl}/filter/${catId}?sort=${sortId}`;
		axios.get(sortUrl)
			.then((res) => { this.props.productPerSort(res.data) })
	}

	render() {
		return (
			<div id="sort" className='d-flex'>
				<h2 className="subHeading">Sort By</h2>
				<div onChange={this.SortFilter}>
					<label className="sortItem">
						<input type="hidden" name="sort" value="1" />
						Price -- Low to High
					</label>
					<label className="sortItem">
						<input type="hidden" name="sort" value="-1" />
						Price -- High to Low
					</label>
				</div>
			</div>
		)
	}
}

export default SortFilter;
import React,{Component} from 'react';
import axios from 'axios';

// const url = "https://flipkartapi-wnfd.onrender.com/filter";
const url = "http://localhost:9800/filter";

class SortFilter extends Component {

	SortFilter = (event) => {
		let catId = this.props.catId;
		let sortId = event.target.value;
		let sortUrl = `${url}/${catId}?sort=${sortId}`;
		axios.get(sortUrl)
			.then((res) =>  {this.props.productPerSort(res.data)})
	}

	render(){
		return(
			<div id="sort" className='d-flex'>
				<h2 className="subHeading">Sort By</h2>
				<div onChange={this.SortFilter}>
					<label className="sortItem">
						<input type="hidden" name="sort" value="1"/>
						Price -- Low to High
					</label>
					<label className="sortItem">
						<input type="hidden" name="sort" value="-1"/>
						Price -- High to Low
					</label>
				</div>
			</div>
		)
	}
}

export default SortFilter;
import React,{Component} from 'react';
import axios from 'axios';

const url = "https://flipkartapi-wnfd.onrender.com/filter";

class BrandFilter extends Component {

	BrandFilter = (event) => {
		let catId = this.props.catId;
		let brandName = event.target.value;
		let brandUrl = "";
		if(brandName === ""){
			brandUrl = `${url}/${catId}`
		}else{
			brandUrl = `${url}/${catId}?brand=${brandName}`
		}
		axios.get(brandUrl)
			.then((res) =>  {this.props.productPerBrand(res.data)})
	}

	render(){
		return(
			<>
				<div className="filterDiv">
					<h2 className="subHeading">BRAND</h2>
					<div onChange={this.BrandFilter}>
						<label className="filterItem">
							<input type="radio" name="brand" value=""/>
							ALL
						</label>
						{
							this.props.brand.map((item,index) => {
								return (
									<label className="filterItem" key={index}>
										<input type="radio" name="brand" value={item}/>
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
import React,{Component} from 'react';
import axios from 'axios';
import CostData from "./costData";

// const url = "https://flipkartapi-wnfd.onrender.com/filter";
const url = "http://localhost:9800/filter";

class CostFilter extends Component {

	CostFilter = (event) => {
		let catId = this.props.catId;
		let cost = (event.target.value).split('-');
		let lcost = cost[0];
		let hcost = cost[1];
		let costUrl = "";
		if(event.target.value === ""){
			costUrl = `${url}/${catId}`
		}else{
			costUrl =`${url}/${catId}?hcost=${hcost}&lcost=${lcost}`
		}
		axios.get(costUrl)
			.then((res) => {this.props.productPerRange(res.data)})
	}

	render(){
		const filteredData = CostData.filter((item) => item.id === this.props.catId);
		return(
			<>
				<div className="filterDiv">
					<h2 className="subHeading">PRICE</h2>
					<div onChange={this.CostFilter}>
						<label className="filterItem">
							<input type="radio" name="cost" value=""/>
							ALL
						</label>
						{
							filteredData[0].range.map((item,index) => {
								return (
									<label className="filterItem" key={index}>
										<input type="radio" name="cost" value={item}/>
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

export default CostFilter;
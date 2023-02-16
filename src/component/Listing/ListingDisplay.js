import React from "react";
import { Link } from "react-router-dom";

const ListingDisplay = (props) => {

	const {listData} = props

	const name = (data) => {
		if(data.length<50){
			return data;
		}else{
			return (data.slice(0,50)+" ...")
		}
	}

	const describe = (item) => {
		if(item.Suitable_for==="Men"){
			return (
				<>
					{item.Suitable_for} {item.Features.Fit?item.Features.Fit+" Fit ":null} 
					{item.Features.Occassion?item.Features.Occassion+" ":null}
					{item.Product_name}
				</>
			)
		}else if(item.Suitable_for==="kids"){
			if(item.Features.Ideal_for==="Girls"){
				return (
					<>
						{item.Features.Pattern} {item.Product_name}
					</>
				)
			}else {
				return (
					<>
						{item.Features.Ideal_for} {item.Features.Pattern} {item.Product_name}
					</>
				)
			}
		}else{
			return (
				<>
					{item.Features.Pattern?item.Features.Pattern.replaceAll(',',' '):null}
					{" "+item.Features.Fabric} 
					{" "+item.Product_name}
				</>
			)
		}
	}

	const renderData = (listData) => {
		if(listData){
			if(listData.length>0){
				return listData.map((item) => {
					return (
						<div key={item._id}>
							<div className="listContainer">

								<div className="listComponent1">
									<Link to={`/details/?productId=${item.Product_id}`} className="contentAnchor">
										<div className="listingImage">
											<img src={item.Image} alt={item.Product_name}/>
										</div>
									</Link>
								</div>

								<div className={item.Category_id===9?"listComponent2 contentCenter":"listComponent2"}>
									
									<div className={item.Category_id===9?"pName contentCenter":"pName"}>
										<Link to={`/details/?productId=${item.Product_id}`} className="contentAnchor">
											{item.Category_id===3?describe(item):name(item.Product_name)}
										</Link>
									</div>
									<div className="pColor">
										{item.Color}
									</div>
									<div className={item.Category_id===9?"success starCenter":"success"}>
										{item.Customer_rating} ★
									</div>
									<div className="pricing">
										<span className="sp">₹{item.Selling_price}</span>
										<span className={item.Maximum_price===item.Selling_price?"hide":"mp"}>
											₹{item.Maximum_price}
										</span>
										<span className={item.Discount>0?"discount":"hide"}>
											{item.Discount}% off
										</span>
									</div>
									
								</div>
							</div>
						</div>
					)
				})
			}else{
				return (
					<div>
						<h2>No Data As per filter</h2>
					</div>
				)
			}
		}else{
			return (
				<div>
					<img src="/Images/loader.gif" alt="loader" />
					<h2>Loading...</h2>
				</div>
			)
		}
	}

	return renderData(listData);
}

export default ListingDisplay;
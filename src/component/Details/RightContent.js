import React from "react";
import { Link } from "react-router-dom";

import AvailableOffers from "./AvailableOffers";

const RightContent = (props) => {

	const nextDays = (num) => {
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		let today = new Date();
		let next = new Date(today.getTime() + num * 24 * 60 * 60 * 1000);
		let nextDate  = next.getDate();
		let nextMonth = months[next.getMonth()];
		let nextDay = days[next.getDay()]
		return (
			<span>{nextDate} {nextMonth}, {nextDay}</span>
		)
	}

	const describe = (item) => {
		if(item.Suitable_for==="Men"){
			return (
				<>
					{item.Suitable_for} {item.Features.Fit?item.Features.Fit+" Fit ":null} 
					{item.Pattern} 
					{item.Features.Collar?item.Features.Collar+" Collar ":null}
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
					{item.Features.Pattern?item.Features.Pattern:null}
					{" "+item.Features.Fabric} 
					{" "+item.Product_name}
				</>
			)
		}
	}

	const toggleDetails = () => {
		let element  = document.querySelector('.iconPlus');
		let main  = element.classList;
		let data = document.querySelector('.pDetails').style;

		if(main.contains('bi-plus-lg')) {
			main.remove('bi-plus-lg');
			main.add('bi-x-lg');
			data.display="block";
		} else {
			main.remove('bi-x-lg');
			main.add('bi-plus-lg');
			data.display="none";
		}
	}

	const renderData = ({details}) => {
		if(details){
			return (
				<div className="rightContent" key={details.Productid}>
					<p className="path">Home {'>'} {details.Category}</p>
					<div className="icons">
						<span>
							<img className="shareImg" src="https://i.ibb.co/m8zqzdZ/share.png" alt="share-Arrow"/> share
						</span>
					</div>

					<div className="details_pName">
						{details.Category_id===3?describe(details):details.Product_name} 
						{!(details.Category_id===3)&&details.Color?' ( '+details.Color+' )':''}
					</div>
					<div className={details.Maximum_price-details.Selling_price>0?"details_extra":"hide"}>
						Extra ₹{details.Maximum_price-details.Selling_price} off
					</div>
					<div className="details_pricing">
						<div className="details_sp">
							₹{details.Selling_price}
						</div>
						<div className={details.Maximum_price===details.Selling_price?"hide":"details_mp"}>
							₹{details.Maximum_price}
						</div>
						<div className={details.Discount>0?"details_discount":"hide"}>
							{details.Discount}% off
						</div>
					</div>
					<div className="details_success">{details.Customer_rating} ★</div>

					<div className="available">
						Available Offers
					</div>
					<div className="availableOffers">
						{
							AvailableOffers.map((item) => {
								return (
									<div className="offerDiv" key={item.id}>
										<img className="tag" src="https://i.ibb.co/3TvGgCb/tag.png" alt="tag"/>
										<div className="offerSubDiv">
											<span className="offerType">{item.offerType}</span>
											<span className="offer">{item.offer}</span>
											<span className="Terms">T&C</span>
										</div>
									</div>
								)
							})
						}
					</div>

					<div className="highlightsDiv">
						<div className="row">
							<div className="col-lg-6 noPadding">
								<div className="row">
									<div className="col-lg-4 division noPadding">
										Delivery
									</div>
									<div className="col-lg-8 noPadding">
										<div className="pincode">
											<img className="map-pin" src="https://i.ibb.co/KrVMLPq/map-pin.png" alt="map-pin"/>
											<form className="pinform" autoComplete="off">
												<input className="pinInput" type="text" placeholder="Enter Delivery Pincode" name="pincode"/>
											</form>
											<span className="check">check</span>
										</div>
										<div className="delivery">
											<div className="offerType">
												Delivery by {nextDays(5)} | <span className="discount">Free</span> 
												<span className={details.Maximum_price-details.Selling_price>1500?"mp":''}>₹40</span>
											</div>
											<div className="orderBy">
												if ordered before 4:08 pm
											</div>
											<div className="check">
												view details
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6 noPadding">
								<div className="row">
									<div className="col-lg-4 division noPadding">
										Easy Payment Options
									</div>
									<div className="col-lg-8 noPadding">
										<ul className="highlightsList">
											<li className="details_highlights">EMI starting from this month</li>
											<li className="details_highlights">Cash on Delivery</li>
											<li className="details_highlights">Net banking & Credit/ Debit/ ATM card</li>
										</ul>
										<div className="check" style={{marginLeft: "18px"}}>view details</div>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-2 noPadding division">
								Seller
							</div>
							<div className="col-lg-10 noPadding">
								<div className="seller">
									CLIENTEROecom <div className="details_success blue">4.9 ★</div>
								</div>
								<ul className="highlightsList">
									<li className="details_highlights">7 day seller replacement policy/brand assistance for device issues</li>
									<li className="details_highlights">GST invoice available</li>
								</ul>
								<div className="check">See other sellers</div>
							</div>
						</div>

						<div className="superCoin">
							<img src="https://i.ibb.co/QYXqf7f/Super-Coin.png" alt="Super-Coin"/>
						</div>

						<div className="productDetails">
							<div className="row" onClick={toggleDetails}>
								<div className="col-lg-11 details">Product Details</div>
								<div className="col-lg-1 detailsPlus">
									<span><i className="bi bi-plus-lg iconPlus"></i></span>
								</div>
							</div>
		
							<div className="pDetails">
								<div className="row">
									<div className="col-lg-3 key">Brand</div>
									<div className="col-lg-9">{details.Brand}</div>
								</div>
								{
									"Color" in details ?
									<div className="row">
										<div className="col-lg-3 key">Color</div>
										<div className="col-lg-9">{details.Color}</div>
									</div>:null
								}
								{
									"size" in details ?
									<div className="row">
										<div className="col-lg-3 key">Size</div>
										<div className="col-lg-9">{details.size}</div>
									</div>:null
								}
								{
									"Quantity" in details ?
									<div className="row">
										<div className="col-lg-3 key">Quantity</div>
										<div className="col-lg-9">{details.Quantity}</div>
									</div>:null
								}
								{
									"Features" in details ?
										Object.keys(details["Features"]).map((key,index) => {
											return (
												<div className="row" key={index}>
													<div className="col-lg-3 key">
														{key.replace('_',' ')}
													</div>
													<div className="col-lg-9">{details["Features"][key]}</div>
												</div>
											)
										}):null
								}
								{
									"Console" in details ?
										<div className="row">
											<div className="col-lg-3 key">Console</div>
											<div className="col-lg-9">
												{
													details.Console.map((item,index) => <span key={index}>{item}<br/></span>)
												}
											</div>
										</div>:null
								}
								{
									"Highlights" in details ?
										<div className="row">
											<div className="col-lg-3 key">Highlights</div>
											<div className="col-lg-9">
												{
													details.Highlights.map((item,index) => <span key={index}>{item}<br/></span>)
												}
											</div>
										</div>:null
								}
							</div>
						</div>
					</div>

					<div style={{marginBottom:'10px'}}>
						<Link to={`/listing/${details.Category_id}`} className="btn btn-info">Back</Link>
					</div>
				</div>
			)
		}
	}

	return (
		renderData(props)
	)
}

export default RightContent;
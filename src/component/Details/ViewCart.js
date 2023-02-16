import React,{Component} from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

class ViewCart extends Component {

	constructor(props){
		super(props);
		this.state={
			viewdata:this.props.location.state,
			userItem:'hello'
		}
	}

	orderId = [];
	previousOrderId = [];

	previousOrder = (id) => {
		this.previousOrderId.push(id);
	}

	placeOrder = () => {
		console.log(this.orderId)
		this.setState((state) => {
			return {userItem: this.orderId}
		},() => {
			sessionStorage.setItem('orderedItem',this.state.userItem);
			console.log(sessionStorage.getItem('orderedItem'))
		});
		this.props.history.push(`/placeOrder/${this.state.viewdata.Product_id}`);
	}

	removeOrder=(id)=>{
		console.log(this.orderId.indexOf(id))
		if(this.orderId.indexOf(id) > -1){
			this.orderId.splice(this.orderId.indexOf(id), 1);
			this.previousOrderId.splice(this.previousOrderId.indexOf(id), 1);
			console.log(this.orderId)
		}
		this.setState(state => {
			return {userItem: this.orderId}
		}, () => {
			console.log(this.state.userItem);
		});
	}

	minus = () => {
		let element = document.querySelector(".number").innerText;
		element = Number(element);
		if(element>1){
			document.querySelector(".number").innerText = element-1;
			// console.log(document.querySelector(".number").innerText)
		}else {
			document.querySelector(".number").innerText = 1;
		}
	}

	plus = () => {
		let element = document.querySelector(".number").innerText;
		element = Number(element);
		document.querySelector(".number").innerText = element+1;
	}

	price = () => {
		let element = document.querySelector(".number").innerText;
		element = Number(element);
		// console.log(element)
		if(element===1){
			return '(1 item)';
		}else {
			return `(${element} items)`;
		}
	}


	renderCart = (orders) => {
		if(orders){
			return orders.map((item,index) => {
				return(
					<b key={index}>{item}&nbsp;</b>
				)
			})
		}
	}

	nextDays = (num) => {
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
		let today = new Date();
		let next = new Date(today.getTime() + num * 24 * 60 * 60 * 1000);
		let nextDate  = next.getDate();
		let nextMonth = months[next.getMonth()];
		let nextDay = days[next.getDay()]
		return (
			<span>{nextDay} {nextMonth} {nextDate}</span>
		)
	}

	describe = (item) => {
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

	renderMenu = (viewdata) => {
		if(viewdata){
			if(this.orderId.indexOf(viewdata.Product_id) === -1){
				this.orderId.push(viewdata.Product_id);
			}
			return(
				<>
					<div className="cartProducts">
						<div className="cartContent" key={viewdata.Product_id}>
							<div className="cartImage">
								<img className="linkedImage" src={viewdata.Image} alt={viewdata.Product_name} />
							</div>
							<div className="cartDetails">
								<div className="cart_pName">
									<Link to={`/details/?productId=${viewdata.Product_id}`} className="contentAnchor">
										{viewdata.Category_id===3?this.describe(viewdata):viewdata.Product_name} 
										{!(viewdata.Category_id===3)&&viewdata.Color?' ( '+viewdata.Color+' )':''}
									</Link>
								</div>
								<div className="cart_seller">
									Seller: CLIENTEROecom
								</div>
								<div className="cart_pricing">
									<div className={viewdata.Maximum_price===viewdata.Selling_price?"hide":"cart_mp"}>
										₹{viewdata.Maximum_price}
									</div>
									<div className="cart_sp">
										₹{viewdata.Selling_price}
									</div>
									<div className={viewdata.Discount>0?"cart_discount":"hide"}>
										{viewdata.Discount}% off
									</div>
								</div>
								<div className="packaging">
									+ ₹49 Secured Packaging Fee
								</div>
							</div>
							<div className="cartDelivery">
								Delivery by {this.nextDays(5)} | <span className="discount">Free</span>
								<span className={viewdata.Maximum_price-viewdata.Selling_price>1500?"free":''}>₹40</span>
							</div>
						</div>
						<div className="cartExtra">
							<div className="more">
								<button className="btn-minus" onClick={this.minus}>-</button>
								<div className="number">1</div>
								<button className="btn-plus" onClick={this.plus}>+</button>
							</div>
							<div className="save option" onClick={() => this.previousOrder(viewdata.Product_id)}>
								SAVE FOR LATER
							</div>
							<div className="remove option" onClick={() => this.removeOrder(viewdata.Product_id)}>
								REMOVE
							</div>
						</div>
					</div>
				</>
			)
		}
	}

	render(){
		const {viewdata} = this.state;
		return(
			<>
				<Navbar/>
				<div className="listBreak">
					<div className="cartTitle">
						<h2>Products Added to CART</h2>
					</div>
					<div className="mainListing">
						{this.renderMenu(viewdata)}
					</div>
					<div className="placeOrder">
						<button type="submit" className="btn cartButton" onClick={() => {this.placeOrder()}}>
							Place Order
						</button>
					</div>
				</div>
			</>
		)
	}

}

export default ViewCart;
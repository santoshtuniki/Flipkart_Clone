import axios from "axios";
import React, { Component } from "react";
import "./PlaceOrder.css";

import Navbar from "../Navbar/Navbar";

// const url = "https://flipkartapi-wnfd.onrender.com/orderedItems";
// const oUrl = "https://flipkartapi-wnfd.onrender.com/orders";

const url = "http://localhost:9800/orderedItems";
const oUrl = "http://localhost:8700/orders";

class PlaceOrder extends Component {

	constructor(props){
		super(props)
		this.state = {
			id:Math.floor(Math.random()*10000),
			OrderIds:this.props.match.params.prodId,
			name:'Ankit',
			email:'ankit@gmail.com',
			cost:0,
			phone:9381501701,
			address:"Hno 62 nagpur",
			orderedItem:''
		}
	}

	handleChange =(event) => {
		this.setState({[event.target.name]:event.target.value})
	}

	checkout=() => {
		let obj = this.state;
		obj.orderedItem = sessionStorage.getItem('orderedItem');
		
		fetch(oUrl,{
			method:'POST',
			headers:{
				'accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(obj)
		})
		.then(console.log('order added'))
		// .then(this.props.history.push('/viewBooking'))
	}

	name = (data) => {
		if(data.length<35){
			return data;
		}else{
			return (data.slice(0,35)+" ...")
		}
	}

	renderItem=(data) => {
		if(data){
			return data.map((item) => {
				return(
					<div className="orderItems" key={item.Product_id}>
						<img src={item.Image} alt={item.Product_name}/>
						<h5>{this.name(item.Product_name)}</h5>
						<h5>Rs. {item.Selling_price}</h5>
					</div>
				)
			})
		}
	}

	render() {
		return (
			<>
				<Navbar/>
				<div className="container" style={{marginTop:'95px'}}>
					<div className="card">
						<div className="card-header text-bg-primary">
							<h3>Order for {this.state.OrderIds}</h3>
						</div>
						<div className="card-body">
							<form action="http://localhost:4100/paynow" method="POST">
								<input type="hidden" name="cost" value={this.state.cost}/>
								<input type="hidden" name="id" value={this.state.id}/>
								<input type="hidden" name="OrderIds" value={this.state.OrderIds}/>
								<div className="row">
									<div className="form-group col-md-6">
										<label htmlFor="fname" className="control-label">FirstName</label>
										<input className="form-control" id="fname" name="name" value={this.state.name}
										onChange={this.handleChange}/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="email" className="control-label">Email</label>
										<input className="form-control" id="email" name="email" value={this.state.email}
										onChange={this.handleChange}/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="phone" className="control-label">Phone</label>
										<input className="form-control" id="phone" name="phone" value={this.state.phone}
										onChange={this.handleChange}/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="address" className="control-label">Address</label>
										<input className="form-control" id="address" name="address" value={this.state.address}
										onChange={this.handleChange}/>
									</div>
								</div>

								{this.renderItem(this.state.orderedItem)}
								<div className="row">
									<div className="col-md-12">
										<h4>Total Price is Rs.{this.state.cost}</h4>
									</div>
								</div>
								<button style={{marginLeft:'12px'}} className="btn btn-success" onClick={this.checkout} type="submit">
									PlaceOrder
								</button>
							</form>
						</div>
					</div>
				</div>
			</>
		)
	}

	componentDidMount(){
		let orderId = [];

		let buyItem = sessionStorage.getItem('buyItem');
		if(buyItem===null){
			let orderedItem = sessionStorage.getItem('orderedItem');
			console.log("orderedItem: ",orderedItem)
			
			orderedItem.split(',').map((item) => {
				orderId.push(parseInt(item));
				return 'receiveOrderId ok'
			})
		}else {
			orderId.push(parseInt(buyItem));
		}
		
		// let orderID = JSON.stringify(orderId)
		let orderID = {id: orderId}
		console.log("order ids",orderID)

		axios.post(url, orderID)
		.then((res) => {
			// console.log("response:",res.data)
			let totalPrice = 0;
			res.data.map((item) => {
				totalPrice = totalPrice + item.Selling_price;
				return 'ok'
			})
			this.setState({orderedItem:res.data,cost:totalPrice})
		})
	}
}

export default PlaceOrder;
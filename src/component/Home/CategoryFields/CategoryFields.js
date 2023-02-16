import React, { Component } from "react";
import "./CategoryFields.css";

import ComponentHeader from "./ComponentHeader";
import OwlCarousel1 from "./OwlCarousel1";
import OwlCarousel2 from "./OwlCarousel2";

const lurl = "https://flipkartapi-wnfd.onrender.com/products";

class CategoryFields extends Component {

	constructor(){
		super();
		this.state = {
			products:[]
		}
	}

	electronics = (data) => {
		if(data){
			return (
				data.filter((item) => (item.Category_id === 4 && item.Selling_price>10000))
					.sort((a, b) => (a.Selling_price > b.Selling_price ? 1 : -1))
					.splice(0,10)
			)
		}
	}

	fashion = (data) => {
		if(data){
			return (
				data.filter((item) => item.Category_id === 3 && item.Selling_price>1500)
					.sort((a, b) => (a.Selling_price > b.Selling_price ? 1 : -1))
					.reverse()
					.splice(0,10)
			)
		}
	}

	beauty = (data) => {
		if(data){
			return (
				data.filter((item) => item.Category_id === 8)
					.sort((a, b) => (a.Selling_price > b.Selling_price ? 1 : -1))
					.reverse()
					.splice(0,10)
			)
		}
	}

	home = (data) => {
		if(data){
			return (
				data.filter((item) => item.Category_id === 5 && item.Selling_price>1000)
					.sort((a, b) => (a.Selling_price > b.Selling_price ? 1 : -1))
					.splice(0,10)
			)
		}
	}

	appliances = (data) => {
		if(data){
			return (
				data.filter((item) => item.Category_id === 6 && item.Selling_price>20000)
					.sort((a, b) => (a.Selling_price > b.Selling_price ? 1 : -1))
					.splice(0,10)
			)
		}
	}

	render(){
		return (
			<div id="category-Fields">
				<div id="components">
					<ComponentHeader
						title="Best of Electronics"
						subtitle="Best of Electronics"
						catId={4}/>
					<OwlCarousel1 arr={this.electronics(this.state.products)}/>
				</div>
				<div id="components">
					<ComponentHeader
						title="Fashion Top Deals"
						subtitle="Fashion Top Deals"
						catId={3}/>
					<OwlCarousel2 arr={this.fashion(this.state.products)}/>
				</div>
				<div id="components">
					<ComponentHeader
						title="Beauty, Food, Toys & more"
						subtitle="Beauty, Food, Toys & more"
						catId={8}/>
					<OwlCarousel1 arr={this.beauty(this.state.products)}/>
				</div>
				<div id="components">
					<ComponentHeader
						title="Home & Kitchen Essentials"
						subtitle="Home & Kitchen Essentials"
						catId={5}/>
					<OwlCarousel1 arr={this.home(this.state.products)}/>
				</div>
				<div id="components">
					<ComponentHeader
						title="Top Deals On TVs & Appliances"
						subtitle="Top Deals On TVs & Appliances"
						catId={6}/>
					<OwlCarousel1 arr={this.appliances(this.state.products)}/>
				</div>
			</div>
		)
	}

	componentDidMount(){
		fetch(lurl,{method:"GET"})
		.then((res) => res.json())
		.then((data) => {
			this.setState({products:data})
		})
	}

}

export default CategoryFields;
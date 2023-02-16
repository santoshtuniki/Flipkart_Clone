import React, { Component, Fragment } from "react";
import axios from "axios";
import "./Listing.css";

import ListingDisplay from "./ListingDisplay";
import CategoryItems from "../Home/Header/Category/CategoryItems";
import BrandFilter from "../Filter/brandFilter";
import CostFilter from "../Filter/costFilter";
import RatingFilter from "../Filter/ratingFilter";
import DiscountFilter from "../Filter/discountFilter";
import SortFilter from "../Filter/sortFilter";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const lurl = "https://flipkartapi-wnfd.onrender.com/products?categoryId=";

class Listing extends Component {
	
	constructor(){
		super();
		this.state={
			"categoryList":'',
			"catId":'',
			"brand":'',
			"category":''
		}
	}

	brand = () => {
		const mapped = this.state.categoryList.map((item) => item.Brand);
		const filtered = mapped.filter((type,index) => mapped.indexOf(type) === index);
		this.setState({brand:filtered});
	}

	category = (catId) => {
		if(catId){
			const catItem = CategoryItems.filter((item) => item.CatId===catId);
			this.setState({category:catItem[0].CatName});
			this.brand();
		}
	}

	setDataPerFilter = (data) => {
		this.setState({categoryList:data});
	}

	renderData = (catId) => {
		this.category(catId);
		if(catId){
			return (
				<Fragment>
					<div className="listBreak"></div>
					<div className="mainListing">
						<div id="filters">
							<h2 className="heading">Filters</h2>
							<hr />
							<div className="filterDiv">
								<h2 className="subHeading">CATEGORIES</h2>
								<span className="filterItem">{this.state.category}</span>
							</div>
							<hr />
							<CostFilter catId={catId} productPerRange={(data) => {this.setDataPerFilter(data)}}/>
	
							<BrandFilter catId={catId} brand={this.state.brand} productPerBrand={(data) => {this.setDataPerFilter(data)}}/>
							
							<RatingFilter catId={catId} productPerRating={(data) => {this.setDataPerFilter(data)}}/>
			
							<DiscountFilter catId={catId} productPerDiscount={(data) => {this.setDataPerFilter(data)}}/>
						</div>
						<div id="content">
							<div className="topView" >
								<p className="path">Home {`>`} {this.state.category}</p>
								<h2 className="subHeading">Showing results for "{this.state.category}"</h2>
								<SortFilter catId={catId} productPerSort={(data) => {this.setDataPerFilter(data)}}/>
							</div>
							<hr/>
							<div className="components">
								<ListingDisplay listData={this.state.categoryList}/>
							</div>
						</div>
					</div>
				</Fragment>
			)
		}
	}

	render(){
		return (
			<>
				<Navbar/>
				{this.renderData(Number(this.state.catId))}
				<Footer/>
			</>
		)
	}

	// calling api with axios 
	componentDidMount() {
		// get the value of categoryId in from the param
		let categoryId = this.props.match.params.categoryId;
		// Sets the value of the pair identified by key to value, creating a new key/value pair if none existed.
		sessionStorage.setItem('categoryId',categoryId);	// setItem(key,value)
		// get(url: string, config?: AxiosRequestConfig<any> | undefined)
		axios.get(`${lurl}${categoryId}`)
		.then((res) => {this.setState({categoryList:res.data,catId:categoryId})});
	}
}

export default Listing;
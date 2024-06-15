import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Details.css";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import RightContent from "./RightContent";
import { parentUrl } from '../Urls';

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: '',
			catId: sessionStorage.getItem("categoryId")
		}
	}

	proceed = () => {
		console.log("presentOrderID: ", this.state.details.Product_id)
		sessionStorage.setItem('buyItem', this.state.details.Product_id);
		this.props.history.push(`/placeOrder/${this.state.details.Product_id}`);
	}

	render() {
		let { details } = this.state;
		return (
			<>
				<Navbar />
				<div className="listBreak"></div>
				<div className="mainListing">
					<div className="content">
						<div className="leftContent">
							<div className="image">
								<img className="linkedImage" src={details.Image} alt={details.Product_name} />
							</div>
							<div className="fav">
								<img className="favImage" src="https://i.ibb.co/mX64hZ9/solid-gray-heart-hi.png" alt="gray-heart" />
							</div>
							<div className="row">
								<div className="col-lg-6 zeroPadding">
									<Link to={{ pathname: "/viewCart", state: details }}>
										<button type="submit" className="buy cartButton">
											<i className="fa fa-shopping-cart cart" aria-hidden="true"></i>
											ADD TO CART
										</button>
									</Link>
								</div>
								<div className="col-lg-6 zeroPadding">
									<button type="submit" className="buy nowButton" onClick={this.proceed}>
										<i className="bi bi-lightning-fill"></i>
										BUY NOW
									</button>
								</div>
							</div>
						</div>
						<RightContent details={this.state.details} />
					</div>
				</div>
				<Footer />
			</>
		)
	}

	async componentDidMount() {
		let prodId = this.props.location.search.split('=')[1];
		let response = await axios.get(`${parentUrl}/details/${prodId}`);
		this.setState({ details: response.data[0] });
	}
}

export default Details;
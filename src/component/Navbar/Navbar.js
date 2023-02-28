import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import LightDarkMode from "./LightDarkMode";
import WeatherDisplay from "./WeatherDisplay";

const myStyle = {
	plus: {
		color:'#feea0d',
		marginLeft:'3px'
	},
	dropdown: {
		color: '#fff'
	}
}

// const url = "http://localhost:5000/api/auth/userinfo";

class Navbar extends Component {

	constructor(){
		super();
		this.state={
			userData:''
		}
	}

	handleLogout = () => {
		sessionStorage.removeItem('ltk')
		this.setState({userData:''})
		this.props.history.push('/')
	}

	conditionalHeader = () => {
		if(this.state.userData.name){
			let data = this.state.userData;
			let outArray = [data.name,data.email,data.phone];
			sessionStorage.setItem('userInfo',outArray)
			return(
				<div id="social">
					<Link to="/" className="btn btn-success">
						<span className="glyphicon glyphicon-user"></span> Hi {data.name}
					</Link> &nbsp;
					<button onClick={this.handleLogout} className="btn btn-danger">
						<span className="glyphicon glyphicon-log-out"></span> Logout
					</button>
				</div>
			)
		}else{
			return(
				<div id="social">
					<Link to="/login" className="btn btn-success">
						<span className="glyphicon glyphicon-log-in"></span> Login
					</Link> &nbsp;
					<Link to="/register" className="btn btn-danger">
						<span className="glyphicon glyphicon-user"></span> Register
					</Link>
				</div>
			)
		}
	}
	

	render() {
		return (
			<>
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
					<div className="container-fluid">
						<LightDarkMode/>
						<WeatherDisplay/>
	
						<div className="navbar-brand brand">
							<div className="brandTopImage">
								<Link to="/">
									<img width="75" src="https://i.ibb.co/YpZNQmD/flipkart-plus.png" alt="Flipkart" title="Flipkart" />
								</Link>
							</div>
							<div className="brandBottomLink">
								<Link to="/plus" className="plus">
									Explore
									<span style={myStyle.plus}><strong>Plus</strong></span>
									<img style={myStyle.plus} width="10" src="https://i.ibb.co/S08sqBd/plus.png" alt="plus"/>
								</Link>
							</div>
						</div>
	
						<form className="d-flex" role="search" id="searchBar">
							<input className="form-control" type="search" placeholder="Search for products, brands and more" aria-label="Search" id="search" />
							<button className="btn btn-light" id="btn-search" type="button">
								<span><i className="bi bi-search"></i></span>
							</button>
						</form>
	
						<button type="button" className="btn btn-light" id="btn-login">
							<Link to="/"><strong>Login</strong></Link>
						</button>
	
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
		
						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li id="hidden-item">
									<Link className="nav-link active" to="/">{this.state.conditionalHeader}</Link>
								</li>
								<li className="dropdown">
									<Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={myStyle.dropdown}>
										More
									</Link>
									<ul className="dropdown-menu">
										<li ><Link className="dropdown-item" to="/">Notification Preferences</Link></li>
										<li ><Link className="dropdown-item" to="/">24x7 Customer Care</Link></li>
										<li ><Link className="dropdown-item" to="/">Advertise</Link></li>
										<li ><Link className="dropdown-item" to="/">Download App</Link></li>
										<li ><Link className="dropdown-item" to="/">Become a Seller</Link></li>
									</ul>
								</li>
								<li>
									<Link className="nav-link active" to="/">
										<span><i className="fa-solid fa-cart-shopping cart"></i></span>
										Cart
									</Link>
								</li>
							</ul>
						</div>
	
					</div>
				</nav>
			</>
		)
	}

	// componentDidMount(){
	// 	fetch(url,{
	// 		method: 'GET',
	// 		headers:{
	// 			'x-access-token':sessionStorage.getItem('ltk'),
	// 		}
	// 	})
	// 	.then((res) => res.json())
	// 	.then((data) => {
	// 		this.setState({
	// 			userData:data
	// 		})
	// 	})
	// }
}

export default Navbar;

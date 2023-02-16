import React from "react";
import { BrowserRouter, Route} from "react-router-dom";

import Home from "./Home/Home";
import Listing from "./Listing/Listing";
import Details from "./Details/Details";
import ViewCart from "./Details/ViewCart";
import PlaceOrder from "./Orders/PlaceOrder";
import ViewOrder from "./Orders/ViewOrder";
import Login from "./Login/login";
import Register from "./Login/register";

const Routing = () => {
	return (
		<BrowserRouter>
			<Route exact path="/" component={Home}/>
			<Route path="/listing/:categoryId" component={Listing}/>
			<Route path="/details" component={Details}/>
			<Route path="/viewCart" component={ViewCart}/>
			<Route path="/placeOrder/:prodId" component={PlaceOrder}/>
			<Route path="/viewBooking" component={ViewOrder}/>
			<Route path="/login" component={Login}/>
			<Route path="/register" component={Register}/>
		</BrowserRouter>
	);
};

export default Routing;

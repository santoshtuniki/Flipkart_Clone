import React from "react";

closeCoupon = () => {
	document.getElementById('coupon').style.visibility = 'hidden';
	document.getElementById('main').style.opacity='1';
}

const Coupon = () => {
	return (
		<div id="coupon">
			<button className="btn-coupon" onClick={this.closeCoupon}>X</button>
			<img src="https://rukminim1.flixcart.com/fk-p-flap/480/480/image/edc6e78958d41dd3.jpg?q=50" alt="coupon"/>
		</div>
	);
};
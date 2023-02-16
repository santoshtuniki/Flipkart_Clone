import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

import FooterItems from "./FooterItems";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="footer1">
					<div className="footDiv1 footDiv">
						<div className="footHeading">ABOUT</div>
						{
							FooterItems.About.map((item) => {
								return <Link to={item.url} key={item.id}>{item.about}</Link>
							})
						}
					</div>
					<div className="footDiv2 footDiv">
						<div className="footHeading">HELP</div>
						{
							FooterItems.Help.map((item) => {
								return <Link to={item.url} key={item.id}>{item.about}</Link>
							})
						}
					</div>
					<div className="footDiv3 footDiv">
						<div className="footHeading">POLICY</div>
						{
							FooterItems.Policy.map((item) => {
								return <Link to={item.url} key={item.id}>{item.about}</Link>
							})
						}
					</div>
					<div className="footDiv4 footDiv nowborder">
						<div className="footHeading">SOCIAL</div>
						{
							FooterItems.Social.map((item) => {
								return <Link to={item.url} key={item.id}>{item.about}</Link>
							})
						}
					</div>
					<div className="footDiv5 footDiv-2">
						<div className="footHeading">Mail Us:</div>
						<span>Flipkart Internet Private Limited,
						<br/>
						Buildings Alyssa, Begonia &
						<br/>
						Clove Embassy Tech Village,
						<br/>
						Outer Ring Road, Devarabeesanahalli Village,
						<br/>
						Bengaluru, 560103,
						<br/>
						Karnataka, India</span>
					</div>
					<div className="footDiv6 footDiv-2">
						<div className="footHeading">Registered Office Address:</div>
						<span>Flipkart Internet Private Limited,
						<br/>
						Buildings Alyssa, Begonia &
						<br/>
						Clove Embassy Tech Village,
						<br/>
						Outer Ring Road, Devarabeesanahalli Village,
						<br/>
						Bengaluru, 560103,
						<br/>
						Karnataka, India
						<br/>
						CIN : U51109KA2012PTC066107
						<br/>
						Telephone: 044-45614700</span>
					</div>
				</div>
				<div className="footer2">
					<div className="break"></div>
					<p>&copy; Developer Funnel</p>
				</div>
			</footer>
		</>
	)
};

export default Footer;

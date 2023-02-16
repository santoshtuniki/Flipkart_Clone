import React,{Component} from 'react';
import axios from 'axios';

import Navbar from "../Navbar/Navbar";
import DisplayOrder from './DisplayOrder';

const orderApi = "http://localhost:8700/orders";
// const orderApi = "https://flipkartapi-wnfd.onrender.com/orders";
 
class ViewOrder extends Component{

	constructor(props){
		super(props)

		this.state={
			orders:''
		}
	}

	render(){
		return(
			<>
				<Navbar/>
				<DisplayOrder orderData={this.state.orders}/>
			</>
		)
	}

	componentDidMount(){
		axios.get(`${orderApi}`)
		.then((res) => {
			console.log(res.data)
			this.setState({orders:res.data})
		})
	}
}

export default ViewOrder;
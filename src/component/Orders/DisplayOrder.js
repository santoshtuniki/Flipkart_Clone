import React from 'react';

const DisplayOrder = (props) => {

	const renderTable = ({orderData}) => {
		if(orderData){
			return orderData.map((item) => {
				return(
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.name}</td>
						<td>{item.phone}</td>
						<td>{item.email}</td>
						<td>Rs. {item.cost}</td>
						<td>{item.date}</td>
						<td>{item.status}</td>
						<td>{item.bank_name}</td>
					</tr>
				)
			})
		}
	}

	return(
		<div className="container" style={{marginTop:'95px'}}>
			<center><h3>Orders</h3></center>
			<table className="table">
				<thead>
					<tr>
						<th>OrderId</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
						<th>Cost</th>
						<th>Date</th>
						<th>Status</th>
						<th>BankName</th>
				</tr>
				</thead>
				<tbody>
					{renderTable(props)}
				</tbody>
			</table>
		</div>
	)
}

export default DisplayOrder;
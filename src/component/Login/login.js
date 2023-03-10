import React,{Component} from 'react';

const url = "http://localhost:5000/api/auth/login";

class Login extends Component{

	constructor(){
		super()

		this.state={
			email:"nikki@gmail.com",
			password:'12345678',
			message:''

		}
	}

	handleChange=(event) => {
		this.setState({[event.target.name]:event.target.value})
	}

	handleSubmit = () => {
		fetch(url,{
			method: 'POST',
			headers:{
				'accept':'application/json',
				'Content-Type':'application/json'
			},
			body:JSON.stringify(this.state)
		})
		.then((res) => res.json())
		.then((data) => {
			if(data.auth === false){
				this.setState({message: data.token})
			}else{
				sessionStorage.setItem('ltk',data.token)
				this.props.history.push('/')
			}
		})
	}

	render(){
		return(
			<>
				<div className="container">
					<div className="card bg-info">
						<div className="card-header">
							<h3>Login</h3>
							<h2>{this.state.message}</h2>
						</div>
						<div className="card-body">
							<div className="row">
								<div class="form-group col-md-6">
									<label for="email">Email</label>
									<input type="text" name="email" class="form-control"
									value={this.state.email} onChange={this.handleChange}  />
								</div>
								<div class="form-group col-md-6">
									<label for="password">Password</label>
									<input type="text" name="password" class="form-control"
									value={this.state.password} onChange={this.handleChange}  />
								</div>
							</div>
							<button className="btn btn-success" onClick={this.handleSubmit}>
								Login
							</button>

						</div>
					</div>
				</div>
			</>
		)
	}
}

export default Login
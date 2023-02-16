import React, { Component } from "react";

class LightDarkMode extends Component {
	constructor(){
		super();
		this.state = {
			button:"btn btn-dark",
			icon:"bi bi-moon-fill"
		}
	}

	changeMode = () => {
		if(this.state.button === 'btn btn-dark'){
			this.setState({button:"btn btn-light"})
		} else {
			this.setState({button:"btn btn-dark"})
		}

		if(this.state.icon === 'bi bi-moon-fill'){
			this.setState({icon:"bi bi-brightness-high-fill"})
		} else {
			this.setState({icon:"bi bi-moon-fill"})
		}
	}
	
	render() {
		return (
		<>
			<button type="button" className={this.state.button} id="clock" onClick={this.changeMode}>
				<i id="clock-icon" className={this.state.icon}></i>
			</button>
		</>
		);
	}
};

export default LightDarkMode;
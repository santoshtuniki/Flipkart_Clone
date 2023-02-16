import React from "react";

const WeatherDisplay = () => {
	return (
		<div id="weather">
			<div id="weatherOut"></div>
			<img id="weatherIcon" src='https://openweathermap.org/img/w/10d.png' alt="weather"/>
		</div>
	);
};

export default WeatherDisplay;
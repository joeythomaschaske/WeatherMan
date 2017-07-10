import React from 'react';
import Tile from './Tile.js';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            forecasts : []
        };
    }
    componentDidMount() {
        let self = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                let query = 'https://api.weatherbit.io/v1.0/forecast/3hourly?lat=' + lat + '&lon=' + long + '&units=I&key=8952d3cc7abd43498e59f4b993fdcac6';
                fetch(query).then(function (res) {
                    res.json().then(function (json) {
                        var forecastsByDay = {};
                        for (var i = 0; i < json.data.length; ++i) {
                            var datetime = json.data[i].datetime.split(':')[0];
                            var forecast = forecastsByDay[datetime];
                            if (forecast) {
                                forecast.push(json.data[i]);
                            } else {
                                forecast = [];
                                forecast.push(json.data[i]);
                            }
                            forecastsByDay[datetime] = forecast;
                        }
                        forecastsByDay = Object.keys(forecastsByDay).map((val) =>
                            forecastsByDay[val]
                        );
                        self.setState({
                            forecasts : forecastsByDay,
                            city : json.city_name,
                            state : json.state_code
                        });
                    });
                });
            });
        }
    }

    render() {
        const tiles = this.state.forecasts.map((forecast, index) => 
            <Tile key={index} data={forecast}/>
        );
        console.log(this.state.forecasts);
        return (
            <div>
                <h1>Forecast for {this.state.city}, {this.state.state}</h1>
                <div>{tiles}</div>
            </div>
        );
    }
}

export default Carousel;
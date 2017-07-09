import React from 'react';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude;
                let long = position.coords.longitude;
                let query = 'https://api.weatherbit.io/v1.0/forecast/3hourly?lat=' + lat + '&lon=' + long + '&units=I&key=8952d3cc7abd43498e59f4b993fdcac6';
                console.log(query);
                fetch(query).then(function (res) {
                    console.log('results');
                    console.log(res);
                    res.json().then(function(json) {
                        console.log(json);
                    });
                });
            });
        }
    }
    render() {
        return (
            <div>
                This is a Carousel
            </div>);
    }
}

export default Carousel;
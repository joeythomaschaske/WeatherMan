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
                let query = 'http://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + long + '&APPID=' + '8b240da43feb6914a2ebc7e890777055';
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
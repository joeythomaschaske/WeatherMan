import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : props.data,
            high : '',
            low : ''
        };
    }

    componentDidMount() {
        var currentHigh = -Infinity, currentLow = Infinity;
        for (var i = 0; i < this.props.data.length; ++i) {
            if (this.props.data[i].temp > currentHigh) {
                currentHigh = this.props.data[i].temp;
            }
            if (this.props.data[i].temp < currentLow) {
                currentLow = this.props.data[i].temp;
            }
        }

        this.setState({high : currentHigh, low : currentLow});
    }

    render() {
        return(
            <div>
                <h5>High: {this.state.high}</h5>
                <h5>Low: {this.state.low}</h5>
            </div>
        );
    }
}

export default Tile;
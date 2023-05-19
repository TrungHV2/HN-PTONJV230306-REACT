import React from 'react';

export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        let txtColor = {color: 'blue'};
        let bgColor = {
            backgroundColor: 'pink', 
            color: 'blue'
        };
        return (
            <div>
                <h1 style={bgColor}>{this.props.textContent}</h1>
            </div>
        )
    }
}
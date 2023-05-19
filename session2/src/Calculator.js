import React from 'react';

export class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <h1>Tổng của {this.props.numA} và {this.props.numB} là: {parseInt(this.props.numA) + parseInt(this.props.numB)}</h1>
        )
    }
}
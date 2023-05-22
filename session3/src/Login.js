import React, { Component } from 'react';

export default class Login extends Component {
    // Init
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
        console.log('constructor 1');
    }

    // Mounting
    // componentWillMount() {
    //     console.log('componentWillMount 2');
    // }
    render() {
        console.log('render');
        return (
            <>
                <div>Login  {this.props.data}</div>
            </>
        )
    }
    componentDidMount() {
        console.log('componentDidMount 3');
    }

    // Updating
    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps 4");
    // }
    // shouldComponentUpdate() {
    //     console.log("shouldComponentUpdate 5");
    //     return true;
    // }
    // componentWillUpdate() {
    //     console.log("componentWillUpdate 6");
    // }
    componentDidUpdate() {
        console.log("componentDidUpdate 7");
    }

    // UnMount
    componentWillUnmount() {
        console.log("componentWillUnmount 8");
    }

}

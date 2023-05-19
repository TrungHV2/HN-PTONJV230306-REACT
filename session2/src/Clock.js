import React from "react";

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date()
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                <h1>Bây giờ là</h1>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
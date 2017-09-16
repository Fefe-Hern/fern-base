/**
 * Created by Fefe on 8/10/2017.
 */

import React from 'react';

class Clock extends React.Component {

    /**
     * Constructs the clock component. This is the only area where state can be initialized as such.
     * @param props
     */
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}


export default Clock;
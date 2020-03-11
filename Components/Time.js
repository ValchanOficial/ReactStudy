import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            data: new Date().toString()
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((state, props) => {
                return {
                    time: state.time+1,
                    data: new Date().toString()
                }
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { time, data } = this.state;
        return (
            <div>
                Time: {time}
                <br/>
                Data: {data}
            </div>
        );
    }
}

export default Time;
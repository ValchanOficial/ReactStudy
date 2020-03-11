import React, { Component } from 'react';
import Time from './Time';

// function MyButton(params) {
//     function sayHello() {
//         alert('Hello!')
//     }
//     return <button onClick={sayHello}>Click Me</button>
// }

class MyButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: true
        }

        this.handleClick1 = this.handleClick1.bind(this);
    }

    handleClick1() {
        console.log(this);
        this.setState((state, props) => {
            return {isOn: !state.isOn};
        })
    }

    handleClick2 = () => {
        console.log(this);
    }

    handleClick3(event, a, b) {
        console.log(this);
        console.log(event);
        console.log(a);
        console.log(b);
    }

    handleClick4(a, b) {
        console.log(this);
        console.log(a);
        console.log(b);
    }

    // sayHello(event){
    //     event.preventDefault();
    //     alert('Hello!');
    // }

    render() {
        const {isOn} = this.state;
        return (
            <>
                <button onClick={this.handleClick1}>Way 1: {isOn ? 'Desligar' : 'Ligar'}</button>
                <button onClick={this.handleClick2}>Way 2</button>
                <button onClick={(event) => {this.handleClick3(event, 1, "exemplo")}}>Way 3</button>
                <button onClick={this.handleClick4.bind(this, 1, "exemplo")}>Way 4</button>
                <button onClick={this.handleClick4.bind(this, 1, "exemplo")}>Way 4</button>
                <br/>
                {isOn ? <Time/> : 'Time: OFF'}
            </>
        )
    }
}

export default MyButton;
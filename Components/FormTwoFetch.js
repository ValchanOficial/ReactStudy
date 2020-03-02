import React, { Component } from "react";

class FormTwo extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            list: []
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(`https://api.github.com/search/repositories?q=${this.inputName.current.value}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    list: data.items
                });
            });
    }

    render() {
        const { state } = this;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name: 
                        <input type="text" name="name" ref={this.inputName}/>
                    </label>
                </div>
                <input type="submit" value="Enviar"/>
                <ul>
                    {state.list.map(item => <li key={item.id}>{item.full_name}</li>)}
                </ul>
            </form>
        )
    }
}
export default FormTwo;
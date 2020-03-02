import React, { Component } from "react";

// Componente não controlado
class FormTwo extends Component {
    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.inputName.current.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name: 
                        <input defaultValue={'abcde'} type="text" name="name" ref={this.inputName}/>
                    </label>
                </div>
                <input type="submit" value="Enviar"/>
            </form>
        )
    }
}
export default FormTwo;
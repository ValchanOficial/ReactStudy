import React, { Component } from 'react';

const myList = [
    {id: 1, name: "Valchan", age: 25},
    {id: 2, name: "Maria", age: 23},
    {id: 3, name: "Pedro", age: 26},
    {id: 4, name: "José", age: 21},    
    {id: 5, name: "Gabriel", age: 27},      
    {id: 6, name: "Arya", age: 27}
]

class PeopleList extends Component {

    sayMyName = (person) => {
        alert(person.name);
    }

    render() {
        return (
            <ul>
                {myList.map(el => 
                    <li onClick={this.sayMyName.bind(this, el)} key={el.id} >{el.name} - {el.age}</li>
                )}
            </ul>
        );
    }
}

export default PeopleList;
import React, { Component } from 'react';
import  { Channel } from '../services/EventEmitter';

class ClickList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            hasError: false
        }
        this.setTotal = this.setTotal.bind(this);
        this.restart = this.restart.bind(this);
    }
    
    componentDidMount() {
        Channel.on('listItem:click', this.setTotal);
    }

    componentWillUnmount() {
        Channel.removeListener('listItem:click', this.setTotal);
    }

    // componentDidCatch
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    // Usado para enviar mensagem para server em caso de erro
    // Executado após o render
    // componentDidCatch(error) {
    //     this.setState({
    //         hasError: true
    //     })
    // }

    restart() {
        this.setState({
            hasError: false,
            total: 0
        })
    }

    setTotal() {
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })
    }

    render() {
        const { total, hasError } = this.state;
        if(hasError){
            return <button onClick={this.restart}>Restart</button>
        }
        return (
            <div>
                Total: {total}
                <ul>
                    {this.props.children}
                    {/* {this.props.children.map((item, index) => { 
                        return <item.type key={index} index={index} handleClick={this.setTotal}>
                                {item.props.children}
                        </item.type>
                    })} */}
                </ul>
            </div>
        );
    }
}

export default ClickList;


        // <ClickList number="123">
        //   <ClickListItem></ClickListItem>
        //   <ClickListItem></ClickListItem>
        //   <ClickListItem></ClickListItem>
        // </ClickList>
import React, {Component} from 'react';
import './Kamil.css';

class Kamil extends Component{
    render(){
        return (
            <div>
            <h1>Hello World</h1>
            <p>{this.props.myName}</p>
            </div>
        );
    }
}

export default Kamil;
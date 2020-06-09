import React, { Component } from 'react';
import "./Die.css"

class Die extends Component {
    render() {
        return <i className={`Die fas fa-dice-${this.props.face} ${this.props.rolling  && 'shaking'}`}/>
    }
}
export default Die 

//Note this.props.rolling  && 'shaking' is the same as this.props.roll ? shaking : ''
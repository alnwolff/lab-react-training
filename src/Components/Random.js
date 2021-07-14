import React, { Component } from 'react'
import '../Components/Random.css'

export default class Random extends Component {
    render() {

        const randomNum = Math.floor(Math.random() * (this.props.max - this.props.min)) + this.props.min;

        return (
            <p className='randomNum' ><b>Random Value between {this.props.min} and {this.props.max} {'=>'} {randomNum}</b></p>
        )
    }
}

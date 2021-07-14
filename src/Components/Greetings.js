import React, { Component } from 'react'
import './Greeting.css'

export default class Greetings extends Component {
    render() {

        let greet = '';

        if (this.props.lang === 'de') {
            greet = 'Hallo';
        } else if (this.props.lang === 'fr') {
            greet = 'Bonjour ';
        } else if (this.props.lang === 'es') {
            greet = 'Hola ';
        } else if (this.props.lang === 'en') {
            greet = 'Hello ';
        }

        return (
            <p className='greet'>
                {greet} {this.props.children}
            </p>
        )
    }
}

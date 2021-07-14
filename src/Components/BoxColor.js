import React, { Component } from 'react'

export default class BoxColor extends Component {
    render() {

        const square = {
            backgroundColor : 'rgb (' + this.props.r + this.props.g + this.props.b + ')'
        }

        return (
            <div style={square}>
                hola
            </div>
        )
    }
}

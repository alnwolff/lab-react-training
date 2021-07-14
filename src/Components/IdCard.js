import React, { Component } from 'react'
import './IdCard.css';


export default class IdCard extends Component {
    render() {
        return (
            <div className='container'>
            
                <img src={this.props.picture} />
                
                <div className='info'>
                    <p>
                        <b>First name:</b> {this.props.firstName}</p>
                    <p>
                        <b>Last name</b> Last name: {this.props.lastName}
                    </p>
                    <p>
                        <b>Gender:</b> {this.props.gender}
                    </p>
                    <p>
                        <b>Height:</b> {this.props.height}
                    </p>
                    <p>
                        <b>Birth:</b> {this.props.birth.toString().slice(0,15)}
                    </p>
                </div>

            </div>
        )
    }
}



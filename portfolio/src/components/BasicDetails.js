import React, { Component } from 'react'
import '../App.css'
class BasicDetails extends Component {
    render() {
        return (
            <div className = "basic-details">
                <strong><h4>{this.props.name}</h4></strong>
                <p>{this.props.designation}</p>
                <h6>AGE: {this.props.age}</h6>
                <h6>PHONE: {this.props.phone}</h6>
                <h6>EMAIL: {this.props.email}</h6>
                <h6>ADDRESS:{this.props.address}</h6>
            </div>
        )
    }
}

export default BasicDetails

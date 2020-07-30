import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class ExtraCurr extends Component {
    render() {
        const extraCurr = this.props.extraCurr
        const extraCurrItems =  extraCurr.map((activity)=>{
            return <li><h5>{activity}</h5></li>
        })
        return (
            <Container className = "container-extracurr">
            <h3><strong>Extra-Curricular</strong></h3>
                <ul>
                    {extraCurrItems}
                </ul>
                <br/>
            </Container>
        )
    }
}

export default ExtraCurr
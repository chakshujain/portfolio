import React, { Component } from 'react'
import '../App.css'
class ExtraCurr extends Component {
    render() {
        const extraCurr = this.props.extraCurr
        const extraCurrItems =  extraCurr.map((activity)=>{
            return <li><h5>{activity}</h5></li>
        })
        return (
            <div className = "container container-extracurr">
            <h3><strong>Extra-Curricular</strong></h3>
                <ul>
                    {extraCurrItems}
                </ul>
                <br/>
            </div>
        )
    }
}

export default ExtraCurr
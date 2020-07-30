import React, { Component } from 'react'
import '../App.css'
class PosnOfRes extends Component {
    render() {
        const posnOfRes = this.props.posnOfRes
        const posnOfResItems =  posnOfRes.map((posn)=>{
            return <li><h5>{posn}</h5></li>
        })
        return (
            <div id = "posn-of-res" className = "container container-pos-of-res">
            <h3><strong>Position of Responsibilities</strong></h3>
                <ul>
                    {posnOfResItems}
                </ul>
                <br/>
            </div>
        )
    }
}

export default PosnOfRes
import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class PosnOfRes extends Component {
    render() {
        const posnOfRes = this.props.posnOfRes
        const posnOfResItems =  posnOfRes.map((posn)=>{
            return <li><h5>{posn}</h5></li>
        })
        return (
            <Container id = "posn-of-res" className = "container-pos-of-res">
            <h3><strong>Position of Responsibilities</strong></h3>
                <ul>
                    {posnOfResItems}
                </ul>
                <br/>
            </Container>
        )
    }
}

export default PosnOfRes
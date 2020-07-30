import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class AcadAchvs extends Component {
    render() {
        const acadachvs = this.props.acadachvs
        const acadachvItems =  acadachvs.map((acadachv)=>{
            return <li><h5>{acadachv}</h5></li>
        })
        return (
            <Container className = "container container-acadachvs">
            <h3><strong>Academic Achievements..</strong></h3>
                <ul>
                    {acadachvItems}
                </ul>
                <br/>
            </Container>
        )
    }
}

export default AcadAchvs
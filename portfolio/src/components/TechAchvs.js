import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class TechAchvs extends Component {
    render() {
        const techachvs = this.props.techachvs
        const techachvItems = techachvs.map((techachv)=>{
            return <li><h5>{techachv}</h5></li>
        })
        return (
            <Container className = "container-techachvs" id = "achievements">
                <h3><strong>Technical Achievements..</strong></h3>
                <ul>
                    {techachvItems}
                </ul>
                <br/>
            </Container>
        )
    }
}

export default TechAchvs

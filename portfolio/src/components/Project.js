import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap';
import '../App.css'
class Project extends Component {
    render() {
        const project = this.props.project
        return (
            <div className = "project-container">
                <Row>
                    <Col sm={12} lg={6} >
                        <img className= "project-image"  src={project.image} alt="Not Unavailable"/>
                    </Col>
                    <Col sm={12} lg={6}>
                        <div className= "project-info">
                            <h4><strong>{project.title}</strong></h4>
                            <h6>({project.interval})</h6>
                            <div className="project-sub-info">
                                <ul>
                                    <li><h6>{project.desc}</h6></li>
                                    <li><h6>Technologies Used: {project.techUsed}</h6></li>
                                    <li><h6>Link: <a href = {project.link}>{project.link}</a></h6></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Project

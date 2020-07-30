import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'

 class Intro extends Component {
    render() {
        return (
            <Container className = "intro-container">
            <h3><strong>Hi..</strong></h3>
                <h6>
                I am looking for opportunities to build my carrier that would help me in achieving greater practical excellence in software
                 industry, exceptional with hardworking nature along with good communication skill to explore
                  the requirements and come up with innovative solution.
                 I am good with deadlines and always enthusiastic to learn new skills.
                
                </h6>
           <a className="btn btn-primary" href='/files/Chakshu_jain_resume.pdf' download = "Chakshu's_Resume.pdf">Download CV</a>
            </Container>
        )
    }
}

export default Intro

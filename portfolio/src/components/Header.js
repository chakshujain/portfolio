import React, { Component } from 'react'
import {Nav} from 'react-bootstrap'
// import {NavHashLink as NavLink} from 'react-router-hashlink'
import Scrollchor from 'react-scrollchor';
class Header extends Component {
    render() {
        return (
            <div className = "header">
                <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                <Scrollchor animate={{offset: 20, duration: 1000}} to="#home" className="nav-link">Hello</Scrollchor>
                </Nav.Item>
                <Nav.Item>
                <Scrollchor animate={{offset: 20, duration: 1000}} to="#resume" className="nav-link">Resume</Scrollchor>
                </Nav.Item>
                <Nav.Item>
                <Scrollchor animate={{offset: 20, duration: 1000}} to="#projects" className="nav-link">Projects</Scrollchor>
                </Nav.Item>
                <Nav.Item>
                <Scrollchor animate={{offset: 20, duration: 1000}} to="#achievements" className="nav-link">Achievements</Scrollchor>
                </Nav.Item>
                <Nav.Item>
                <Scrollchor animate={{offset: 20, duration: 1000}} to="#contact" className="nav-link">Contact Me</Scrollchor>
                </Nav.Item>
                </Nav>
            </div>
        )
    }
}

export default Header

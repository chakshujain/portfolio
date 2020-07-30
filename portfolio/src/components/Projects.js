import React, { Component } from 'react'
import '../App.css'
import Project from './Project'
class Projects extends Component {
    render() {
        const projects = this.props.projects
        const projectItems = projects.map((project)=>{
            return <Project project = {project} />
        })
        return (
            <div className = "projects-container" id = "projects">
            <h3><strong>Projects..</strong></h3>
                {projectItems}
            </div>
        )
    }
}

export default Projects

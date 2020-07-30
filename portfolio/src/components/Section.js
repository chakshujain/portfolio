import React, { Component } from 'react'
import Photo from './Photo'
import BasicDetails from './BasicDetails'
import '../App.css'
class Section extends Component {
    render() {
        let props = {
            name:"Chakshu Jain",
            designation:"Full Stack Developer",
            age:"21",
            phone:"7206838191",
            email:"mrck572@gmail.com",
            address:" #420, Krishan Nagar Tehsil Camp Panipat ,132103"
}
        return (
            <div className= "section-divider" id = "home">
            <Photo />
            <BasicDetails {...props} />
            </div>
        )
    }
}

export default Section

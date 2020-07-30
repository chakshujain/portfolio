import React, { Component } from 'react'
import mypic from '../mypic.jpg'
class Photo extends Component {
    render() {
        const mystyle = {
            width:"200px",
            height:"200px"
        }
        return (
            <div className="photo">
                <img style = {mystyle} src={mypic} alt="Loading Error"/>
            </div>
        )
    }
}

export default Photo

import React, { Component } from 'react'
import '../App.css'
class TechAchvs extends Component {
    render() {
        const techachvs = this.props.techachvs
        const techachvItems = techachvs.map((techachv)=>{
            return <li><h5>{techachv}</h5></li>
        })
        return (
            <div className = "container container-techachvs" id = "achievements">
                <h3><strong>Technical Achievements..</strong></h3>
                <ul>
                    {techachvItems}
                </ul>
                <br/>
            </div>
        )
    }
}

export default TechAchvs

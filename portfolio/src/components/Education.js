import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import '../App.css'
class Education extends Component {
    render() {
        const edu = this.props.education
        const listItems = edu.map((item) => {
            return(
            <li>
                    <div style = {{display:"flex",flexDirection:"row",flexWrap:'wrap',justifyContent:'space-between'}}>
                        <h5>{item.title}</h5>
                        <span>({item.interval})</span>
                    </div>
                    <div style = {{display:"flex",flexDirection:"row",flexWrap:'wrap',justifyContent:'space-between'}}>
                        <h6>{item.name}</h6>
                        <span>({item.percentage})</span>
                    </div>
                    <br/>
                        
            </li>)
        })
        return (
            <div className="education-container">
            <h3><strong>Education..</strong></h3>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

export default Education

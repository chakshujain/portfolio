import React, { Component } from 'react'
import SkillBar from 'react-skillbars'
import {Button} from 'react-bootstrap' 
class Skills extends Component {
    render() {
        const colors = {
            bar: 'orange',
            title: {
                text: 'blue',
                background: '#fff'
            }
        }
        const techs = this.props.techs
        const techItems = techs.map((tech)=>{
            return (
                <Button className="btn btn-info">{tech}</Button>
            )
        })

        return (
            <div>
                <h3><strong>Languages..</strong></h3>
                <br/>
                <SkillBar skills={this.props.languages} height = {'3vh'} colors = {colors}/>
                <br/>
                <h3><strong>Technologies..</strong></h3>
                <br/>
                <div style = {{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    {techItems}
                </div>
                <br/>
            </div>
        )
    }
}

export default Skills

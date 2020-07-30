import React, { Component } from 'react'
import SkillBar from 'react-skillbars'
import {Button, Col, Row} from 'react-bootstrap' 
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
                <Col xs={4} lg={2} ><Button style={{marginBottom: 20}} className="btn btn-info">{tech}</Button></Col>
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
                <Row> 
                    {techItems}
                </Row>
                   
           
                <br/>
            </div>
        )
    }
}

export default Skills

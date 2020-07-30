import React, { Component } from 'react'
import '../App.css'
 class Contact extends Component {
    state = {
        name:'',
        email:'',
        message:''
    }
    nameChangeHandler = (event)=>{
        this.setState({
            name:event.target.value
        })
    }
    emailChangeHandler = (event)=>{
        this.setState({
            email:event.target.value
        })
    }
    messageChangeHandler = (event)=>{
        this.setState({
            message:event.target.value
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
    }
    render() {
        const links = this.props.links
        const linkItems = []
        const otherinfo = this.props.otherinfo
            
        for (var link in links){
            linkItems.push(<a className = "btn btn-primary" href = {links[link]}>{link}</a>)
        }
        
        return (
        <div className=" container container-contact-main" id = "contact">
            <h3><strong>Get in touch..</strong></h3>
            <div className="contact-container">
                <div className="contact-info">
                    <h6>Phone No. : {otherinfo.phone}</h6>
                    <h6>Email:  {otherinfo.email}</h6>
                    <br/>
                    <div className="links-box">{linkItems}</div>
                </div>
                
            </div>
        </div>
        )
    }
}

export default Contact

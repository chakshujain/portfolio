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
                <div className="contact-form">

                <form className="contact-form-1"  method="POST" onSubmit={this.handleSubmit}>
                    <h4>Or just write me here..</h4>
                    <br/>
                    <div className="form-group">
                        <input type="text" value = {this.state.name} className="form-control" placeholder= "Your Name" onChange = {this.nameChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <input type="email" value = {this.state.email} className="form-control" aria-describedby="emailHelp" placeholder= "Your Email" onChange = {this.emailChangeHandler}/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" value = {this.state.message} rows="5" placeholder="Type the message here" onChange = {this.messageChangeHandler}></textarea>
                    </div>
                    <button style = {{textAlign:'center'}}type="submit" className="btn btn-primary">Submit</button>
                </form>

                </div>
            </div>
        </div>
        )
    }
}

export default Contact

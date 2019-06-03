import React, {Component} from 'react';

import Header from './Header';
import axios from 'axios';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            senderName: "",
            senderEmail: "",
            message: ""
        };
    }

    handleChange = e => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
           return { 
                    ...prevState, [name]: value
                      }
        }
        );
    }

    sendMessage = () => {
        axios.post('http://localhost:5000/api/messages', {
            senderName: this.state.senderName,
            senderEmail: this.state.senderEmail,
            message: this.state.message
        })
        .then(res => {
            if(res.status > 200 && res.status < 400) {
                   this.setState(prevState => {
                     return {
                       ...prevState,
                       successMessage: "Message sent"
                     };
                   });
               }
             });
    };

    render() {
    return (
        <div>
            <Header username={this.props.username}/>
            <div className="container">
                <h1>Contact us</h1>
                <br />
                {this.state.successMessage ? <h2>{this.state.successMessage}</h2> : 
                <form onChange={this.handleChange}>
                    <div className="form-group">
                        <label htmlFor="name">Your name:</label>
                        <input type="name" className="form-control" name="senderName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your email address:</label>
                        <input type="email" className="form-control" name="senderEmail" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message:</label>
                        <textarea className="form-control" name="message" />
                    </div>
                    <button type="button" className="btn btn-default" onClick={() => this.sendMessage()}>Send</button>
                </form>}
            </div>
        </div>
    )
    }
}

export default Contact
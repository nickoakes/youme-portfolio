import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import Header from './Header';
import axios from 'axios';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            messageDeleted: ""
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/messages')
        .then(res => {
            this.setState({
                messages: res.data
            });
        });
    }

    deleteMessage = (id) => {
        let messageId = id
        axios.delete(`http://localhost:5000/api/messages/${id}`)
        .then(res => {
            console.log(res.status)
            this.props.history.push('/messages')
        })
        .then(() => {
            this.setState(prevState => {
                return {
                ...prevState,
                messageDeleted: messageId
                };
            });
        })
    }

    createMessageElements = () => {
        let messages = this.state.messages.map(
            message => {
                let truncatedMessage;
                if(message.message.length > 30) {
                    truncatedMessage = message.message.substring(0, 30) + "...";
                } else {
                    truncatedMessage = message.message
                }
                return(
                <React.Fragment key={"ml-" + message.id}>
                    <tr>
                        <td>{message.senderName}</td>
                        <td>{message.senderEmail}</td>
                        
                        <td><a data-toggle="modal" data-target={"#message-" + message.id}>{truncatedMessage}</a></td>
                        <td>
                        {this.state.messageDeleted === message.id ? <h3>Message deleted</h3> :
                            <button type="button" className="btn btn-default" onClick={() => this.deleteMessage(message.id)}>
                                Delete
                            </button>}
                        </td>
                    </tr>
                </React.Fragment>
                )
            }    
        )
        return messages
    }

    createModals = () => {
        let modals = this.state.messages.map(
            message => {
                return(
                    <div id={"message-" + message.id} key={"modal-" + message.id} className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h1 className="modal-title">{message.senderName}</h1>
                                <h2>{message.senderEmail}</h2>
                            </div>
                            <div className="modal-body">
                                <p>{message.message}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">닫기</button>
                            </div>
                            </div>
                        </div>
                        </div>
                )
            }
        )
        return modals
    }

    render() {
        return(
            <div>
                <Header username={this.props.username}/>
                <div className="container">
                    <h1>Messages</h1>
                    <br />
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th id="message-holder">Message</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.createMessageElements()}
                        </tbody>
                    </table>
                    {this.createModals()}
                    </div>
                </div>
        )
    }
}

export default withRouter(Messages)
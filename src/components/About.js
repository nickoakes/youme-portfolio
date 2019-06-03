import React, {Component} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

import Header from './Header';
import youme from '../images/youme.png';

class About extends Component {

constructor(props) {
    super(props);
    this.state = {
        title: "",
        content: ""
    };
}

componentDidMount() {
    axios.get('http://localhost:5000/api/about')
    .then(res => {
        this.setState({
            title: res.data[0].title,
            content: res.data[0].content
        });
    });
    }

    render() {
    return (
        <div>
            <Header username={this.props.username}/>
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <img src={youme} className="img-circle" width="200px" alt="손유미" />
                </div>
                <div className="col-sm-8">
                    <h1>{this.state.title}</h1>
                    <h2>영상 번역</h2>
                    <p>{this.state.content}</p>
                    {this.props.username ? <NavLink to="/updateabout">Update page</NavLink> : ""}
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default About
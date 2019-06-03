import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';

import Header from './Header';
import youme from '../images/youme.png';

class UpdateAbout extends Component {

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

    updateAbout = () => {
        axios.put('http://localhost:5000/api/about',
        {
            title: this.state.title,
            content: this.state.content
        },
        {auth: {username: this.props.username, password: this.props.password}}
        )
        .then(res => {
           if(res.status > 200 && res.status < 400) {
                  this.setState(prevState => {
                    return {
                      ...prevState,
                      successMessage: "Page updated successfully"
                    };
                  });
                  this.props.history.push('/');
              }
            });
    };

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
                <form onChange={this.handleChange}>
                    <div className="form-group">
                        <label htmlFor="title">Page title:</label>
                        <input type="text" className="form-control" name="title" id="about-title" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Page content:</label>
                        <textarea className="form-control" name="content" id="about-content" value={this.state.content} />
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.updateAbout}>Update</button>
                    <Link type="button" className="btn btn-default" to="/">Cancel</Link>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
    }
}

export default withRouter(UpdateAbout)
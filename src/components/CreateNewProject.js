import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import Header from './Header';
import axios from 'axios';

class CreateNewProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
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

    createNewProject = () => {
        axios.post('http://localhost:5000/api/projects',
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
                       successMessage: "Project created successfully"
                     };
                   });
                   this.props.history.push('/projects');
               }
             });
    };

    render() {
    return (
        <div>
            <Header username={this.props.username}/>
            <div className="container">
            <h1>Add new project</h1>
            <br />
            <form onChange={this.handleChange}>
                <div className="form-group">
                    <label htmlFor="title">Project title:</label>
                    <input type="text" className="form-control" name="title" id="project-title" />
                </div>
                <div className="form-group">
                    <label htmlFor="content">Project content:</label>
                    <textarea className="form-control" name="content" id="project-content" />
                </div>
                <button type="button" className="btn btn-default" onClick={this.createNewProject}>Add New Project</button>
                <Link type="button" className="btn btn-default" to="/projects">Cancel</Link>
            </form>
            </div>
        </div>
    )
    }
}

export default withRouter(CreateNewProject)
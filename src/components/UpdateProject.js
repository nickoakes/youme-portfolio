import React, {Component} from 'react';
import axios from 'axios';
import {withRouter, Link} from 'react-router-dom';

import Header from './Header';

class UpdateProject extends Component {

constructor(props) {
    super(props);
    this.state = {
        title: "",
        content: ""
    };
}

componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`http://localhost:5000/api/projects/${params.id}`)
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

    updateProject = () => {
        const { match: { params } } = this.props;
        axios.put(`http://localhost:5000/api/projects/${params.id}`,
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
                      successMessage: "Project updated successfully"
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
                <form onChange={this.handleChange}>
                    <div className="form-group">
                        <label htmlFor="title">Project title:</label>
                        <input type="text" className="form-control" name="title" id="project-title" value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">Project content:</label>
                        <textarea className="form-control" name="content" id="project-content" value={this.state.content} />
                    </div>
                    <button type="button" className="btn btn-default" onClick={() => this.updateProject()}>Update</button>
                    <Link type="button" className="btn btn-default" to="/projects">Cancel</Link>
                </form>
                </div>
            </div>
    )
    }
}

export default withRouter(UpdateProject)
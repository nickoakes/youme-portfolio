import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

import Header from './Header';
import axios from 'axios';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/projects')
        .then(res => 
            this.setState({
                projects: res.data
            })
            );
    }

    deleteProject = (id) => {
        axios.delete(`http://localhost:5000/api/projects/${id}`,
        {auth: {username: this.props.username, password: this.props.password}}
        )
        .then(res => {
          if(res.status > 200 && res.status < 400) {
        this.setState(prevState => {
          return {
          ...prevState,
          message: "Project deleted"
          };
        });
        this.props.history.push('/projects');
      }
    })
}

    createProjectPanels = () => {
        let projectPanels = this.state.projects.map(project => {
        return(
        <React.Fragment>
        <div className="col-sm-4">
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3>{project.title}</h3>
                </div>
                <div className="panel-body">
                    <p>{project.content}</p>
                </div>
                {this.props.username ? 
                <React.Fragment>
                <button type="button" className="btn btn-default" onClick={() => this.deleteProject(project.id)}>Delete Project</button>
                <Link type="button" className="btn btn-default" to={'/projects/update/' + project.id} >Update Project</Link>
                </React.Fragment>
                : ""}
            </div>
        </div>
        </React.Fragment>
        )
        })
        return projectPanels
    }

    render() {
    return (
        <div>
            <Header username={this.props.username}/>
            <div className="container">
            <h1>Projects</h1>
            {this.props.username ? <Link to="/createnewproject">Add new project</Link> : ""}
            <br />
            <div className="row">
                {this.createProjectPanels()}
            </div>
            </div>
        </div>
    )
    }
}

export default withRouter(Projects)
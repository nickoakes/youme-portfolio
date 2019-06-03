import React, {Component} from 'react';

import Header from './Header';

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
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

    render() {
    return (
        <div>
            <Header username={this.props.username}/>
                <div className="container">
                <h1>Administrator Sign In</h1>
                {this.props.message ? <h2>{this.props.message}</h2> : ""}
                {this.props.username ? <h2>Sign-in successful!</h2> :
                <form onChange={this.handleChange}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input name="username" className="form-control" id="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input name="password" type="password" className="form-control" id="pwd" />
                    </div>
                    <button type="button" className="btn btn-primary" 
                        onClick={() => this.props.signIn(this.state.username, this.state.password)}>Submit</button>
                    </form>
                    }
            </div>
        </div>
    )
    }
}

export default SignIn
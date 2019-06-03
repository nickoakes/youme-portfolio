import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import axios from 'axios';
import * as Cookies from 'js-cookie';
import './style.css';
import 'jquery';

import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import UpdateAbout from './components/UpdateAbout';
import CreateNewProject from './components/CreateNewProject';
import UpdateProject from './components/UpdateProject';
import Messages from './components/Messages';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: Cookies.get('username') || "",
      password: Cookies.get('password') || "",
      authUser: Cookies.get('authUser') || false
    };
  }

signIn = (username, password) => {
  axios.get('http://localhost:5000/api/users', {auth: {username: username, password: password}})
  .then(res => {
    this.setState({
      username: res.data.username,
      password: password,
      authUser: true,
      message: ""
    })

    Cookies.set('id', res.data.id)
    Cookies.set('username', res.data.username)
    Cookies.set('password', res.data.password)
    Cookies.set('authUser', true)
  })
  .catch(err => {
    this.setState(prevState => {
      return {
        ...prevState,
        message: "Username and/ or password not recognised"
      };
    });
})
} 

signOut = () => {
  this.setState({
    username: "",
    password: "",
    authUser: false
  })

  Cookies.remove('id')
  Cookies.remove('username')
  Cookies.remove('password')
  Cookies.remove('authUser')
}

  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <About username={this.state.username}/>} />
        <Route path="/services" render={() => <Services username={this.state.username} />} />
        <Route exact path="/projects" render={() => <Projects username={this.state.username} password={this.state.password} />} />
        <Route path="/contact-us" render={() => <Contact username={this.state.username} />} />
        <Route path="/signin" render={() => <SignIn signIn={this.signIn} username={this.state.username} message={this.state.message}/>} />
        <Route path="/signout" render={() => <SignOut signOut={this.signOut} />} />
        <Route path="/updateabout" render={() => <UpdateAbout username={this.state.username} password={this.state.password}/>} />
        <Route path="/createnewproject" render={() => <CreateNewProject username={this.state.username} password={this.state.password} />} />
        <Route path="/projects/update/:id" render={() => <UpdateProject username={this.state.username} password={this.state.password} />} />
        <Route path="/messages" render={() => <Messages username={this.state.username} />} />
      </Switch>
    </BrowserRouter>
  )
  }
}

export default App;

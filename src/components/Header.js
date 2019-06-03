import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
    <nav className="navbar">
    <div className="container-fluid">
        <div className="navbar-header">
            <NavLink exact className="navbar-brand" to="/">영상 번역가 손유미</NavLink>
        </div>
        <ul className="nav navbar-nav">
            <li className="nav-item"><NavLink exact to="/" activeClassName="current" className="nav-link">Home </NavLink></li>
            <li className="nav-item"><NavLink exact to="/services" activeClassName="current" className="nav-link">Services</NavLink></li>
            <li className="nav-item"><NavLink exact to="/projects" activeClassName="current" className="nav-link">Projects</NavLink></li>
            <li className="nav-item"><NavLink exact to="/contact-us" activeClassName="current" className="nav-link">Contact us</NavLink></li>
            {props.username ? <li className="nav-item"><NavLink exact to="/messages" activeClassName="current" className="nav-link">Messages</NavLink></li> : ""}
        </ul>
        <ul className="nav navbar-nav right">
        {props.username ? <li className="nav-item"><NavLink exact to="/signout" activeClassName="current">Sign Out</NavLink></li> :
            <li className="nav-item"><NavLink exact to="/signin" activeClassName="current">Admin Sign In</NavLink></li>}
        </ul>
    </div>
    </nav>
    )
}

export default Header
import React from 'react';

import Header from './Header';

const Contact = (props) => {
    return (
        <div>
            <Header username={props.username}/>
            <div className="container">
                <h1>Contact us</h1>
                <br />
                <form action="mailto:nickoakes1@googlemail.com" method="post" encType="text/plain">
                    <div className="form-group">
                        <label htmlFor="name">Your name:</label>
                        <input type="name" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your email address:</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message:</label>
                        <textarea className="form-control" id="message" />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
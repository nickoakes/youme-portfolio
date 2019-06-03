import React from 'react';
import {Redirect} from 'react-router-dom';

const SignOut = (props) => {
    props.signOut();
    return (
        <Redirect to="/" />
    )
}

export default SignOut
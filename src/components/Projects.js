import React from 'react';

import Header from './Header';

const Projects = (props) => {
    return (
        <div>
            <Header username={props.username}/>
            <div className="container">
            <h1>Projects</h1>
            <br />
            <div className="row">
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3>Project</h3>
                        </div>
                        <div class="panel-body">
                            <p>TextTextTextTextText</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Projects
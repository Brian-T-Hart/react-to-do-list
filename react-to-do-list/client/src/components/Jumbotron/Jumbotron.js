import React from "react";
import "./Jumbotron.css";

const Jumbotron = () =>
    <div className="row container-fluid">
        <div className="col-md-10 col-md-offset-1">
            <div className="jumbotron">
                <h1 className="text-center">React-To-Do</h1>
                <h5 className="text-center">This is a simple to do list made using React.</h5>
            </div>
        </div>
    </div>

export default Jumbotron;

import React from 'react';
import { Component } from "react";
import API from "../../utils/API.js";

class AddToDo extends Component {
    constructor() {
        super();
        this.state = {
            name: "Brian",
            newToDo: ""
    }}

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const toDo = this.state.newToDo;
        console.log("the new todo item is: " + toDo);
        API.saveToDo({
            toDo: this.state.newToDo
        })
            .then(res => {
                console.log("res from post..saveToDo", res);
                // PubSub.publish('UPDATE_LIST', 'update Now!');
            })
            .catch(err => console.log(err));
};

render () {
    return (
    <div className="row container-fluid">
        <div className="col-md-5 col-md-offset-1">
            <div className="input-group">
                    <form action="/newToDo">
                    <div className="form-group">
                        <input id="newToDoInput"
                            value={this.state.newToDo}
                            onChange={this.handleInputChange}
                            name="newToDo"
                            placeholder="Add a new to-do item"
                            required
                            />
                        {/* <input id="AddToDoInput" type="text" className="form-control" placeholder="add a new to-do" value={this.state.toDo} onChange={this.handleInputChange} /> */}
                    <button type="submit" id="submitToDoBtn" className="btn btn-default" onClick={this.handleFormSubmit} >Submit</button>
                    </div>
                </form>
                {/* <div>{this.state.name}</div>
                <div>{this.state.newToDo}</div> */}
            </div>
        </div>
    </div>
    )
};
}

export default AddToDo;
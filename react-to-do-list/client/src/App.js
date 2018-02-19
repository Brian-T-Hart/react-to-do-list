import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import AddToDo from './components/AddToDo';
import ToDoItem from './components/ToDoItem/ToDoItem';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <AddToDo />
        <ToDoItem />
      </div>
    )
  }
}

export default App;

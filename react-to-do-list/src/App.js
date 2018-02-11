import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import AddToDo from './components/AddToDo';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <AddToDo />
      </div>
    )
  }
}

export default App;

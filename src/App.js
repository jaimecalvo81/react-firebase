import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      boo: 11
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('react');
    const booRef = rootRef.child('boo');
    booRef.on('value', snap => {
      this.setState({
        boo: snap.val()
      });
    });
  }


  render() {
    return (
      <div className="App">
        <h1>{this.state.boo}</h1>
      </div>
    );
  }
}

export default App;

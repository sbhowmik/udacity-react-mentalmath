import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowChallenge from './ShowChallenge'

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
//const numQuestions = 2;
//const numCorrect = 1;

class App extends Component {
  
  //define state
  state = {
    numQuestions: 12,
    numCorrect: 11   
  }

  //true anser handler
  trueHandler = () => {
    this.setState((currentState) => ({
      //console.log('IAH')
      numCorrect: currentState.numCorrect + 1
    }))
  }
  
  //false answer handler
  

  //render method
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ShowChallenge 
        value1={value1}
        value2={value2}
        value3={value3}
        proposedAnswer = {proposedAnswer}
        numCorrect = {this.state.numCorrect}
        numQuestions = {this.state.numQuestions}
        onTruePress = {this.trueHandler}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowChallenge from './ShowChallenge'

class App extends Component {
  
  //define state
  state = {
    numQuestions: 0,
    numCorrect: 0   
  }

  //true answer handler
  answerHandler = (wasAnswerCorrect) => {
	//if answer is true increment correct
    if (wasAnswerCorrect) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1,
    }));
    }//if end
    
    //increment the question anyways
    this.setState(currState => ({
      numQuestions: currState.numQuestions + 1,
    }));
  };//answerHandler ends

  //render method
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <ShowChallenge 
        //data passage
        numCorrect = {this.state.numCorrect}
        numQuestions = {this.state.numQuestions}
        //function passage
        onAnswerPress = {this.answerHandler}
        />
      </div>
    );
  }
}

export default App;

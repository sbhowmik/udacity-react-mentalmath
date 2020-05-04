import React, { Component } from 'react';


//ShowChallenge component
class ShowChallenge extends Component {
  
  //constructor()
  constructor(props) {
    super(props);
    const challengeData = this.makeNewChallenge();
    this.state = {
      value1: challengeData[0],
      value2: challengeData[1],
      value3: challengeData[2],
      proposedAnswer: challengeData[3],
      answerVeracity: challengeData[4],
  	};
  }


  //makeNewChallenge();
  makeNewChallenge = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    let answerVeracity = 'F';
    
    //set answer veracity to true if answer is true
    if (proposedAnswer === (value1 + value2 + value3)){
      answerVeracity = 'T';
    } 
    
    //return the clallenge data
    return [value1, value2, value3, proposedAnswer, answerVeracity];
    
  };//eof()

  //updateState()
  updateState = newChallengeData => {
    this.setState(currState => ({
      value1: newChallengeData[0],
      value2: newChallengeData[1],
      value3: newChallengeData[2],
      proposedAnswer: newChallengeData[3],
      answerVeracity: newChallengeData[4],
    }));
  };
    
  //handleResponse()
  handleResponse = event => {
    const givenAnswer = event.target.name;
    let wasAnswerCorrect = false; //pesimistically assume false
    
    //debug steps
    //console.log('Given Answer:'+ givenAnswer);
    //console.log('State Answer:'+ this.state.answerVeracity);
    
    //determine answer correct
    if (givenAnswer === this.state.answerVeracity){
      wasAnswerCorrect = true;
    }
    
    //debug steps
    //console.log('Was Answer Correct:'+ wasAnswerCorrect);
    
    //call callback on call press with outcome
    this.props.onAnswerPress(wasAnswerCorrect);
    
    //time to retrigger the challenge question again
    const newChallangeData = this.makeNewChallenge();
    this.updateState(newChallangeData);
  }


  //render fn
  render() {
    const { value1, value2, value3, proposedAnswer } = this.state;
    return (
      <div className="game">
        <h2>Mental Math</h2>         
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button
        onClick={this.handleResponse}
        name="T"
        >True</button>
        <button
        onClick={this.handleResponse}
        name="F"
        >False</button>
        <p className="text">
          Your Score: {this.props.numCorrect}/{this.props.numQuestions}
        </p>
      </div>
    )    
  }

}

export default ShowChallenge
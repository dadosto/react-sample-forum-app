import React from 'react';
import ForumAnswerComponent from './ForumAnswer.react.js';
import ForumDispatcher from '../dispatcher.js';
import ForumActions from '../actions/ForumActions.js';

class ForumAnswersComponent extends React.Component {

  constructor(props) {
    super(props);
    this.onMarkCorrect = this.onMarkCorrect.bind(this);
  }
  
  onMarkCorrect(id) {
    ForumActions.markAnswerCorrect(id);
  }
  
  render() {
    
    var allAnswers = this.props.allAnswers;
    var answers = [];
    
    for (var key in allAnswers) {
      answers.push(<ForumAnswerComponent key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this.onMarkCorrect} /> );
    }
    
		return (
			<div>
        {answers}
			</div>
		);
	}
  
}

export default ForumAnswersComponent;
import React from 'react';
import ForumHeaderComponent from './ForumHeader.react.js';
import ForumQuestionComponent from './ForumQuestion.react.js';
import ForumAnswersComponent from './ForumAnswers.react.js';
import ForumAddAnswerBoxComponent from './ForumAddAnswerBox.react.js';
import ForumDispatcher from '../dispatcher.js';
import ForumStore from '../stores/ForumStore.js';
import ForumActions from '../actions/ForumActions.js';

class ForumComponent extends React.Component {
  
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      allAnswers: ForumStore.getAnswers()
    };
    this.onAddAnswer = this.onAddAnswer.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  componentDidMount() {
    ForumStore.addChangeListener(this.onChange);
  }
  
  componentWillUnmount() {
    ForumStore.removeListener(this.onChange);
  }
  
  onAddAnswer(answerText) {
    ForumActions.addNewAnswer(answerText);
  }
  
  onChange() {
    this.setState({
      allAnswers: ForumStore.getAnswers()
    });
  }
  
	render() {
		return (
			<div>
				<ForumHeaderComponent />
      
        <div className="container">
          <ForumQuestionComponent />
          <hr />
          <ForumAnswersComponent allAnswers={this.state.allAnswers} />
          <hr />
          <h4>Add an answer</h4>
          <ForumAddAnswerBoxComponent onAddAnswer={this.onAddAnswer} />
        </div>
        
			</div>
		);
	}
  
}

export default ForumComponent;
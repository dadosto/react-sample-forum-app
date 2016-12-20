import React from 'react';

class ForumAnswerComponent extends React.Component {
	
  constructor(props) {
    super(props);
    this.markCorrect = this.markCorrect.bind(this);
  }
  
  markCorrect() {
    this.props.onMarkCorrect(this.props.id);
  }
  
  render() {
          
    var answer = this.props.answer;
    
    var markAnswer;
    
    
    
    if (!answer.correct) {
      markAnswer = (
        <div className="pull-right">
          <small>
            <a href="#" onClick={this.markCorrect}>Mark as correct</a>
          </small>
        </div>);
    } 
    
    var classNames = 'panel-body';
    
    if (answer.correct) {
      classNames += ' bg-success';
    }
    
    return (
      <div className="panel panel-default">
        <div className={classNames}>
          {answer.body}
          {markAnswer}
        </div>
      </div>
    );  
  }
  
};

export default ForumAnswerComponent;
import ForumConstants from '../constants/ForumConstants.js';
import ForumDispatcher from '../dispatcher.js';

var ForumActions = {
  
  markAnswerCorrect: (id) => {
    ForumDispatcher.dispatch({
      actionType: ForumConstants.FORUM_ANSWER_MARKED_CORRECT,
      id: id
    });
  },
  
  addNewAnswer: (answerText) => {
     ForumDispatcher.dispatch({
      actionType: ForumConstants.FORUM_ANSWER_ADDED,
      newAnswer: answerText
    });
  }
  
}

export default ForumActions;
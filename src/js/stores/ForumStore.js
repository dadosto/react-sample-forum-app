import EventEmitter from '../eventemitter.js';

class Store extends EventEmitter {
  
  constructor() {
    super();
    this.answerData = {
      "1": {
        body: "Isn't it about time travel?",
        correct: false
      },
      "2": {
        body: "React is bla bla",
        correct: false
      },
      "3": {
        body: "React is a synonym for 'respond'",
        correct: false
      }
    };
  }
  
  getAnswers() {
    return this.answerData;
  }
  
  addAnswer(newAnswer) {
    this.answerData[Object.keys(this.answerData).length + 1] = {
      body: newAnswer,
      correct: false
    }
    this.emit('change');
  }
  
  markAsCorrect(id) {
    for (var key in this.answerData) {
      this.answerData[key].correct = false;
    }
    this.answerData[id].correct = true;
    this.emit('change');
    console.log('Marked... ', this.answerData);
  }
  
  emitChange() {
    this.emit('change');
  }
  
  addChangeListener(listener) {
    this.on('change', listener);
  }
}

const ForumStore = new Store();

export default ForumStore;
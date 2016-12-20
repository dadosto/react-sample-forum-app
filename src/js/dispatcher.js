class Dispatcher {
  
  constructor() {
    this.lastId = 0;
    this.callbacks = {};
  }
  
  register(callback) {
    let id = 'CID' + this.lastId++;
    this.callbacks[id] = callback;
    return id;
  }
  
  dispatch(action) {
    for (var id in this.callbacks) {
      this.callbacks[id](action);
    }
  }
  
  waitFor(ids) {
    // TODO - a particular callback might have to wait for other callbacks to be executed before it does
  }
  
}

const ForumDispatcher = new Dispatcher();

export default ForumDispatcher;
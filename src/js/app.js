import React from 'react';
import ReactDOM from 'react-dom';

import {ForumDispatcher} from './dispatcher.js';
console.log('imported... ', ForumDispatcher);
import ForumComponent from './components/Forum.react.js';

ReactDOM.render(
	<ForumComponent />,
	document.getElementById('forum')
);
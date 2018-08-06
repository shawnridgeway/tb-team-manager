// 3p
import React from 'react';
import ReactDOM from 'react-dom';

// project
import './reset.css';
import './index.css';
import App from './views/App/App';
import memberData from './data.json'

const store = {
  allMembers: memberData
};

ReactDOM.render(<App store={store} />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCip__ZEQXo-W2PpWqxhu6NrdXqsPVj-C0",
  authDomain: "test-17ce9.firebaseapp.com",
  databaseURL: "https://test-17ce9.firebaseio.com",
  projectId: "test-17ce9",
  storageBucket: "test-17ce9.appspot.com",
  messagingSenderId: "173533125991"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

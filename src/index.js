import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';
import firebase from 'firebase';


var config = {
    apiKey: "AIzaSyAJ0E3sKCXa_28se0ZZ4uQ-2SrZ0Bz0roA",
    authDomain: "auth-39191.firebaseapp.com",
    databaseURL: "https://auth-39191.firebaseio.com",
    projectId: "auth-39191",
    storageBucket: "auth-39191.appspot.com",
    messagingSenderId: "342390687128"
 };

firebase.initializeApp(config);


const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));

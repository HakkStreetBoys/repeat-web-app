import React, { Component } from 'react';
import Navigation from './Navigation';
import firebase from 'firebase';

export default class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBqxVu2HGo992cGCb0UUPbl4cvh_FVFgbo",
      authDomain: "one-time-password-c0c13.firebaseapp.com",
      databaseURL: "https://one-time-password-c0c13.firebaseio.com",
      projectId: "one-time-password-c0c13",
      storageBucket: "one-time-password-c0c13.appspot.com",
      messagingSenderId: "224931022962"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <div>
        <Navigation />
        <div className="">
          {this.props.children}
        </div>
      </div>
    );
  }
}

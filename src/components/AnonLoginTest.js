import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFood } from '../actions/index';
import { Link } from 'react-router';
import firebase from 'firebase';

class AnonLogin extends Component {
  
  // const btnLogin = document.getElementById('btnLogin');

  // btnLogin.addEventListener('click', e => {
  //   firebase.auth().signInAnonymously();
  // });

  renderDrasl() {
    
    const fbaseAuth = firebase.auth().signInAnonymously();

    return (
      <a onClick={ () => fbaseAuth } id="btnLogin" href="#">Login anon</a>
      )
  }

  render() {

    return(
        <div>
          {this.renderDrasl()}
        </div>

      )
  }

}


export default AnonLogin;

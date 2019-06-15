import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './Components/Common';
import LoginForm from './Components/LoginForm';
import firebase from 'firebase';

export default class App extends Component {
  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyBN8DBAes5zxFohwjKHtQ47uZTYLdH4b6o",
      authDomain: "authentication-3972c.firebaseapp.com",
      databaseURL: "https://authentication-3972c.firebaseio.com",
      projectId: "authentication-3972c",
      storageBucket: "authentication-3972c.appspot.com",
      messagingSenderId: "264475126894",
      appId: "1:264475126894:web:a0b916ba6de01c22"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    );
  }
}

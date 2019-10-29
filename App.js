import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Header } from './src/components/common'
import firebase from 'firebase'
import firebaseConfig from './firebaseConfig';

class App extends Component{
  componentDidMount() {

  }

  render() {
    return (
      <Header headerText="Auth App" />
    )
  }
}

const styles = StyleSheet.create({});

export default App;
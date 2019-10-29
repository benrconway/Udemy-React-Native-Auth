import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import firebase from 'firebase'
import { Header } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import { firebaseConfig } from './firebaseConfig';

class App extends Component{
  componentDidMount() {
    !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerText="Auth App" />
        <LoginForm />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  }
});

export default App;
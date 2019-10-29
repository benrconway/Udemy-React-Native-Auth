import React, { Component } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Spinner } from './src/components/common'
import LoginForm from './src/components/LoginForm'
import { firebaseConfig } from './firebaseConfig';

class App extends Component{
  state = { loggedIn : null }
  componentDidMount() {
    !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  logout() {
    firebase.auth().signOut();
  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return(
          <Button onPress={this.logout.bind(this)}>
            Log Out
          </Button>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner />
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerText="Auth App" />
        { this.renderContent() }
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1
  },
});

export default App;
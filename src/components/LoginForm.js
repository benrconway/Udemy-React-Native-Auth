import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email : '', password: '', error: '', loading: false };

  async onButtonPress() {
    const { email, password } = this.state;
    this.setState({ ...this.state, error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail() {
    this.setState({ ...this.state, error: 'Authentication Failed', loading: false })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    })
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner size="small" />
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    )
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label={"Email"}
            value={this.state.email}
            onChangeText={email => this.setState({ ...this.state, email })}
            placeholder={"user@example.com"}
          />
        </CardSection>
        <CardSection>
          <Input
            label={"Password"}
            value={this.state.password}
            onChangeText={password => this.setState({ ...this.state, password })}
            placeholder={"password1"}
            secure={true}
          />
        </CardSection>
        { this.state.error ? <Text style={styles.errorStyle}>{this.state.error}</Text> : null }
        <CardSection>
         { this.renderButton() }
        </CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  }
});

export default LoginForm;

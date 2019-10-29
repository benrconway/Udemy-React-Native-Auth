import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secure = false }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        autoCapitalize={'none'}
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        style={styles.inputStyle}
        secureTextEntry={secure}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    height: 20,
    width: 100,
    paddingHorizontal: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle:{
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle:{
    height: 40,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1
  }
});

export { Input };
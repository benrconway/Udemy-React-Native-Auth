import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ headerText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerText}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },
  container: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
});

export { Header };

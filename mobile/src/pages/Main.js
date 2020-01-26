import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function Main() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello OminiStack!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 32,
  },
});

export default Main;
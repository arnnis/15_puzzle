import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import Grid from './components/Grid';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.puzzle}>15 puzzle</Text>
        <Grid />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#f2f3f5',
  },
  puzzle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 100,
  },
});

export default App;

import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';
import Grid from './components/Grid';
import {Provider} from 'react-redux';
import {store} from './store/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.puzzle}>15 puzzle</Text>
        <Grid />
      </View>
    </Provider>
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

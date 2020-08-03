import React from 'react';
import {AppRegistry, Text} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './src/store/configureStore';

AppRegistry.registerComponent(appName, () => App);

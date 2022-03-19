/**
 * @format
 */
import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component - First approach
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };

// Create a component - Second approach
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

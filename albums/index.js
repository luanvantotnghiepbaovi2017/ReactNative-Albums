// Import a library to help create a component
import React from 'react';
import { AppRegistry, SafeAreaView } from 'react-native';
import Header from './src/components/header';

// Create a component - First approach
// const App = () => {
//   return (
//     <Text>Some Text</Text>
//   );
// };

// Create a component - Second approach - With SafeAreaView
// const App = () => (
//   <SafeAreaView style={{ backgroundColor: '#F8F8F8' }}>
//   <Header />
//   </SafeAreaView>
// );

// Create a component - Second approach - Without SafeAreaView
const App = () => (
  <Header />
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

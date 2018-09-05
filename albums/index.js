// Import a library to help create a component
import React from 'react';
import { AppRegistry, View, StatusBar } from 'react-native'; // SafeAreaView
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

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
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// Render it to the device
AppRegistry.registerComponent('albums', () => App);

// Import libraries for making a component
import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Replace this functional component with a class based component
// const AlbumList = () => {
//   return (
//     <View>
//       <Text>AlbumList!!!</Text>
//     </View>
//   );
// };

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    // console.log('componentWillMount in AlbumList');
    // debugger;
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
         .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  } 

  render() {
    console.log(this.state);

    return (
      <View>
        { this.renderAlbums() }
      </View>
    );
  }
}

export default AlbumList;

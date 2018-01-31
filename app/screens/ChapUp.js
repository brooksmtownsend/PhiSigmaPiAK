import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';

class ChapUp extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://phisigmapi.web.unc.edu/chapter-updates/'}}
      />
    );
  }
}

export default ChapUp;
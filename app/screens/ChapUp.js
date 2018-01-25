import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class ChapUp extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <WebView
        source={{uri: 'https://phisigmapi.web.unc.edu/chapter-updates/'}}
      />
    );
  }
}

ChapUp.defaultProps = { ...me };

export default ChapUp;

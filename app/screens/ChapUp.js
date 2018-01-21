import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class ChapUp extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <View style={{marginTop: 20}}> 
        <Text>{"Chapter Updates coming here soon!"}</Text>
      </View>
    );
  }
}

ChapUp.defaultProps = { ...me };

export default ChapUp;

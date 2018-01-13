import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Tile, List, ListItem, Button } from 'react-native-elements';
import { me } from '../config/data';

class Me extends Component {
  handleSettingsPress = () => {
    this.props.navigation.navigate('Settings');
  };

  render() {
    return (
      <View> 
        <Text>{"Chapter Updates coming here soon!"}</Text>
      </View>
    );
  }
}

Me.defaultProps = { ...me };

export default Me;

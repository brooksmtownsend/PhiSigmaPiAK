import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

class Attendance extends Component {
  render() {
    const attendance = '';
    return (
      <View style={{marginTop: 20}}>
        <Text> Password is: (get this from update?)</Text>
        <WebView
          source={{uri: attendance}}
          style={{marginTop: 20}}
        />
      </View>
    )
  }
}

export default Attendance;
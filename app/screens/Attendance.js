import React, { Component } from 'react';
import { WebView } from 'react-native';

class Attendance extends Component {
  render() {
    const attendance = 'http://beotia.com/phisigmapi/';
    return (
      <WebView
        source={{uri: attendance}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default Attendance;
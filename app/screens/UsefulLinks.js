import React, { Component } from 'react';
import { WebView } from 'react-native';

class UsefulLinks extends Component {
  render() {
    const usefullinks = 'https://phisigmapi.web.unc.edu/useful-links/';
    return (
      <WebView
        source={{uri: usefullinks}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default UsefulLinks;
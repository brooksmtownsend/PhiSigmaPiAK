import React, { Component } from 'react';
import { Text, View, TouchableOpacity, WebView } from 'react-native';

class UsefulLinks extends Component {

  WEBVIEW_REF = null;

  constructor() {
    super();
    this.state = {
      canGoBack: false
    }
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  onBack() {
    this.WEBVIEW_REF.goBack();
  }

  render() {
    const usefullinks = 'https://phisigmapi.web.unc.edu/useful-links/';
    return (
      <View style={{flex:1}}>
        <WebView
          ref={(ref) => this.WEBVIEW_REF = ref}
          style={{flex: 1}}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          source={{uri: usefullinks}}
          /> 

        <View>
          <TouchableOpacity
            disabled={!this.state.canGoBack}
            onPress={this.onBack.bind(this)}
            >
            <Text style={{fontSize: 20, backgroundColor: 'rgb(247, 247, 247)', padding: 3, paddingLeft: 10, color: 'rgb(100, 23, 180)'}}> {'🅱️ack 😤🤔😩'} </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default UsefulLinks;
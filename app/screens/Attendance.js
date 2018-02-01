import React, { Component } from 'react';
import { View, Text, WebView, TextInput, Button, TouchableOpacity } from 'react-native';

export default class Attendance extends Component {

  constructor() {
    super();
    this.state = {
      uriPath: '',
      shouldRenderWebView: false,
      canGoBack: false
    };
  }

  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  onBack() {
    this.refs[WEBVIEW_REF].goBack();
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop: 30, alignSelf: 'center'}}> Enter the attendance code below </Text>
        <TextInput
          style={{marginTop: 5, backgroundColor: '#fff', padding: 5, width: '80%', alignSelf: 'center'}}
          onChangeText={(text) => this.setState({uriPath:text, shouldRenderWebView: false})}
          value={this.state.uriPath}
        />
        <Button
          onPress={() => this.setState({shouldRenderWebView: true})}
          title="Click here to sign in."
          color="#227D7E"
          accessibilityLabel="Attendance Button"
        />
        {this.state.shouldRenderWebView && <WebView
          source={{uri:'https://tinyurl.com/' + this.state.uriPath}}
          style={{marginTop:20, flex:1}}
        /> }
      </View>
    );
  }
}
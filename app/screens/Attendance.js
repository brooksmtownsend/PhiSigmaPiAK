import React, { Component } from 'react';
import { View, Text, WebView, TextInput, Button, TouchableOpacity, Keyboard } from 'react-native';

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

  renderWebView() {
    Keyboard.dismiss();
    this.setState({shouldRenderWebView: true});
  }

  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{marginTop: 30, alignSelf: 'center', fontSize: 20}}> Enter the attendance code below </Text>
        <TextInput
          style={{marginTop: 5, backgroundColor: '#fff', padding: 5, width: '80%', height: '7%', fontSize: 25, alignSelf: 'center'}}
          onChangeText={(text) => this.setState({uriPath:text, shouldRenderWebView: false})}
          autoCorrect={false}
          autoCapitalize={'none'}
          value={this.state.uriPath}
          onEndEditing={() => this.renderWebView()}
        />
        <Button
          onPress={() => this.renderWebView()}
          title="Click here to sign in."
          color="#227D7E"
          accessibilityLabel="Attendance Button"
        />
        {this.state.shouldRenderWebView && <WebView
          source={{uri:'https://tinyurl.com/' + this.state.uriPath}}
          style={{marginTop:5, flex:1}}
        /> }
      </View>
    );
  }
}
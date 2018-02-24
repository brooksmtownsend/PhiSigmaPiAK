import React, { Component } from 'react';
import { View, Text, WebView, TextInput, Button, TouchableOpacity, Keyboard, ActivityIndicator, SafeAreaView, Image } from 'react-native';

/**
 * Attendance is our component for PSP event sign-in
 * State is composed of:
 * uriPath: Attendance code and TinyURL postfix
 * shouldRenderWebView: When true will render WebView, starts false and changes upon clicking the button
 */
export default class Attendance extends Component {

  constructor() {
    super();
    this.state = {
      uriPath: '',
      shouldRenderWebView: false,
    };
  }

  // Callback function that is called when the button is pressed, or TextInput is done editing.
  renderWebView() {
    Keyboard.dismiss();
    this.setState({shouldRenderWebView: true});
  }

  // Function returns an activity indicator for idle loading
  renderLoadingView() {
    return (
      <ActivityIndicator color="#0D6275" size="large" style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99999
    }}/>
    );
  }

  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={{flex:1}}>
          <Text style={{alignSelf: 'center', fontSize: 20}}> Enter the attendance code </Text>
          <TextInput
            style={{marginTop: 5, backgroundColor: '#fff', padding: 5, width: '80%', height: '7%', fontSize: 25, alignSelf: 'center', height: 40}}
            onChangeText={(text) => this.setState({uriPath:text, shouldRenderWebView: false})}
            autoCorrect={false}
            autoCapitalize={'none'}
            value={this.state.uriPath}
            onEndEditing={() => this.renderWebView()}
          />
          <Button
            onPress={() => this.renderWebView()}
            title="Click here to sign in."
            color="#0D6275"
            style={{flex: 1}}
            accessibilityLabel="Attendance Button"
          />
          {/* Either renders instructions or the Attendance website depending on the state */}
          {!this.state.shouldRenderWebView && <View style={{flex:1}}>
              <Image style={{flex:1}} source={{uri:'https://i.imgur.com/szmHnsh.png'}} />
            </View>}
          {this.state.shouldRenderWebView && <WebView
            source={{uri:'https://tinyurl.com/' + this.state.uriPath}}
            style={{marginTop:5, flex:1}}
            renderLoading={this.renderLoadingView} startInLoadingState={true}
          /> }
        </View>
      </SafeAreaView>
    );
  }
}
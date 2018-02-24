import React, { Component } from 'react';
import { Text, View, TouchableOpacity, WebView, ActivityIndicator, SafeAreaView } from 'react-native';

class UsefulLinks extends Component {

  // Reference to allow navigating back in the WebView
  WebViewReference = null;

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
    this.WebViewReference.goBack();
  }

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
    const usefullinks = 'https://phisigmapi.web.unc.edu/useful-links/';
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1}}>
          <WebView
            ref={(ref) => this.WebViewReference = ref}
            style={{flex: 1}}
            onNavigationStateChange={this.onNavigationStateChange.bind(this)}
            source={{uri: usefullinks}}
            renderLoading={this.renderLoadingView} startInLoadingState={true} />
          <View>
            <TouchableOpacity
              disabled={!this.state.canGoBack}
              onPress={this.onBack.bind(this)}>
              
              <Text style={{fontSize: 20, 
                backgroundColor: 'rgb(247, 247, 247)', 
                padding: 3, 
                paddingLeft: 10,
                color: 'rgb(100, 23, 180)'}}> {'Go Back'}</Text>
              <Text style={{backgroundColor: 'rgb(247, 247, 247)', color: '#000', fontSize: 15, fontFamily: "System"}}> Protected links password: squirrelschool</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

export default UsefulLinks;
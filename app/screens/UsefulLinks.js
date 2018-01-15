import React, { Component } from 'react';
import { Text, Linking, WebView, View, StyleSheet  } from 'react-native';

const brotherhoodexcuse = 'http://pspattendance.web.unc.edu/brother-excuse-form/';
const venmolink = 'https://venmo.com/PSP-AK2?via=searchbox';
const phisigsite = 'http://phisigmapi.web.unc.edu/';
const flickr = 'https://www.flickr.com/photos/130864714@N05/';
const sops = 'https://drive.google.com/drive/folders/0B7vtuzTLarGIQmxfaHpnR25YVjQ';
const idea = 'https://docs.google.com/forms/d/e/1FAIpQLSdE7GEy2C_Fuwds1Dce0YwiiJLmVQFkHN5rTyp8lakUWBQsKg/viewform';
const fallphotos = 'https://photos.google.com/share/AF1QipM2UIEBKx4Hej55IRsvvdOuTAxnCeHteS6wKn8YsmIO_eVut-32WMQBd4ScujAgCg?key=WEI2RXAxWUpuS0xnaXg0SG94S2YtbjRuanI0azNB';
const attendance = 'http://pspattendance.web.unc.edu/';

linkarray =[];
linkarray[0] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(brotherhoodexcuse)}> Brotherhood Excuse Form {"\n"}</Text>;
linkarray[1] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(venmolink)}> Phi Sigma Pi Venmo {"\n"}</Text>;
linkarray[2] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(phisigsite)}> Phi Sigma Pi Website {"\n"}</Text>;
linkarray[3] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(attendance)}> Phi Sigma Pi Attendance {"\n"}</Text>;
linkarray[4] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(flickr)}> Flickr {"\n"}</Text>;
linkarray[5] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(sops)}> Standard Operating Procedures/Bylaws {"\n"}</Text>;
linkarray[6] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(idea)}> Idea Box {"\n"}</Text>;
linkarray[7] = <Text style={{color: '#55afad'}} onPress={() => Linking.openURL(fallphotos)}> Fall 2017 Google Photo{"\n"}</Text>;




class UsefulLinks extends Component {
  render() {
    return (
        <View style={{marginTop: 20, backgroundColor: '#0d686b'}}> 
        <Text style = {styles.lightgreen}>{linkarray}</Text>
      </View>
    );
  }
}

export default UsefulLinks;

const styles = StyleSheet.create({
    lightgreen: {
      color: '#55afad',
      fontSize: 20,
    },
    darkgreen: {
      color: '#0d686b',
    },
  });
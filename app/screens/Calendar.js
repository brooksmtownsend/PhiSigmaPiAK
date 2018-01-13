import React, { Component } from 'react';
import { WebView } from 'react-native';

class Calendar extends Component {
  render() {
    const calendar = 'https://calendar.google.com/calendar/embed?src=lopfun0mhkf45ge852vl9luaks%40group.calendar.google.com&ctz=America%2FNew_York';
    return (
      <WebView
        source={{uri: calendar}}
        style={{marginTop: 20}}
      />
    )
  }
}

export default Calendar;
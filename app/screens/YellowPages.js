import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { directory } from '../data/directory'

class YellowPages extends Component {

  // Navigates to UserDetails component with a person's information.
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        <List>
          {directory.map((person) => (
            <ListItem
              key={person.Email}
              title={person.FirstName + " " + person.LastName}
              subtitle={person.Email}
              onPress={() => this.onLearnMore(person)}
              />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default YellowPages;

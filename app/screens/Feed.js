import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  AlertIOS
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { users } from '../config/data';
import { directory } from '../data/directory'

class Feed extends Component {
  onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };

  render() {
    return (
      <ScrollView>
        {/* <List>
          {users.map((user) => (
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              onPress={() => this.onLearnMore(user)}
            />
          ))}
        </List> */}
        <List>
          {directory.map((person) => (
            <ListItem
              key={person.Email}
              title={person.FirstName + " " + person.LastName}
              subtitle={person.Email}
              />
          ))}
        </List>
      </ScrollView>
    );
  }
}

export default Feed;

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {

  /**
   * this.props.navigation.state.params is an object that contains all of the fields from directory.js, namely:
   * FirstName, LastName, PreferredPronouns, Email, PhoneNumber, InitiateClass, PictureUrl
   */
  render() {
    const params = this.props.navigation.state.params;
    const name = params.FirstName + " " + params.LastName;
    const pronouns = params.PreferredPronouns
    const email = params.Email;
    const phone = params.PhoneNumber;
    const iClass = params.InitiateClass;
    const picture = params.PictureURL;

    return (
      <ScrollView>
        {<Tile
          imageSrc={{ uri: picture}}
          featured
          title={''}
          caption={''}
        />}

        <List>
          <ListItem
            title="Initiate Class"
            rightTitle={iClass}
            hideChevron
          />
          <ListItem
            title="Preferred Pronouns"
            rightTitle={pronouns}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={phone}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;

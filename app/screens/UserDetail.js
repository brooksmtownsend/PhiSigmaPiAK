import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const params = this.props.navigation.state.params;
    const name = params.FirstName + " " + params.LastName;
    const pronouns = params.PreferredPronouns
    const email = params.Email;
    const phone = params.PhoneNumber;
    const iClass = params.InitiateClass;
    const picture = "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/23031477_10210642345519344_1603292286207758824_n.jpg?oh=1feea7237a3312b8e4ff0510f0b80f24&oe=5AFCCC81";

    return (
      <ScrollView>
        {<Tile
          imageSrc={{ uri: picture}}
          featured
          title={name}
          caption={email}
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

        {/* <List>
          <ListItem
            title="Username"
            rightTitle={login.username}
            hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Birthday"
            rightTitle={dob}
            hideChevron
          />
          <ListItem
            title="City"
            rightTitle={location.city}
            hideChevron
          />
        </List> */}
      </ScrollView>
    );
  }
}

export default UserDetail;

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';

class UserDetail extends Component {
  render() {
    const params = this.props.navigation.state.params;
    const name = params.FirstName + " " + params.LastName;
    const email = params.Email;
    const phone = params.PhoneNumber;
    const picture = params.Picture;

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

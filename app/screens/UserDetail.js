import React, { Component } from 'react';
import { ScrollView, Clipboard } from 'react-native';
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
            rightTitleStyle={{color:"#444"}}
           hideChevron
          />
          <ListItem
            title="Preferred Pronouns"
            rightTitle={pronouns}
            rightTitleStyle={{color:"#444"}}
           hideChevron
          />
        </List>

        <List>
          <ListItem
            title="Email"
            rightTitle={email}
            rightTitleStyle={{color:"#444"}}
            onPress={() => {
              Clipboard.setString(""+email)
              alert("Copied " + email + " to clipboard")
            }}
            hideChevron
          />
          <ListItem
            title="Phone"
            rightTitle={""+phone}
            rightTitleStyle={{color:"#444"}}
            onPress={() => {
              Clipboard.setString(""+phone)
              alert("Copied " + phone + " to clipboard")
            }}
            hideChevron
          />
        </List>
      </ScrollView>
    );
  }
}

export default UserDetail;

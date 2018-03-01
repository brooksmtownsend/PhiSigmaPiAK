var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');

import UserDetail from '../app/screens/UserDetail'

describe("UserDetail Functionality", () => {
  it("renders correctly", () => {
    const userDetail = renderer.create(
      <UserDetail navigation={{state: {params:{
        FirstName:"first",
        LastName:"last",
        PreferredPronouns:"h/h/h",
        Email:"a@a.a",
        PhoneNumber:"9999999999",
        InitiateClass:"Alpha",
        PictureURL:"https://i.imgur.com/RwrMEtI.jpg"
      }}}} />).toJSON()
    expect(userDetail).toMatchSnapshot()
  })
})

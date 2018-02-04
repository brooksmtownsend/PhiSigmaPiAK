var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');

import { Root } from '../app/config/router'
import App from '../app/index';
import Attendance from '../app/screens/Attendance'
import UsefulLinks from '../app/screens/UsefulLinks'
import YellowPages from '../app/screens/YellowPages'
import UserDetail from '../app/screens/UserDetail'

describe('Application can', () => {
  it('render App correctly', () => {
    const tree = renderer.create(
      <App />
    );
    expect(tree).not.toBeNull();
  });
  it('render Root correctly', () => {
    const tree = renderer.create(
      <Root />
    );
    expect(tree).not.toBeNull();
  });
  it('render Attendance correctly', () => {
    const tree = renderer.create(
      <Attendance />
    );
    expect(tree).not.toBeNull();
  });
  it('render YellowPages correctly', () => {
    const tree = renderer.create(
      <YellowPages />
    );
    expect(tree).not.toBeNull();
  });
  it('render UserDetail correctly', () => {
    const tree = renderer.create(
      <UserDetail navigation={{state: {params:{
        FirstName:"f",
        LastName:"l",
        PreferredPronouns:"mfx",
        Email:"a@a.a",
        PhoneNumber:"1",
        InitiateClass:"A",
        PictureURL:"g.com"
      }}}}/>
    );
    expect(tree).not.toBeNull();
  });
  // Currently there is an issue with React-native WebView and jest that does not allow for this test.
  // it('render UsefulLinks correctly', () => {
  //   const tree = renderer.create(
  //     <UsefulLinks />
  //   );
  //   expect(tree).not.toBeNull();
  // });

});
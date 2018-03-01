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

describe("YellowPages Functionality", () => {
  it("can render correctly", () => {
    const yellowPages = renderer.create(<YellowPages />)
    expect(yellowPages).not.toBeNull()
  })
})
var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');

import Attendance from '../app/screens/Attendance'

describe("Attendance Functionality", () => {
  it("renders correctly", () => {
    const attendance = renderer.create(<Attendance />).toJSON()
    expect(attendance).toMatchSnapshot()
  })
})

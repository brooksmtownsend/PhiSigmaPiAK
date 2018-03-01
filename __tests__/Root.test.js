var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');

import { Root } from '../app/config/router'

describe("Root Functionality", () => {
  it("renders correctly", () => {
    const root = renderer.create(<Root />).toJSON()
    expect(root).toMatchSnapshot()
  })
})

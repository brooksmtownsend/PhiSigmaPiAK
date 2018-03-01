var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');

import App from '../app/index';

describe("App Functionality", () => {
  it("renders correctly", () => {
    const app = renderer.create(<App />).toJSON()
    expect(app).toMatchSnapshot()
  })
})

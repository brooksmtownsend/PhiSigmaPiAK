var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import YellowPages from '../app/screens/YellowPages'
import UserDetail from '../app/screens/UserDetail'

import { ScrollView } from 'react-native'

describe("YellowPages Functionality", () => {
  it("renders correctly", () => {
    const yellowPages = renderer.create(<YellowPages />).toJSON()
    expect(yellowPages).toMatchSnapshot()
  })
  it("renders a ScrollView", () => {
    const yellowPages = shallow(<YellowPages />)
    expect(yellowPages.find(ScrollView)).toHaveLength(1)
  })
})
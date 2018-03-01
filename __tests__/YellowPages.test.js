var React = require('react');
var ReactNative = require('react-native');
var renderer = require('react-test-renderer');
var jest = require('jest');
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import YellowPages from '../app/screens/YellowPages'
import UserDetail from '../app/screens/UserDetail'
import { directory } from '../app/data/directory'

import { ScrollView } from 'react-native'
import { List, ListItem } from 'react-native-elements'

describe("YellowPages Functionality", () => {
  it("renders correctly", () => {
    const yellowPages = renderer.create(<YellowPages />).toJSON()
    expect(yellowPages).toMatchSnapshot()
  })
  it("renders a ScrollView", () => {
    const yellowPages = shallow(<YellowPages />)
    expect(yellowPages.find(ScrollView)).toHaveLength(1)
  })
  it("renders a List", () => {
    const yellowPages = shallow(<YellowPages />)
    expect(yellowPages.find(List)).toHaveLength(1)
  })
  it("renders a ListItem for each person in directory", () => {
    const yellowPages = shallow(<YellowPages />)
    expect(yellowPages.find(ListItem)).toHaveLength(directory.length)
  })
  it("renders a ListItem for Abby with correct properties", () => {
    const yellowPages = shallow(<YellowPages />)
    const abby = directory[0]
    expect(yellowPages.contains(
      <ListItem 
        key={abby.Email}
        title={abby.FirstName + " " + abby.LastName}
        subtitle={abby.Email}
        onPress={() => this.onLearnMore(person)}
      />
    ))
  })
  it("renders a ListItem for a random person with correct properties", () => {
    const yellowPages = shallow(<YellowPages />)
    const randomIndex = Math.floor(Math.random() * directory.length)
    const person = directory[randomIndex]
    expect(yellowPages.contains(
      <ListItem 
        key={person.Email}
        title={person.FirstName + " " + person.LastName}
        subtitle={person.Email}
        onPress={() => this.onLearnMore(person)}
      />
    ))
  })

})
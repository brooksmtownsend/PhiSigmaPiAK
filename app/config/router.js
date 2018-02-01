import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import YellowPages from '../screens/YellowPages';
import UserDetail from '../screens/UserDetail';
import Attendance from '../screens/Attendance';
import UsefulLinks from '../screens/UsefulLinks';

export const FeedStack = StackNavigator({
  YellowPages: {
    screen: YellowPages,
    navigationOptions: {
      title: 'Yellow Pages',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.FirstName + " " + navigation.state.params.LastName,
    }),
  },
});

export const Tabs = TabNavigator({
  YellowPages: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Yellow Pages',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-contact-calendar" size={30} color={backgroundColor='#fff'} />,
      swipeEnabled: false
    },
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: {
      tabBarLabel: 'Attendance',
      tabBarIcon: ({ tintColor }) => <Icon name="group" size={35} color={backgroundColor='#fff'} />,
      swipeEnabled: false
    },
  },
  ImportantLinks: {
    screen: UsefulLinks,
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({ tintColor }) => <Icon name="link" size={35} color={backgroundColor='#fff'} />,
      swipeEnabled: false

    },
  },
}, {
  tabBarOptions:{
    activeTintColor: '#fff',
    inactiveTintColor: '#fff',
    tabStyle: {
      backgroundColor: "#0D6275",
      swipeEnabled : false,
    } 
}}
);

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

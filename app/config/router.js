import React from 'react';
import { Platform, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import YellowPages from '../screens/YellowPages';
import UserDetail from '../screens/UserDetail';
import Attendance from '../screens/Attendance';
import UsefulLinks from '../screens/UsefulLinks';

// FeedStack is a StackNavigator to handle our YellowPages view with navigation to UserDetails
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

// Tabs is the main component of our Application, which currently serves YellowPages, Attendance, and Important Links
export const Tabs = TabNavigator({
  YellowPages: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Yellow Pages',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-contact-calendar" size={30} color={backgroundColor='#0D6275'} />,
      swipeEnabled: false
    },
  },
  Attendance: {
    screen: Attendance,
    navigationOptions: {
      title: 'Attendance',
      tabBarLabel: 'Attendance',
      tabBarIcon: ({ tintColor }) => <Icon name="group" size={35} color={backgroundColor='#0D6275'} />,
      swipeEnabled: false
    },
  },
  ImportantLinks: {
    screen: UsefulLinks,
    navigationOptions: {
      title: 'Important Links',
      tabBarLabel: 'Links',
      tabBarIcon: ({ tintColor }) => <Icon name="link" size={35} color={backgroundColor="#0D6275"} />,
      swipeEnabled: false
    },
  },
}, {
  tabBarOptions:{
    ...Platform.select({
        android: {
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: "#0D6275"
          },
          indicatorStyle: {
            backgroundColor: "rgb(200,223,225)",
          }
        },
        ios: {
          activeTintColor: '#0D6275',
          inactiveTintColor: '#0D6275',
        }
      })
  }}
);

// Root uses the StackNavigator to serve our Tabs
export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import YellowPages from '../screens/YellowPages';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
import Calendar from '../screens/Calendar'
import MeToo from '../screens/MeToo';

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
<<<<<<< HEAD
      // title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
      title: 'Abby Hall',
=======
      title: navigation.state.params.FirstName + " " + navigation.state.params.LastName,
>>>>>>> e51c0f079c5c78edab7ea30e993ddbaffc3f6214
    }),
  },
});

export const Tabs = TabNavigator({
  ChapUp: {
    screen: MeToo,
    navigationOptions: {
      tabBarLabel: 'Chap-Up',
      tabBarIcon: ({ tintColor }) => <Icon name="update" size={35} color={tintColor} />
    },
  },
  YellowPages: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Yellow Pages',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-contact-calendar" size={30} color={tintColor} />,
    },
  },
  Attendance: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Attendance',
      tabBarIcon: ({ tintColor }) => <Icon name="group" size={35} color={tintColor} />
    },
  },
  Calendar: {
    screen: Calendar,
    navigationOptions: {
      tabBarLabel: 'Calendar',
      tabBarIcon: ({ tintColor }) => <Icon name="calendar" size={35} color={tintColor} />
    },
  },
  ImportantLinks: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Links',
      tabBarIcon: ({ tintColor }) => <Icon name="link" size={35} color={tintColor} />
    },
  },
});

export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});

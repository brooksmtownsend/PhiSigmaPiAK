import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import YellowPages from '../screens/YellowPages';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Attendance from '../screens/Attendance';
import Calendar from '../screens/Calendar';
import ChapUp from '../screens/ChapUp';
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
  // ChapUp: {
  //   screen: ChapUp,
  //   navigationOptions: {
  //     tabBarLabel: 'Chap-Up',
  //     tabBarIcon: ({ tintColor }) => <Icon name="update" size={35} color={tintColor} />
  //   },
  // },
  YellowPages: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Yellow Pages',
      tabBarIcon: ({ tintColor }) => <Icon name="perm-contact-calendar" size={30} color={tintColor} />,
    },
  },
  // Attendance: {
  //   screen: Attendance,
  //   navigationOptions: {
  //     tabBarLabel: 'Attendance',
  //     tabBarIcon: ({ tintColor }) => <Icon name="group" size={35} color={tintColor} />
  //   },
  // },
  ImportantLinks: {
    screen: UsefulLinks,
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

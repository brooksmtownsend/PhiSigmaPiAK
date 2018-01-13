import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import YellowPages from '../screens/YellowPages';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';
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
      title: navigation.state.params.FirstName + " " + navigation.state.params.LastName,
    }),
  },
});

export const Tabs = TabNavigator({
  YellowPages: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Yellow Pages',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'me',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
  MeToo: {
    screen: MeToo,
    navigationOptions: {
      tabBarLabel: 'meme',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
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

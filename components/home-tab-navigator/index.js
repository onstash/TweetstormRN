import React from 'react';

import { TabNavigator } from 'react-navigation';

import Tweet from './navigation-wrappers/tweet';
import TweetStorm from './navigation-wrappers/tweet-storm';

const screenProps = {
  navigate(route) {
    this.props.navigation.navigate(route);
  },
  goBack() {
    this.props.navigation.goBack();
  }
};

const RoutesConfig = {
  Tweet: {
    screen: Tweet
  },
  TweetStorm: {
    screen: TweetStorm
  }
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'blue',
    activeBackgroundColor: 'white',
    inactiveTintColor: 'white',
    inactiveBackgroundColor: 'blue',
  }
}

const _HomeTabNavigator = TabNavigator(RoutesConfig, TabNavigatorConfig);

const HomeTabNavigator = props => {
  const _screenProps = Object.assign(
    {},
    screenProps,
    { ...props },
  );
  return (
    <_HomeTabNavigator
      screenProps={ screenProps }
    />
  );
};

export default HomeTabNavigator;
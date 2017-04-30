import React from 'react';

import { TabNavigator } from 'react-navigation';
import {
  forFadeFromBottomAndroid as SlideFromRight
} from 'react-navigation/lib/views/CardStackStyleInterpolator';

import Tweet from './navigation-wrappers/tweet';
import AllContacts from './navigation-wrappers/all-contacts';

const screenProps = {
  navigate(route) {
    this.props.navigation.navigate(route);
  },
  goBack() {
    this.props.navigation.goBack();
  }
};

const transitionConfig = () => {
  return {
    screenInterpolator: SlideFromRight
  };
};

const RoutesConfig = {
  Tweet: {
    screen: Tweet
  },
  All: {
    screen: AllContacts
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
      transitionConfig={ transitionConfig }
    />
  );
};

export default HomeTabNavigator;
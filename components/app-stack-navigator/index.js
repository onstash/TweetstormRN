import React from 'react';

import { StackNavigator } from 'react-navigation';
import {
  forFadeFromBottomAndroid as SlideFromRight
} from 'react-navigation/lib/views/CardStackStyleInterpolator';

import Login from './navigation-wrappers/login.js';
import Home from './navigation-wrappers/home-tab-navigator.js';

const StackNavigatorConfig = {
  header: 'screen',
  mode: 'card'
};

const screenProps = {
  navigate(route) {
    console.log('navigate(route)', route);
    console.log('this', this);
    console.log('this.props', this.props);
    console.log('this.props.navigation.navigate', this.props.navigation.navigate);
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

const initalRouteName = {
  screen: Login
};

const RoutesConfig = {
  initalRouteName,
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
};

const _AppStackNavigator = StackNavigator(RoutesConfig, StackNavigatorConfig);

const AppStackNavigator = () => {
  return (
    <_AppStackNavigator
      screenProps={ screenProps }
      transitionConfig={ transitionConfig }
    />
  );
};

export default AppStackNavigator;
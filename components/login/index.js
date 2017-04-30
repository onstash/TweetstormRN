import React from 'react';
import {
  AppRegistry,
  Text,
  TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../home';

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  render() {
    console.log('props', this.props);
    console.log('navigation props', this.props.navigation);
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity onPress={ () => navigate('Home') }>
        <Text>
          Click to login!
        </Text>
      </TouchableOpacity>
    );
  }
}

const AppRouteConfigs = {
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
};
const AppNavigator = StackNavigator(AppRouteConfigs);

export default AppNavigator;
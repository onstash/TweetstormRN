import React, { Component } from 'react';

import Login from '../../login';
import constants from '../constants';

export default class extends Component {
  static navigationOptions = {
    title: 'Login'
  };
  render() {
    const {
      screenProps: {
        navigate
      }
    } = this.props;
    console.log('LoginWrapper props', this.props);
    console.log('LoginWrapper navigate', navigate);
    const goHome = () => navigate.call(this, constants.HOME);
    return (
      <Login
        goHome={ goHome }
      />
    );
  }
}
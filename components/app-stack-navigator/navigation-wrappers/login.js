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
    const goHome = () => navigate.call(this, constants.HOME);
    return (
      <Login
        goHome={ goHome }
      />
    );
  }
}
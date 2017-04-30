import React, { Component } from 'react';
import Home from '../../home-tab-navigator';

export default class extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return <Home />;
  }
}

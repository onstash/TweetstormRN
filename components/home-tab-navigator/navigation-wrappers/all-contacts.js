import React, { Component } from 'react';

import AllContacts from '../../all-contacts';

export default class extends Component {
  static navigationOptions = {
    title: 'All'
  };
  render() {
    return <AllContacts />;
  }
}
import React, { Component } from 'react';

import Tweet from '../../tweet';

export default class extends Component {
  static navigationOptions = {
    title: 'Tweet'
  };
  render() {
    return <Tweet />;
  }
}
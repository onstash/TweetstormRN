import React, { Component } from 'react';

import TweetStorm from '../../tweet-storm';

export default class extends Component {
  static navigationOptions = {
    title: 'TweetStorm'
  };
  render() {
    return <TweetStorm />;
  }
}
import React from 'react';
import {
  Text,
} from 'react-native';

import { TabNavigator } from "react-navigation";
import { connect } from 'react-redux';

import Tweet from '../tweet';

class TweetScreen extends React.Component {
  render() {
    console.log('TweetScreen', this.props);
    return <Tweet />;
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const HomeScreen = TabNavigator({
  Tweet: {
    screen: TweetScreen
  },
  All: {
    screen: AllContactsScreen
  },
});

export default HomeScreen;

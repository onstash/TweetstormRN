import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import TweetStormTweet from '../tweet-storm-tweet';
import styles from './styles';

class TweetStormTweets extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.tweets !== newProps.tweets;
  }

  render() {
    const { tweets } = this.props;
    const emptyTweets = tweets.filter(tweet => tweet.length === 0);
    console.log('emptyTweets', emptyTweets);
    if (tweets.length === 0) {
      return (
        <View style={ styles.container }>
          <Text style={ styles.errorText }>No tweets to show here</Text>
        </View>
      );
    }
    return (
      <View style={ styles.container }>
        {
          tweets.map(
            (tweet, index) => (
              <TweetStormTweet
                tweet={ tweet }
                key={ index }
                index={ index }
              />
            )
          )
        }
      </View>
    );
  }
};

export default TweetStormTweets;
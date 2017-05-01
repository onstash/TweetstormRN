import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './styles';

class TweetStormTweet extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.tweet !== newProps.tweet;
  }

  render() {
    const { tweet, index } = this.props;
    if (!tweet) {
      return <View />;
    }
    const containerStyles = [
      styles.container,
      index === 0 ? { marginTop: 15 } : {  }
    ];
    return (
      <View style={ containerStyles }>
        <Text style={ styles.tweet }>
          { tweet }
        </Text>
      </View>
    );
  }
};

export default TweetStormTweet;
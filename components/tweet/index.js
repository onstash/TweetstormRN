import React, { Component } from 'react';
import {
  View, ScrollView, Text, TextInput, TouchableOpacity,
  ListView
} from 'react-native';

import { connect } from 'react-redux';
import {
  AutoGrowingTextInput
} from 'react-native-autogrow-textinput';

import { actions } from '../../redux';
import styles from './styles';
import generateTweetStorm from '../../utils/tweet-storm';

class Tweet extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.tweet !== newProps.tweet;
  }

  render() {
    const { tweet, updateTweet } = this.props;
    return (
      <ScrollView
        style={ styles.container }
        keyboardDismissMode={ 'on-drag' }
        scrollToEnd={() => ({ animated: true })}>
        <AutoGrowingTextInput
          autoFocus={ true }
          multiLines={ true }
          placeholder={ 'Your tweet goes here' }
          onChangeText={ updateTweet }
          style={ styles.inputContainer }
          value={ tweet }
        />
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ tweet }) => ({ tweet });

const mapDispatchToProps = dispatch => ({
  updateTweet: tweet => {
    dispatch(actions.tweet.set(tweet));
    const tweetStormTweets = generateTweetStorm(tweet);
    console.log('tweetStormTweets', tweetStormTweets);
    dispatch(actions.tweetStorm.set(tweetStormTweets));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);
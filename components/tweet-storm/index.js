import React, { Component } from 'react';

import { connect } from 'react-redux';

import TweetStormTweets from '../tweet-storm-tweets';

class TweetStorm extends Component {
  shouldComponentUpdate(newProps) {
    return this.props.tweets !== newProps.tweets;
  }

  render() {
    const { tweets } = this.props;
    console.log('TweetStorm tweets', tweets);
    return <TweetStormTweets tweets={ tweets } />;
  }
};

const mapStateToProps = ({ tweetStorm: tweets }) => ({ tweets });

export default connect(mapStateToProps, null)(TweetStorm);
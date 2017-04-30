import actionConstants from '../constants';

const set = tweet => ({
  type: actionConstants.tweet.SET,
  data: tweet
});

const unset = tweet => ({
  type: actionConstants.tweet.UNSET
});

export default {
  set,
  unset
};

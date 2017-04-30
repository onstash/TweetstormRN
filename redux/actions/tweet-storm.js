import actionConstants from '../constants';

const set = tweetStorm => ({
  type: actionConstants.tweetStorm.SET,
  data: tweetStorm
});

const unset = tweetStorm => ({
  type: actionConstants.tweetStorm.UNSET
});

export default {
  set,
  unset
};

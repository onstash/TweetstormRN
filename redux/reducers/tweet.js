import actionsContants from '../constants';

const tweet = (store = 'TWEETSTORM', action) => {
  switch (action.type) {
    case actionsContants.tweet.SET:
      return action.data;
    case actionsContants.tweet.UNSET:
      return '';
    default:
      return store;
  }
};

export default tweet;
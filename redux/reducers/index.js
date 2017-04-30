import { combineReducers } from 'redux';

import tweet from './tweet';
import tweetStorm from './tweet-storm';
import errorMessage from './error-message';

export default combineReducers({
  tweet,
  tweetStorm,
  errorMessage
});
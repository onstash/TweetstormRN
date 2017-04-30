import actionsContants from '../constants';

const tweetStorm = (store = [], action) => {
  switch (action.type) {
    case actionsContants.tweetStorm.SET:
      return action.data;
    case actionsContants.tweetStorm.UNSET:
      return '';
    default:
      return store;
  }
};

export default tweetStorm;
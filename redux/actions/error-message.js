import actionConstants from '../constants';

const set = errorMessage => ({
  type: actionConstants.errorMessage.SET,
  data: errorMessage
});

const unset = errorMessage => ({
  type: actionConstants.errorMessage.UNSET
});

export default {
  set,
  unset
};

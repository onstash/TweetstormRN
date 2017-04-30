import actionsContants from '../constants';

const errorMessage = (store = '', action) => {
  switch (action.type) {
    case actionsContants.errorMessage.SET:
      return action.data;
    case actionsContants.errorMessage.UNSET:
      return '';
    default:
      return store;
  }
};

export default errorMessage;
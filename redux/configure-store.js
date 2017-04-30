import { createStore } from 'redux';

import reducers from './reducers';

export default configureStore = initialState => {
  console.log('inside configureStore');
  console.log('initialState', initialState);
  const store = createStore(
    reducers,
    initialState
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

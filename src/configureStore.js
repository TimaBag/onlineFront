import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import { createLogger } from 'redux-logger';
import mainReducer from './reducers/index';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
};

const logger = createLogger({
  collapsed: true,
  predicate: true,
  duration: true,
  timestamp: false
});

const configureStore = () => {
  let middlewares = [reduxThunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares = [...middlewares, logger];
  }

  const store = createStore(mainReducer, loadState(), applyMiddleware(...middlewares));

  return store;
};

export default configureStore;

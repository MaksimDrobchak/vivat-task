import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(logger, sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

export default store;

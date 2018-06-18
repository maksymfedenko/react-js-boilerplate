import { createStore, applyMiddleware, compose } from 'redux';
import { Map } from 'immutable';
import createReducer from 'reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas';

const sagaMiddleware = createSagaMiddleware();

const initialState = Map();
const enhancers = [];
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const { devToolsExtension } = window;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(createReducer(), initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;

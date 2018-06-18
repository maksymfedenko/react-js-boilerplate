import { combineReducers } from 'redux-immutable';
import profile from './profile';

const createReducer = () => {
  return combineReducers({
    profile,
  });
};

export default createReducer;

import { fork, all } from 'redux-saga/effects'; // eslint-disable-line no-unused-vars
// import auth from './auth';

export default function* root() {
  yield all([
    // fork(auth),
  ]);
}

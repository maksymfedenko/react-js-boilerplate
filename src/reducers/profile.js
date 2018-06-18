import Immutable from 'immutable';
import { handleActions } from 'redux-actions';

const initialState = Immutable.fromJS({
  loading: false,
  profile: null,
});

export const FETCH_PROFILE = 'profile/FETCH_PROFILE';
export const [FETCH_PROFILE_SUCCESS, FETCH_PROFILE_FAILURE] = [
  `${FETCH_PROFILE}_SUCCESS`,
  `${FETCH_PROFILE}_FAILURE`,
];

export const LOGOUT = 'profile/LOGOUT';

export const fetchProfile = () => ({
  type: FETCH_PROFILE,
});

export const logout = () => ({
  type: LOGOUT,
});

export default handleActions(
  {
    [FETCH_PROFILE]: (state) => {
      return state.set('loading', true);
    },
    [FETCH_PROFILE_SUCCESS]: (state, action) => {
      return state.set('loading', false).set('profile', action.payload);
    },
    [FETCH_PROFILE_FAILURE]: (state) => {
      return state.set('loading', false);
    },

    [LOGOUT]: () => {
      return initialState;
    },
  },
  initialState
);

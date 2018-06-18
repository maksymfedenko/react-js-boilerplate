import axios from 'axios';
import { call } from 'redux-saga/effects';

/* global API_URL */

export default function*(payload) {
  try {
    const res = yield call(axios, `${API_URL}${payload.partUrl}`, payload);
    if (res.status >= 200 && res.status < 300) {
      return res.data;
    }
    return {};
  } catch (error) {
    if (!error.response) {
      return {
        error: true,
        errorString: error.toString(),
      };
    }
    return {
      error: true,
      ...error.response.data,
      errorString: stringifyResponseError(error.response),
    };
  }
}

export const getDefaultHeaders = (customHeaders = {}) => {
  return {
    'Content-Type': 'application/json',
    ...customHeaders,
  };
};

export const getDefaultAutorizedHeaders = (customHeaders = {}) => {
  return {
    'Content-Type': 'application/json',
    Authorization: localStorage.getItem('token'),
    ...customHeaders,
  };
};

const stringifyResponseError = (res) => {
  if (res.data.errors) return res.data.errors.join(', ');
  return res.data.message;
};

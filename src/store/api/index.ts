import axios, { AxiosRequestConfig } from 'axios';
import { call, CallEffect, PutEffect } from 'redux-saga/effects';


const baseURL = 'http://192.16.10.3:48000/api';
const client = axios.create({
  baseURL,
});

export default function* apiSaga(
  requestConfig: AxiosRequestConfig,
): Generator<CallEffect | PutEffect> {
  // eslint-disable-next-line no-useless-catch
  try {
    return yield call<(config: AxiosRequestConfig) => void>(client, requestConfig);
  } catch(err) {
    throw err;
  }
}

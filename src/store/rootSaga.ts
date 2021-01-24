import { fork } from 'redux-saga/effects';

import lotoSaga from './loto/saga';


export default function* rootSaga() {
  yield fork(lotoSaga);
}

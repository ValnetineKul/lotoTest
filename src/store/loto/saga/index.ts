import { fork } from 'redux-saga/effects';
import lotoPlay from './lotoPlay';

export default function* tokenGeyser(): Iterable<any> {
  yield fork(lotoPlay);
}

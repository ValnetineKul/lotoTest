import {
  put, takeLatest, call, delay,
} from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { URL, routes } from '../../../appConstants';
import apiActions from '../../api/actions';
import api from '../../api';
import { lotoAnswerChecker, customArrayCreator, history } from '../../../utils';
import type {
  ApiResponse,
} from '../../../types';
import actionTypes, { LotoPlay as Action } from '../actionTypes';

const rightAnswer = {
  firstFieldAnswer: customArrayCreator(8, 19),
  secondFieldAnswer: customArrayCreator(1, 2),
};

function* updateApi(data: any) {
  for(let i = 0; i < 3; i += 1) {
    const { firstField, secondField, isTicketWon } = data;
    try {
      const apiResponse: ApiResponse<any> = yield call(api, {
        method: 'post',
        url: `${URL.LOTO.PLAY}`,
        data: {
          firstField,
          secondField,
          isTicketWon,
        },
      });
      return apiResponse;
    } catch(err) {
      if(i < 2) {
        yield delay(2000);
      }
    }
  }
  throw new Error('API request failed');
}

function* lotoPlay({ type, payload }: Action) {
  const { firstField, secondField } = payload;
  const isTicketWon = lotoAnswerChecker(rightAnswer, payload);
  history.push(`${routes.main.result}/${isTicketWon}`);
  console.log('Right nums:', rightAnswer, 'Player nums:', payload, 'Is winner:', isTicketWon);
  try {
    yield put(apiActions.request(type));
    const res: ApiResponse<any> = yield call(updateApi,
      {
        firstField,
        secondField,
        isTicketWon,
      },
    );
    yield put(apiActions.success<string, any>(type, res.data));
  } catch (err) {
    yield put(apiActions.error(type, err));
    yield call(toast.error, 'Something went wrong, try again later');
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.LOTO_PLAY, lotoPlay);
}

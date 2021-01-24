import type { SelectedNumbersPayload } from '../../types';
import actionTypes from './actionTypes';

export const lotoPlayAction = (payload: SelectedNumbersPayload) => ({
  type: actionTypes.LOTO_PLAY,
  payload,
});

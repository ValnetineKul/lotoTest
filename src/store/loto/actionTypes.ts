/* eslint-disable max-len */
import type {
  Action,
  LotoPlayReq,
} from '../../types';

const LOTO_PLAY = 'LOTO_PLAY';
const LOTO_PLAY_SUCCESS = 'LOTO_PLAY_SUCCESS';

export type LotoPlay = Action<typeof LOTO_PLAY, LotoPlayReq>;
export type LotoPlayAction = LotoPlay | Action<typeof LOTO_PLAY_SUCCESS>;

export default {
  LOTO_PLAY,
  LOTO_PLAY_SUCCESS,
};


import { connectRouter } from 'connected-react-router';
import { history } from '../utils/history';
import ui from './ui/reducer';
import user from './user/reducer';

export default {
  router: connectRouter(history),
  ui,
  user,
};

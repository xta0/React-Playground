import _ from 'lodash';
import { FETCH_POSTS, FETCH_DETAIL, DELETE_POST } from '../actions';

export default function (state = {}, action) {
  console.log(state);
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    case FETCH_DETAIL: {
      const newState = { ...state };
      newState[action.payload.data.id] = action.payload.data;
      return newState;
    }
    case DELETE_POST:
      return _.omit(state, action.payload);

    default:
      return state;
  }
}

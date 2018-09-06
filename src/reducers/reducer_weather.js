import { FETCH_WEATHER } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      if (action.error) {
        return [];
      }
      return [action.payload.data, ...state];

    default:
      return state;
  }
}

import {
  SEND_DATA_REQUEST,
  REQUESTED_DATA_SECCESS,
  REQUESTED_DATA_ERROR,
} from '../constants/actionTypes';

const initialState = {
  url: '',
  loading: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_DATA_REQUEST:
      return {
        url: '',
        loading: true,
        error: false,
      };
    case REQUESTED_DATA_SECCESS:
      return {
        url: action.url,
        loading: false,
        error: false,
      };
    case REQUESTED_DATA_ERROR:
      return {
        url: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

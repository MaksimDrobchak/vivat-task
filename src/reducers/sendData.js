import {
  REQUESTED_DATA_SECCESS,
  REQUESTED_DATA_ERROR,
  FETCH_DATA_REQUEST,
} from '../constants/actionTypes';

const initialState = {
  success: '',
  error: '',
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REQUESTED_DATA_SECCESS:
      return {
        ...state,
        loading: false,
        success: action.data.success,
      };
    case REQUESTED_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.data.error,
      };
    default:
      return state;
  }
};

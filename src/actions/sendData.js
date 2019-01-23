import {
  SEND_DATA_REQUEST,
  FETCH_DATA_REQUEST,
  REQUESTED_DATA_SECCESS,
  REQUESTED_DATA_ERROR,
} from '../constants/actionTypes';

export const sendData = () => ({
  type: SEND_DATA_REQUEST,
});
export const fetchData = () => ({
  type: FETCH_DATA_REQUEST,
});

export const requestDataSuccess = data => ({
  type: REQUESTED_DATA_SECCESS,
  message: data.message,
});
export const requestDataError = () => ({
  type: REQUESTED_DATA_ERROR,
});

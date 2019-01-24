import {
  FETCH_DATA_REQUEST,
  REQUESTED_DATA_SECCESS,
  REQUESTED_DATA_ERROR,
} from '../constants/actionTypes';

export const doAddfetchData = () => ({
  type: FETCH_DATA_REQUEST,
});

export const doAddRequestDataSuccess = data => ({
  type: REQUESTED_DATA_SECCESS,
  data,
});
export const doAddRequestDataError = data => ({
  type: REQUESTED_DATA_ERROR,
  data,
});

import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { doAddRequestDataSuccess, doAddRequestDataError } from '../actions';

import { FETCH_DATA_REQUEST } from '../constants/actionTypes';
import axios from 'axios';

function* requestFetchData (){
  let data;
  axios
    .get('http://www.mocky.io/v2/5c48e56432000068000b5653', {
      method: 'GET',
      dataType: 'json',
    })
    .then(res => (data = res.data));

  const randomNumber = Math.round(Math.random() * 3);

  yield delay(3000);
  if (randomNumber % 2 === 1) yield put(doAddRequestDataSuccess(data));
  if (randomNumber % 2 === 0) yield put(doAddRequestDataError(data));
}

function* watchFetchData (){
  yield takeEvery(FETCH_DATA_REQUEST, requestFetchData);
}

export default function* rootSaga (){
  yield all([ watchFetchData() ]);
}

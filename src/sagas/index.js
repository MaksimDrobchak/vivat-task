import { delay } from 'redux-saga';
import { put, takeEvery, all, call } from 'redux-saga/effects';
import { sendData, requestDataSuccess, requestDataError } from '../actions';
import axios from 'axios';
import { FETCH_DATA_REQUEST } from '../constants/actionTypes';

function* watchSendData (){
  yield takeEvery(FETCH_DATA_REQUEST, sendDataAsync);
}

function* sendDataAsync (){
  const payload = {
    name: sessionStorage.getItem('name'),
    description: sessionStorage.getItem('description'),
    date: sessionStorage.getItem('date'),
    image: sessionStorage.getItem('image'),
  };
  console.log({ ...payload });
  try {
    yield call(delay, 2000);
    yield put(sendData());
    yield call(delay, 2000);
    const data = yield call(() => {
      return axios({
        url: 'http://www.mocky.io/v2/5c47d27731000029008a1ec9',
        method: 'POST',
        crossDomain: true,

        data: payload,
        dataType: 'json',
      }).then(res => {
        console.log(res.data);
        return res.data;
      });
    });
    yield put(requestDataSuccess(data.message));
  } catch (error) {
    yield put(requestDataError());
  }
}
export default function* rootSaga (){
  yield all([ watchSendData() ]);
}

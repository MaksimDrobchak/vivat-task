import { combineReducers } from 'redux';
import spepsReducer from './steps';
import sendDataReducer from './sendData';
export default combineReducers({
  activeStepState: spepsReducer,
  sendDataState: sendDataReducer,
});

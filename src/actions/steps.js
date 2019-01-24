import {
  RESET_STEP,
  SET_BACK_STEP,
  SET_NEXT_STEP,
} from '../constants/actionTypes';

export const doAddNextStep = payload => ({
  type: SET_NEXT_STEP,
  payload,
});
export const doAddBackStep = () => ({
  type: SET_BACK_STEP,
});
export const doAddResetStep = () => ({
  type: RESET_STEP,
});

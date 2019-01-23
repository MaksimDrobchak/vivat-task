import {
  RESET_STEP,
  SET_BACK_STEP,
  SET_NEXT_STEP,
} from '../constants/actionTypes';

const initialState = {
  activeStep: 0,
};
export default (state = initialState.activeStep, action) => {
  switch (action.type) {
    case SET_NEXT_STEP: {
      return state + 1;
    }
    case SET_BACK_STEP: {
      return state - 1;
    }

    case RESET_STEP: {
      return 0;
    }
    default:
      return state;
  }
};

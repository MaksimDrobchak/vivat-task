import {
  RESET_STEP,
  SET_BACK_STEP,
  SET_NEXT_STEP,
} from '../constants/actionTypes';

const initialState = {
  activeStep: 0,
  name: '',
  description: '',
  date: '',
  image: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NEXT_STEP:
      return applyAddNextStep(state, action);
    case SET_BACK_STEP:
      return applyAddBackStep(state, action);
    case RESET_STEP:
      return applyAddResetStep(state, action);

    default:
      return state;
  }
};
const applyAddNextStep = (state, action) => {
  if (state.activeStep == 0) {
    return {
      ...state,
      activeStep: state.activeStep + 1,
      name: action.payload.name,
      description: action.payload.description,
    };
  }
  if (state.activeStep == 1) {
    return {
      ...state,
      date: action.payload.date,
      activeStep: state.activeStep + 1,
    };
  }
  if (state.activeStep == 2) {
    return {
      ...state,
      image: action.payload.image,
      activeStep: state.activeStep + 1,
    };
  }
};

const applyAddBackStep = (state, action) => {
  if (state.activeStep == 1) {
    return { ...state, date: '', activeStep: state.activeStep - 1 };
  }
  else if (state.activeStep == 0) {
    return {
      ...state,
      name: '',
      description: '',
      activeStep: state.activeStep - 1,
    };
  }
  return {
    ...state,
    activeStep: state.activeStep - 1,
  };
};
const applyAddResetStep = (state, action) => {
  const activeStep = 0;
  window.sessionStorage.clear();
  return {
    ...state,
    activeStep,
    name: '',
    description: '',
    date: '',
    image: null,
  };
};

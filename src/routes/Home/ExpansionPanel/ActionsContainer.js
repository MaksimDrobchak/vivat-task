import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { doAddBackStep, doAddNextStep, doAddfetchData } from '../../../actions';
import Popap from '../../../components/Popap';

const ActionsContainer = props => {
  const {
    activeStep,
    onAddNextStep,
    onAddBackStep,
    length,
    onAddfetchData,
  } = props;
  let isDisible;
  let payload;
  if (activeStep === 0) {
    window.sessionStorage.clear();
    payload = {
      name: '',
    };
    isDisible = false;
  }
  if (activeStep === 1) {
    payload = {
      name: window.sessionStorage.getItem('name'),
      description: window.sessionStorage.getItem('description'),
      date: window.sessionStorage.getItem('date'),
    };
    isDisible = false;
  }
  if (activeStep === 2) {
    payload = {
      image: window.sessionStorage.getItem('image'),
    };
    isDisible =
      window.sessionStorage.getItem('name') === null ||
      window.sessionStorage.getItem('description') === null ||
      window.sessionStorage.getItem('date') === null;
  }

  return (
    <div style={{ marginTop: 50 }}>
      <Button disabled={activeStep === 0} onClick={onAddBackStep}>
        Back
      </Button>
      {
        activeStep === length - 1 ? <Popap
          isDisible={isDisible}
          onAddfetchData={onAddfetchData}
        /> :
        <Button
          variant='contained'
          color='primary'
          disabled={isDisible}
          onClick={() => onAddNextStep(payload)}>
          Next
        </Button>}
    </div>
  );
};
const mapStateToProps = state => ({
  activeStep: state.activeStepState.activeStep,
});

const mapDispatchToProps = dispatch => ({
  onAddNextStep: payloda => dispatch(doAddNextStep(payloda)),
  onAddBackStep: () => dispatch(doAddBackStep()),
  onAddfetchData: () => dispatch(doAddfetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionsContainer);

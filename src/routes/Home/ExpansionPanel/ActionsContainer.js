import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import { fetchData } from '../../../actions';
const ActionsContainer = ({
  activeStep,
  onAddNextStep,
  onAddBackStep,
  length,
  onFetchData,
}) => {
  if (activeStep === 3) {
    onFetchData();
  }
  return (
    <div style={{ marginTop: 50 }}>
      <Button disabled={activeStep === 0} onClick={onAddBackStep}>
        Back
      </Button>

      <Button
        variant='contained'
        color='primary'
        onClick={() => onAddNextStep()}>
        {
          activeStep === length - 1 ? 'Finish' :
          'Next'}
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchData()),
});
export default connect(null, mapDispatchToProps)(ActionsContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Loading from '../Loading';
import Link from '../Link';

function Transition (props){
  return <Slide direction='up' {...props} />;
}

class Popap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false,
    };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen () {
    this.setState({ open: true });
    this.props.onAddfetchData();
  }

  handleClose () {
    this.setState({ open: false });
  }

  render () {
    const { loading, success, error } = this.props;
    return (
      <div>
        <Button
          variant='contained'
          color='primary'
          disabled={this.props.isDisible}
          onClick={this.handleClickOpen}>
          Finish
        </Button>

        <Dialog
          open={this.state.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'>
          <DialogTitle id='alert-dialog-slide-title'>
            {'REQUEST SUCCESS'}
          </DialogTitle>
          {
            loading ? <Loading /> :
            <div>
              <DialogContent>
                <DialogContentText id='alert-dialog-slide-description'>
                  <Link />
                  <br />
                  {success && <span style={{ color: 'blue' }}>{success}</span>}
                  <br />
                  {error && <span style={{ color: 'red' }}>{error}</span>}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color='primary'>
                  Confirm
                </Button>
              </DialogActions>
            </div>}
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.sendDataState.loading,
  success: state.sendDataState.success,
  error: state.sendDataState.error,
});
export default connect(mapStateToProps)(Popap);

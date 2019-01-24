import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class FirstStep extends Component {
  constructor (props) {
    super(props);

    this.state = {
      name: '',
      description: '',
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
  }

  onChangeName (e) {
    this.setState({ name: e.target.value });
    window.sessionStorage.setItem('name', this.state.name);
  }
  onChangeDescription (e) {
    this.setState({ description: e.target.value });
    window.sessionStorage.setItem('description', this.state.description);
  }
  render () {
    const { name, description } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Input
          placeholder='Name:'
          type='text'
          onChange={e => this.onChangeName(e)}
          value={name}
          className={classes.input}
        />

        <textarea
          cols={25}
          rows={10}
          onChange={e => this.onChangeDescription(e)}
          value={description}
          placeholder='Description:'
          className={classes.textarea}
        />
      </div>
    );
  }
}

FirstStep.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FirstStep);

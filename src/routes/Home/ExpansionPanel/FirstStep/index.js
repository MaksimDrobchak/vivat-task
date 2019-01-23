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

    this.onChange = this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({ [e.target.name]: e.target.value });

    if ([ e.target.name ] == 'name') {
      sessionStorage.setItem('name', this.state.name);
    }
    else if ([ e.target.name ] == 'description') {
      sessionStorage.setItem('description', this.state.description);
    }

    console.log(
      `name: ${sessionStorage.getItem('name')
        .length} \n description: ${sessionStorage.getItem('description')}`,
    );
  }

  render () {
    const { name, description } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Input
          placeholder='Name:'
          type='text'
          onChange={this.onChange}
          name='name'
          value={name}
          className={classes.input}
        />

        <textarea
          cols={25}
          rows={10}
          onChange={this.onChange}
          name='description'
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

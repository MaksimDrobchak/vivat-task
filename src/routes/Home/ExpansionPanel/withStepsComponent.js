import React from 'react';
import { connect } from 'react-redux';

function getSessionItem (string){
  if (
    sessionStorage.getItem(`${string}`) !== '' &&
    sessionStorage.getItem(`${string}`) !== undefined &&
    sessionStorage.getItem(`${string}`) !== null
  ) {
    return sessionStorage.getItem(`${string}`).toString();
  }
  return '';
}

const withStepComponent = Component => {
  class WithStepComponent extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        step1: 'Step 1',
        step2: 'Step 2',
        step3: 'Step 3',
      };

      this.listener = this.listener.bind(this);
    }

    shouldComponentUpdate (nextProps, nextState) {
      if (this.state.step1 !== nextState.step1) {
        return true;
      }
      if (this.state.step2 !== nextState.step2) {
        return true;
      }

      if (this.props.activeStepState !== nextProps.activeStepState) {
        return true;
      }

      return false;
    }

    componentDidUpdate () {
      this.listener();
    }

    componentWillUnmount () {
      this.listener();
    }

    listener () {
      const name = getSessionItem('name');
      const date = getSessionItem('date');

      this.setState({
        step1: 'Step 1 ' + ' ' + name,
      });
      this.setState({ step2: 'Step 2 ' + ' ' + date });
    }

    render () {
      const steps = [ this.state.step1, this.state.step2, this.state.step3 ];

      return <Component steps={steps} {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    activeStepState: state.activeStepState,
  });

  return connect(mapStateToProps)(WithStepComponent);
};
export default withStepComponent;

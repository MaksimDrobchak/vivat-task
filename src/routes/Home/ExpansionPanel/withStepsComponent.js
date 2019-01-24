import React from 'react';

const withStepComponent = Component =>
  class WithStepComponent extends React.Component {
    constructor (props) {
      super(props);

      this.state = {
        step1: 'Step 1 ',
        step2: 'Step 2 ',
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

      if (this.props.activeStep !== nextProps.activeStep) {
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
      const name = window.sessionStorage.getItem('name');
      const date = window.sessionStorage.getItem('date');
      this.setState({
        step1:

            name === null ? 'Step 1 ' :
            'Step 1 ' + name,
      });
      this.setState({
        step2:

            date === null ? 'Step 2 ' :
            'Step 2 ' + date,
      });
    }

    render () {
      const steps = [ this.state.step1, this.state.step2, this.state.step3 ];

      return <Component steps={steps} {...this.props} />;
    }
  };

export default withStepComponent;

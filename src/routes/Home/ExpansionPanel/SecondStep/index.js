import React, { PureComponent } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

export default class App extends PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };

    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange (date) {
    this.setState({ selectedDate: date });
  }

  render () {
    const { selectedDate } = this.state;
    window.sessionStorage.setItem('date', this.state.selectedDate);
    return (
      <div>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            format='dd/MM/yyyy'
            keyboard
            clearable
            disablePast
            margin='normal'
            label='Date picker'
            value={selectedDate}
            onChange={this.handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>
    );
  }
}

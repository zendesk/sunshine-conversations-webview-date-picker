import React, { Component } from "react";

import moment from 'moment';
import { Calendar } from 'react-date-picker'
import 'react-date-picker/index.css'
import qs from 'qs';

import '../style/DatePicker.css';

class DatePicker extends Component {
  state = {
    date: moment()
  }

  onClick(e) {
    e.preventDefault();

    fetch('/date-selected', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date.toString(),
        appUserId: qs.parse(window.location.search.replace('?', '')).appUserId
      })
    }).then(() => {
      window.WebviewSdk.close(
        () => console.log("closed webview"),
        e => console.log("failed closing webview", e)
      );
    });
  }

  onChangeTitle(e) {
    e.preventDefault();
    this.changeTitle(e.target.value);
  }

  changeTitle(newTitle) {
    const work = () => {
      window.WebviewSdk.setTitle(
        newTitle,
        () => console.log(`title changed to ${newTitle}!`),
        e => console.log("failed setting title", e)
      );
    };
    if (window.WebviewSdk) {
      work();
    } else {
      window.webviewSdkInit = work;
    }
  }

  onChange = (dateString, {dateMoment, timestamp}) => {
    this.setState({
      date: dateMoment
    });
    this.changeTitle(dateString);
  }

  render() {
    return <div className="date-picker">
                <Calendar
      onChange={this.onChange.bind(this)}
      date={this.state.date}
      />
                <br/>
                <button
      className="btn btn-primary confirm-date"
      onClick={e => this.onClick(e)}>Confirm Date
                </button>
    </div>;
  }
}

export default DatePicker;

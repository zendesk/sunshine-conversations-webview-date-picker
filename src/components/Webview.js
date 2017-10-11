import React, { Component } from "react";
import Helmet from "react-helmet";

import 'whatwg-fetch'
import DatePicker from "./DatePicker";

class Webview extends Component {
    render() {
        return (
                <div className="Webview">
                    <Helmet title="Date Picker" />
                    <DatePicker/>
                </div>
        );
    }
}

export default Webview;

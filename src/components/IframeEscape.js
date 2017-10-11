import React, { Component } from "react";
import Helmet from "react-helmet";

import DatePicker from "./DatePicker";

export default class extends Component {
    componentDidMount() {
        console.log("Trying to escape my iframe...");
    }
    render() {
        return (
            <div>
                <Helmet title="iframe Escape Webview" />
                <DatePicker />
            </div>
        );
    }
}

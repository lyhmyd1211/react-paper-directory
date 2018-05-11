import React, { Component } from 'react';
import Directory from "../../";

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this._test = document.getElementById("root");
  }
  
  render(){
    return <div id="test">
        testss
        <h1>111</h1>
        <h2>222</h2>
        <h2>2222</h2>
      <Directory directory={this._test} />
      </div>;
  }
}
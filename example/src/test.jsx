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
        <div>test111</div>
        <div>test111</div>
        <div>test111</div>
        <div>test111</div>
        <div>test111</div>
        <span>222</span>
        <p>3333</p>
        <p>322323</p>
        <span>2222</span>
        <p>23123</p>
        <p>23123</p>
        <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p><p>23123</p>
      <p>23123</p>
      <p>34234</p><p>23123</p>
      <p>23123</p>
      <p>34234</p><p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p><p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <p>23123</p>
      <p>23123</p>
      <p>34234</p><p>23123</p>
      <p>23123</p>
      <p>34234</p>
      <Directory directory={this._test} rule={['h1','span','p']} />
      </div>;
  }
}
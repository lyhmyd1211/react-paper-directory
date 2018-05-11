import React from 'react';
import Directory from "../../";
import Test from './test.jsx';
import { render } from 'react-dom';
import './test.css';

var element = document.getElementById("root");
render(
  <div style={{ height: "10000px" }}>
    test
    <Test/>
  </div>,
  element
);
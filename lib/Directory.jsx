import React, { Component } from "react";
import { getDirectory, getScrollTop, ScrollToAnimate } from "./utils";
import { HashRouter, NavLink } from "react-router-dom";
import './style.css';
export default class Directory extends Component{
  constructor(props) {
    super(props);
    // this.top = 22;
    this._defaultType=true;
    this.rule = this.props.rule||['h1','h2','h3'];
    this.customStyle = this.props.customStyle||{};
    this.state={
      directory:[],
      current:0,
      top:22,
    }
    window.onscroll=()=>{
      this.setState({ 
        current: getScrollTop(),
      });
      
    }
  }
  componentDidMount(){
    this.setState({ directory: getDirectory(this.props.directory, this.rule)});
  }
  scrollToSelect = (node,index) => {
    window.scrollTo(0, node && node.offsetTop);
    let id = "directory-default" + index;
    let cur = document.getElementById(id);
    if (cur) {
      // this.top = cur.offsetTop;
      this.setState({top:cur.offsetTop});
      console.log('cur',cur.offsetTop);
      
    }
  };
  directoryScroll(index) {
    let id = "directory-default" + index;
    let cur = document.getElementById(id);
    let win = document.getElementById("main-default");
    if (cur&&win) {
      // this.setState({ top: cur.offsetTop });
      this.top = cur.offsetTop;
      //this.forceUpdate();
      console.log('bianhua',cur.offsetTop);
      win.scrollTo(0, cur.offsetTop - 68);
    }
  }
  isActive = (index, node, nextNode) => {
    const { current } = this.state;
    if (node && nextNode) {
      let precent = node.offsetTop ;
      let next = nextNode.offsetTop||current+1;
      if (index === 0 && current <= precent) {
        return true;
      } else if (precent <= current && next > current) {
        this.directoryScroll(index);
        return true;
      }
    }
    return false;
  };
  render(){
    console.log('sss', this.state.top);
    // this.rule={h1:{},h2:{},h3:{}}
    if (!Array.isArray(this.rule)) {
      this._defaultType=false;
    }
    let defaultStyle=['first','second','third','fourth'];
    return (
      <div className="main-default" id="main-default" style={this.customStyle}>
        <div style={{ fontSize: "16px", fontWeight: 700, textAlign: 'center' }}>目录</div>
        {/* <div className="directory-active" style={{top:this.state.top}}/> */}
        {/* <span style={{ fontWeight: 700 }}>{content.title}</span> */}
        {this.state.directory && this.state.directory.map((item, index) => (
          <HashRouter key={index}>
            <NavLink
              style={this._defaultType ? {} : this.rule[item.type]}
              className={'directory-default directory-default-' + defaultStyle[item.tagIndex] + " directory-" + item.type}
              isActive={this.isActive.bind(this, index, item.node, item.nextNode)}
              id={'directory-default' + index}
              activeClassName={'directory-active'}
              to={`/header${index}`}
              onClick={this.scrollToSelect.bind(null, item.node,index)}
            >
              {item.text}
            </NavLink>
          </HashRouter>
          ))}
      </div>
    )
  }
}

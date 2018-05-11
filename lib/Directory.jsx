import React, { Component } from "react";
import { getDirectory, getScrollTop } from "./utils";
import { NavLink } from "react-router-dom";
export default class Directory extends Component{
  constructor(props) {
    super(props);
    this.state={
      directory:[],
    }
    window.onscroll=()=>{
      this.setState({ current: getScrollTop() });
    }
  }
  componentDidMount(){
    this.setState({ directory: getDirectory(this.props.directory)});
  }
  scrollToSelect = node => {
    window.scrollTo(0, node && node.offsetTop + document.body.offsetHeight - 20);
  };
  directoryScroll(index) {
    let id = "directory-default" + index;
    let cur = document.getElementById(id);
    let win = document.getElementById("detail-card-directory");
    if (cur) {
      win.scrollTo(0, cur.offsetTop - 68);
    }
  }
  isActive = (index, node, nextNode) => {
    const { current } = this.props;
    if (node && nextNode) {
      let precent = node.offsetTop + document.body.offsetHeight - 20;
      let next = nextNode.offsetTop + document.body.offsetHeight - 20;
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
    console.log('props',this.props);
    return <div>
        <div style={{ fontSize: "16px", fontWeight: 700 }}>目录</div>
        {/* <span style={{ fontWeight: 700 }}>{content.title}</span> */}
      {this.state.directory && this.state.directory.map((item, index) => (
          <li key={index}>
            <a
              isActive={this.isActive.bind(
                this,
                index,
                item.node,
                item.nextNode
              )}
              className={"directory-default " + item.type}
              id={"directory-default" + index}
              activeClassName={"active"}
             
              onClick={this.scrollToSelect.bind(this, item.node)}
            >
              {item.text}
            </a>
          </li>
        ))}
      </div>;
  }
}

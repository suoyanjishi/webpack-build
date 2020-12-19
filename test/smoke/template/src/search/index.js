"use strict";

import React from "react";
import ReactDOM from "react-dom";
import "../../common";
import largeNumber from "syjslarge";
import "./search.less";
import logo from "./images/logo.png";

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null,
    };
  }
  loadComponent() {
    import("./text.js").then((Text) => {
      this.setState({
        Text: Text.default,
      });
    });
  }
  render() {
    const { Text } = this.state;
    const addResult = largeNumber("999", "1");
    return (
      <div className="search-text">
        {Text ? <Text /> : null}
        {addResult}
        搜索文字的内容sdf
        <img src={logo} onClick={this.loadComponent.bind(this)} />
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById("root"));

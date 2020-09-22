import React from "react";
import Sidebar from "./Sidebar";


export default class Container extends React.Component {
  render() {
    return (
      <div>
        <div id="react-graph" className="react-graph"></div>
        <Sidebar />
      </div>
    )
  }
}

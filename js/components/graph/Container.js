import React from "react";
import ReactDOM from "react-dom";
import Graph from "./Graph";
import Sidebar from "./Sidebar";
import PropTypes from "prop-types";
// import * as focusInfo from "./sidebar/focus_descriptions";
// import * as sidebarDivs from "./sidebar/sidebar_divs.js";

export default class Container extends React.Component {
  componentDidMount() {
    // Need to render Graph after mounted so we can render it on the react-graph div
    ReactDOM.render(
      <Graph start_blank={this.props.start_blank} edit={this.props.edit} initialDrawMode="draw-node" />,
      document.getElementById("react-graph")
    );
  }

  render() {
    return (
      <React.Fragment>
        <div id="react-graph" className="react-graph" />
        <Sidebar />
      </React.Fragment>
    )
  }
}

Container.propTypes = {
  start_blank: PropTypes.bool,
  edit: PropTypes.bool,
};


// $("#reset").click(function() {
//   graphComponent.reset();
// });

// $(document).ready(function() {
//   $("#nav-export").click(function() {
//     graphComponent.openExportModal();
//   });
// });

// // Sends an ajax request to retrieve data for graph information
// $.ajax({
//   url: "graphs",
//   dataType: "json",
//   success: function(data) {
//     sidebarDivs.createGraphButtons(data);
//     $(".graph-button").click(function() {
//       var id = $(this).data("id");
//       var name = $(this).text();
//       graphComponent.getGraph(name);
//       sidebarDivs.changeFocusEnable(id);
//     });
//   },
//   error: function() {
//     throw "No graphs in database";
//   }
// });

// sidebarDivs.activateSidebar();

// // Set focus button onclicks
// $(".focus").click((event) => {
//   var id = $(event.target).attr("id");
//   var focusDetails = $("#" + id + "-details");
//   if (graphComponent.state.highlightedNodes == focusInfo[id + "FocusList"]) {
//     graphComponent.setState({ highlightedNodes: [] });
//     focusDetails.animate({ height: "2px" }, "fast");
//   } else {
//     $(".details").css("height", "2px");
//     focusDetails.animate({ height: "128px" }, "fast");
//     focusDetails.html(focusInfo[id + "Description"]);
//     graphComponent.setState({
//       highlightedNodes: focusInfo[id + "FocusList"]
//     });
//   }
// });
